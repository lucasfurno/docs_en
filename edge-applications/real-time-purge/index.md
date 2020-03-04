# Real-Time **Purge** {#real-time-purge-title}

Por meio do Real-Time Purge você pode deletar instantaneamente o cache de seu conteúdo na Azion.

> 1. [Estratégias de atualização de conteúdo](#estrategias-de-atualizacao-de-conteudo)
> 2. [Real-Time Purge](#real-time-purge)
> 3. [Tipos de Purge](#tipos-de-purge)
> 4. [Métodos de Purge](#metodos-de-purge)
> 5. [Purge de objetos com variação de conteúdo](#purge-de-objetos-com-variacao-de-conteudo)
> 6. [Confirmação do Purge](#confirmacao-do-purge)
> 7. [Limites](#limites)

---

## 1. Estratégias de atualização de conteúdo {#estrategias-de-atualizacao-de-conteudo}

Quando você atualiza um conteúdo em sua origem, você deve escolher a melhor estratégia para atualização do mesmo no cache da Azion.

| Tempo de expiração | Nomes de objetos com versão | Real-Time Purge |
|--------------------|-----------------------------|-----------------|
| Ao configurar sua política de cache, você determina o tempo que deseja que seus objetos fiquem em cache na Azion. Quando você atualiza seu conteúdo na origem, a Azion poderá continuar servindo uma cópia em cache do mesmo, pelo tempo que você tiver definido. | Recomendamos que, sempre possível, você utilize alguma marcação de versionamento no nome de seus objetos. Ao atualizar o mesmo na origem, você incrementa a versão no nome do objeto, forçando com que cada modificação de seu conteúdo seja tratada como um novo objeto pela Azion. | Se julgar necessário, você pode deletar instantaneamente o cache de seu conteúdo na Azion tanto no produto Edge Caching quanto em L2 Caching. Dessa forma, você instrui a Azion a buscar a versão mais recente de seu conteúdo na origem. |


Utilize, sempre que possível, políticas de cache com tempos longos para expiração de seu conteúdo, como por exemplo, 1 ano (definindo o campo Maximum TTL com o valor de 31.536.000 segundos). Dessa forma você estará otimizando a performance de seu conteúdo ou aplicação, melhorando a experiência para seus usuários, reduzindo seu tráfego com a Azion e reduzindo a carga em sua origem.

Para versionar o nome de seus objetos, você pode utilizar como marcação de versão um número sequencial, um timestamp ou outro mecanismo que julgar mais apropriado. Por exemplo, ao invés de nomear uma imagem como _image.jpg_, você poderia chamá-la de _image_1.jpg_ e, quando for necessário atualizá-la, incremente a versão para _image_2.jpg_. Dessa forma, toda atualização de seu conteúdo será tratada como um novo objeto pela Azion, o que garante a você os seguintes benefícios:

*   Permite que você controle qual objeto uma requisição deve retornar, mesmo que o usuário possua a versão anterior localmente gravada no cache do navegador ou em algum cache intermediário. Mesmo removendo o cache da Azion, o usuário pode continuar acessando a versão antiga de seus caches locais, até que transcorra o tempo de expiração.
*   Por meio do Raw Logs, você pode acompanhar as versões servidas de seus objetos, tornando mais simples a análise de resultados de suas modificações.
*   Versionamento viabiliza que você sirva versões diferentes de seus objetos para usuários distintos.
*   Simplica também o processo de _rollback_ em caso de problemas com sua atualização.

---

## 2. Real-Time Purge {#real-time-purge}

Ao disponibilizar uma operação de purge rápida e previsível, a Azion torna possível que você aumente o tempo de expiração (TTL) de seus objetos em cache, ou armazene em cache objetos _event-drive_, melhorando _offload_ e performance de seu conteúdo ou aplicação, além de reduzir seu tráfego com a Azion.

Ao utilizar o Real-Time Purge para gerenciar a expiração do cache de seu conteúdo, você poderá realizar também:

*   Cache de conteúdos dinâmicos e respostas de API, sem sacrificar a experiência de usuário, pois os produtos Edge Caching e L2 Caching os Edge Servers da Azion serão atualizados com seu conteúdo mais recente.
*   Melhor eficiência do cache, garantindo maior controle sobre como seus objetos são servidos pela Azion.
*   Melhor e mais previsível gestão de objetos obsoletos ou desatualizados, auxiliando seus desenvolvedores na construção de soluções confiáveis, resilientes e com melhor performance.

Além disso, disponibilizamos duas opções de interface para execução de purge de objetos no Edge Caching e L2 Caching em cache: via [Real-Time Manager](https://manager.azion.com/) ou via [Azion API]({% tl api_v3_real_time_purge %}).

Para acessar o Real-Time Purge via web:

1.  Acesse o Real-Time Manager.
2.  Entre no menu Real-Time Purge.
3.  Preencha os argumentos solicitados e clique no botão de Purge.

---

## 3. Tipos de Purge {#tipos-de-purge}

Você pode executar o purge no produto de Edge Caching quanto em L2 Caching passando como parâmetro a lista de URLs, uma expressão Wildcard ou a lista de Cache Keys.

**URL Purge**

Permite o purge dos objetos em cache, passando-se como argumento uma listagem de URLs. O formato da URL deve respeitar o padrão _scheme://host_ ou apenas _host_, seguido ou não de um _/path_ e da _?query-string_. Ao ocultar o _scheme_, será realizada a expiração dos conteúdos tanto de “http” quanto de “https”.

URL Purge não é recursivo, o que significa que somente as URLs informadas serão expiradas do cache. As URLs são convertidas automaticamente para suas respectivas Cache Keys, sem considerar eventuais variação de conteúdo na mesma URL. Como essa operação não irá expirar variações de conteúdo baseadas em cookies, device groups, formato de imagem ou outras, considere utilizar Cache Key Purge ou Wildcard Purge para essas situações. A expiração de variações do conteúdo baseadas em Query String pode ser realizada usando URL Purge, uma vez que a Query String é uma componente da URL, desde que os argumentos utilizados para variação do conteúdo sejam enviados na ordem correta em que forem apresentados. Se você utiliza a funcionalidade de Query String Sort, ordene os argumentos na requisição ou considere utilizar Cache Key Purge ou Wildcard Purge como alternativa.

Se você utilizar o caracter asterisco (*) em uma requisição de URL Purge, ele será tratado como um caracter na URL e não como Wildcard.

Exemplos de URL Purge:

~~~
www.yourdomain.com static.yourdomain.com/include/site.css static.yourdomain.com/include/site.js dynamic.yourdomain.com/app.py?argument
~~~

**Wildcard Purge**

Permite o purge dos objetos em cache, passando-se como argumento uma expressão Wildcard. O formato da expressão Wildcard deve respeitar o padrão _scheme://host_ ou apenas _host_, seguido ou não de um /path e da ?query-string, com caracter asterisco (*) no path ou na query string.

A expressão Wildcard é convertida automaticamente em múltiplos objetos em um mesmo domínio. Para expirar as variações de conteúdo baseadas em cookies, device groups ou formato de imagem, para a mesma URL, utilize a URL com a expressão “@@*” no final.

~~~
www.yourdomain.com/* static.yourdomain.com/include/*.css static.yourdomain.com/*/site.js static.yourdomain.com/images/image_1.jpg?ims=* dynamic.yourdomain.com/app.py@@*
~~~


**Cache Key Purge**

Permite o purge dos objetos em cache, passando-se como argumento uma listagem de Cache Keys.

A Cache Key é uma entrada de índice para um objeto no cache da Azion. O formato padrão de cache key adotado pela Azion utiliza _host_ e _path_ da URL para identificar objetos. Você pode especificar uma chave de cache avançada para identificar diferentes variações de um objeto, com base em:

*   Argumentos de Query String ou Query String Sort.
*   Cookies (ao utilizar o [Azion Application Acceleration]({% tl documentation_products_application_acceleration %})).
*   Device Groups (ao utilizar o [Azion Adaptive Delivery]({% tl documentation_products_adaptative_delivery %})).
*   Formato de imagens de acordo com o suporte do navegador (ao utilizar o [Azion Image Optimization]({% tl documentation_products_image_optimization %})).

Para obter a Cache Key, deve-se requisitar o conteúdo utilizando o Azion Debug Header (Pragma: azion-debug-cache), por exemplo:

~~~
HEAD /path HTTP/1.1 Host: yourdomain.com Pragma: azion-debug-cache
~~~

A resposta retornará um cabeçalho com a cache key (X-Cache-Key), por exemplo:

~~~
X-Cache-Key: yourdomain.com/path@@
~~~

Cada variação do objeto é representada por uma cache key distinta e é expirada individualmente. Por exemplo, se houver uma variação de objeto por device group, cada URL de cada grupo terá uma Cache Key distinta com o separador “@@” e o nome do device group. Para realizar o purge de todas as variações, deve-se buscar a cache key individualmente de cada grupo.

Exemplos de Cache Key Purge:

~~~
www.yourdomain.com/@@ www.yourdomain.com/@@Mobile static.yourdomain.com/include/site.css static.yourdomain.com/include/site.js static.yourdomain.com/images/image_1.jpg?ims=880x@@ static.yourdomain.com/images/image_1.jpg?ims=880x@@webp
~~~

---

## 4. Métodos de Purge {#metodos-de-purge}

**Delete**

O método Delete remove o objeto do cache. Na próxima requisição do usuário ao conteúdo, será realizada uma requisição GET incondicional para a origem.

Este método de purge impede que a Azion entregue um objeto desatualizado (_stale_), caso a origem esteja inacessível. Ao invés disso, se a origem estiver inacessível, será entregue uma página de erro.

O uso do método Delete é indicado para:

*   Remover um conteúdo do cache da Azion, após a remoção do mesmo na origem.
*   Forçar a remoção e posterior atualização de conteúdos para os quais o _timestamp_ não é confiável.
*   Forçar a entrega de uma página de erro no lugar de um objeto desatualizado (stale), caso sua origem esteja inacessível e a Azion não consiga obter a versão mais recente de seu conteúdo.

---

## 5. Purge de objetos com variação de conteúdo {#purge-de-objetos-com-variacao-de-conteudo}

**Adaptive Delivery**

Ao utilizar o produto Adaptive Delivery, você estará utilizando uma chave de cache avançada. Além de _host_ e _path_, a chave de cache incluirá o separador @@ seguido do nome do device group.

Por exemplo, para uma mesma URL http://www.yourdomain.com/, utilizando a Adaptive Delivery, as chaves de cache poderiam ser:

~~~
www.yourdomain.com/@@ www.yourdomain.com/@@Mobile www.yourdomain.com/@@Tablet
~~~

Para executar o purge de objetos com variação baseada em device groups, você pude utilizar Cache Key Purge, informando todas as variações individualmente, ou Wildcard Purge, utilizando @@* no final.

Application Acceleration

Ao utilizar variação de conteúdo baseada em Cookies, além do host e path, a chave de cache incluirá o separador @@ seguido do nome dos cookies utilizados e valores.

Por exemplo, para uma mesma URL http://www.yourdomain.com/, utilizando variação de conteúdo baseada no cookie “user”, as chaves de cache poderiam ser:

~~~
www.yourdomain.com/@@ www.yourdomain.com/@@user=user1 www.yourdomain.com/@@user=user2
~~~

Para executar o purge de objetos com variação baseada em cookies, você pude utilizar Cache Key Purge, informando todas as variações individualmente, ou Wildcard Purge, utilizando @@* no final.

Ao utilizar variação de conteúdo baseada em Query String, além do _host_ e _path_, a chave de cache incluirá o separador ? e os argumentos de query string utilizados. Por exemplo:

~~~
dynamic.yourdomain.com/product.py?id=1000 dynamic.yourdomain.com/product.py?id=1001
~~~

Para executar o purge de objetos com variação baseada em query string, você pude utilizar Cache Key Purge, informando todas as variações individualmente, ou Wildcard Purge, utilizando ?* no final, ou ainda URL Purge, informando na URL apenas os argumentos utilizados na cache key. Caso você utilize Query String Sort, os argumentos terão que ser enviados na ordem correta.

**Image Optimization**

Ao utilizar o Image Optimization, você estará utilizando uma chave de cache avançada. Além de _host_ e _path_, a chave de cache incluirá o separador ? e os argumentos do produto, além do separador @@ para identificação de variação por formato de imagem suportada pelo navegador.

São exemplos de chaves de cache utilizando o Image Optimization:

~~~
static.yourdomain.com/images/image.jpg@@ static.yourdomain.com/images/image.jpg@@webp static.yourdomain.com/images/image.jpg?ims=88x@@ static.yourdomain.com/images/image.jpg?ims=88x@@webp
~~~

Para executar o purge de imagens processadas pelo Image Optimization, você pode utilizar Cache Key Purge, informando todas as variações individualmente, ou Wildcard Purge, utilizando * no final.

**Sliced Files**

Se você utiliza a otimização de cache para entrega de arquivos grandes (_sliced files_), como em mídias para _Progressive Download_, você estará utilizando uma chave de cache avançada. Além de _host_ e _path_, a chave de cache incluirá o separador _@@bytes=_, para cada _slice_ do conteúdo.

São exemplos de chave de cache utilizando otimização para entrega de arquivos grandes:

~~~
static.yourdomain.com/midias/file.mp4@@bytes=0-1048575 static.yourdomain.com/midias/file.mp4@@bytes=1048576-2097151
~~~

Para executar o purge de objetos utilizando essa otimização, você deve utilizar Wildcard Purge, colocando _@@*_ no final. Você também pode utilizar o Cache Key Purge, desde que informe a cache key de todos os _slices_ corretamente.

Tome cuidado ao executar o purge para um _slice_ individualmente, pois em caso de alteração do conteúdo na origem, o mesmo poderá ficar inconsistente no cache.

**Media Packager**

Ao utilizar o produto Media Packager para entrega de suas mídias em HLS, você estará utilizando a funcionalidade de _dynamic packaging_, que cria automaticamente uma playlist m3u8 e segmenta suas mídias em chunks ts. A URL de seu conteúdo será criada dinamicamente pelo Media Packager.

São exemplos de chave de cache utilizando o Media Packager:

~~~
medias.yourdomain.com/your_id/_definst_/mp4:yourmedia.mp4/chunklist.m3u8 medias.yourdomain.com/your_id/_definst_/mp4:yourmedia.mp4/media_1.ts medias.yourdomain.com/your_id/_definst_/mp4:yourmedia.mp4/media_2.ts medias.yourdomain.com/your_id/_definst_/mp4:yourmedia.mp4/media_3.ts
~~~

Para executar o purge de objetos criados via Media Packager, você pode utilizar Cache Key Purge, informando todas as chaves de cache de playlist e chunks individualmente, ou utilizar Wildcard Purge, colocando * logo após o nome de seu arquivo de mídia.

**Live Ingest**

Se você utiliza o produto Live Ingest para realizar transmuxing de suas transmissões Live de RTMP para HLS, serão criadas automaticamente as playlists m3u8 e os chunks ts.

Você não pode executar o purge para esse tipo de conteúdo. A playlist m3u8 e os chunks ts irão expirar automaticamente por TTL.

**POST Method**

Por default, a Azion permite o cache apenas dos métodos GET e HEAD. Você pode ativar o cache do método POST em suas Cache Settings e, nesse caso, estará usando uma chave de cache avançada. Além do _host_ e _path_, a chave de cache incluirá o separador _@@_ seguido do hash MD5 do corpo da requisição (POST arguments).

~~~
dynamic.yourdomain.com/path@@md5_of_post_arguments
~~~

Para executar o purge desses objetos, você pode utilizar Cache Key Purge, informando todas as variações individualmente, ou Wildcard Purge, utilizando @@* no final.

**Custom Configurations**

Se você possui uma Custom Configuration com uma chave de cache customizada, você deve utilizar o Cache Key Purge para deletar o cache de seus objetos. Além de _host_ e _path_, a chave de cache poderá incluir o separador _@@_ seguido de seus argumentos customizados.

~~~
dynamic.yourdomain.com/path@@custom_arguments
~~~

É necessário que você consulte o formato customizado de sua chave de cache para executar o Cache Key Purge.

---

## 6. Confirmação do Purge {#confirmacao-do-purge}

O purge é uma operação que não requer confirmação. Uma vez que o Real-Time Purge é concluído quase que instantaneamente, nenhuma confirmação da operação é necessária e você pode considerar que seus purges serão concluídos em menos de 3 segundos, execeto no caso de uso consistente dos Rate Limits.

Quando necessário, você poderá consultar o histórico de purges para saber o usuário que realizou a requisição, horário, lista de argumentos, tipo e método de purge.

---

## 7. Limites {#limites}

A operação de purge é executada conforme os seguintes limites de uso, baseados no tipo e no número de objetos que estão sendo expirados:

*   Para URL e Cache Key Purges, até 10 mil objetos a cada 60 segundos, sendo até 200 requisições com 50 objetos por requisição, por cliente. A URL e a Cache Key são limitadas em 4.096 caracteres.
*   Para Wildcard Purges, até 2 mil requests por dia (por intervalo de 24h), sendo uma Wildcard URL por requisição. A Wildcard URL é limitada em 256 caracteres.
*   O histórico de purges é limitado a 6 meses e até 1 milhão de requisições.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.