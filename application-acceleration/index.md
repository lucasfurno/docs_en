# Application **Acceleration**

É o serviço de aceleração de aplicações web e APIs por meio de otimizações de protocolo e do gerenciamento dos diferentes requisitos do conteúdo dinâmico.

Através do Application Acceleration você pode configurar regras avançadas de cache por _path_ que permitem o cache granular, a segmentação de conteúdo e políticas de cache com base em critérios como name/value de Cookies e Query Strings, além de funcionalidades como Bypass Cache, Forward Cookies e suporte a POST/PUT e outros métodos HTTP.

Application Acceleration estende as funcionalidades do produto Azion Content Delivery para permitir que você configure regras por _path_ para:

> 1. [Advanced Cache Key](#AdvancedCacheKey)
> 2. [Bypass Cache](#BypassCache)
> 3. [Forward Cookies](#ForwardCookies)
> 4. [Suporte a POST/PUT e outros métodos](#SuportePOSTPUT)

---

## 1. Advanced Cache Key {#AdvancedCacheKey}

Você pode utilizar a Azion para entregar seu conteúdo dinâmico ou estático. Mesmo a parte dinâmica de um site muitas vezes pode ser cacheada para um perfil de usuários, agrupado de acordo com as necessidades específicas de sua aplicação, quer por cidade, perfil de navegação, quer por perfil de compras. Caso você deseje que seu conteúdo dinâmico seja cacheado nos Edge Servers da Azion, você pode definir regras avançadas de cache key baseadas em Cookies ou em Query String.


Por padrão, a Azion considera cada URL como um objeto distinto no cache. Através do Advanced Cache Key, você pode configurar uma regra customizada de cache key baseada em Cookies ou Query String e, com isso, definir a segmentação de seu conteúdo em sua aplicação.

Para encontrar essa funcionalidade:


1. Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Content Delivery
2. Edite a configuração de Content Delivery desejada
3. Na aba Cache Settings, adicione ou edite uma configuração customizada de cache
4. Na seção Advanced Cache Key, defina sua configuração customizada de Cache by Query String e de Cache by Cookie
5. Na aba Rules Engine, adicione ou edite uma regra para definir o comportamento para um ou mais _paths_
6. Na seção Cache Settings, selecione a configuração customizada de cache que você definiu nos passos 3 e 4


**Cache by Query String**

Na Azion você define como deseja que o conteúdo seja cacheado de acordo com variações de Query String em suas URLs:


* **Content does not vary by Query String (Improves Caching):** define que a cache key deve ignorar a Query String, isto é, duas URLs distintas apenas pela variação da Query String serão consideradas como o mesmo objeto em cache, por exemplo http://seudominio.com/path?queryA e http://seudominio.com/path?queryB irão entregar o mesmo conteúdo do cache para seus usuários.
* **Content varies by some Query String fields (Whitelist):** você pode listar quais campos da Query String devem ser considerados para diferenciar os objetos no cache da Azion. Todos os demais campos serão ignorados. Por exemplo, se você listar o campo “cidade”, as URLs http://seudominio.com/path?cidade=A&nome=X e http://seudominio.com/path?cidade=A&nome=Y serão considerados como um único objeto em cache, enquanto as URLs http://seudominio.com/path?cidade=A&nome=X e http://seudominio.com/path?cidade=B&nome=X serão considerados como objetos distintos.
* **Content varies by Query String, except for some fields (Blacklist):** você pode listar quais campos da Query String devem ser ignorados ao diferenciar os objetos em cache. Todos os demais campos serão considerados. Por exemplo, se você listar o campo “random”, as URLs http://seudominio.com/path?cidade=A&random=123 e http://seudominio.com/path?cidade=B&random=123 serão considerados objetos distintos em cache, enquanto http://seudominio.com/path?cidade=A&random=123 e http://seudominio.com/path?cidade=A&random=456 serão considerados como o mesmo objeto em cache.
* **Content varies by all Query String fields:** define que a cache key deve considerar todos os campos da Query String, isto é, duas URLs distintas pela variação da Query String serão consideradas como dois objetos distintos em cache, por exemplo http://seudominio.com/path?queryA e http://seudominio.com/path?queryB serão armazenados como objetos distintos no cache da Azion.


Além disso, para aumentar a eficiência do cache, você pode ativar a funcionalidade **Query String Sort**. Com a funcionalidade Query String Sort ativada, todos os campos da query string serão ordenados, fazendo com que a posição dos campos seja irrelevante na definição da cache key. Se a posição dos campos é relevante para diferenciar o seu conteúdo, você deve deixar a funcionalidade desativada.

**Cache by Cookie**

Você pode também distinguir os objetos no cache da Azion por nome/valor de cookies.


* **Content does not vary by Cookies (Improves Caching):** define que os cookies não serão levados em consideração para diferenciar objetos no cache da Azion. Apenas a URL será considerada para diferenciação dos objetos.
* **Content varies by some Cookies (Whitelist):** você pode listar o nome dos cookies que sua aplicação utiliza para diferenciar os objetos em cache. Todos os demais cookies, serão ignorados. Como isso você pode segmentar seu conteúdo por perfis de usuários e muito mais. Esta é a opção mais recomendada se você utiliza cookies para gerenciar sessões de usuários.
* **Content varies by Cookies, with the exception of a few (Blacklist):** você pode listar o nome dos cookies que deseja ignorar na definição da cache key e, dessa forma, todos os cookies serão considerados, com exceção dos listados.
* **Content varies by all Cookies:** define que além da URL, todos os cookies deverão ser considerados para diferenciar objetos no cache da Azion.

Utilize essa funcionalidade para segmentar seu conteúdo por perfil de usuário, por sessão de navegação, por região de acesso ou conforme sua necessidade de segmentação de conteúdo.

---

## 2. Bypass Cache {#BypassCache}

Você também pode utilizar a Azion para entregar seu conteúdo dinâmico e personalizado, mesmo quando parte de seu conteúdo não puder ser cacheado na infraestrutura da Azion. Na Azion você define as regras de cache por _path_. Crie uma regra de Bypass Cache para os paths de seu site que não puderem ser cacheados em nossa infraestrutura.

Para encontrar essa funcionalidade:


1. Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Content Delivery
2. Edite a configuração de Content Delivery desejada
3. Na aba Cache Settings, adicione ou edite uma configuração customizada de cache
4. Na seção Expiration Settings, selecione Bypass Cache como sua opção para CDN Cache Settings
5. Na aba Rules Engine, adicione ou edite uma regra para definir o comportamento para um ou mais _paths_
6. Na seção Cache Settings, selecione a configuração customizada de cache que você definiu nos passos 3 e 4


Ao utilizar Bypass Cache você estará configurando o serviço da Azion para repassar todas as requisições a um path diretamente para sua origem. Ainda assim você contará com importantes otimizações de protocolo para acelerar sua aplicação e conexão keepalive entre os Edge Servers da Azion e sua origem, sempre que possível.

**Diferença entre Bypass Cache e TTL 0 (zero)**

Há uma diferença de comportamento entre Bypass Cache e cache com TTL (_time-to-live_) definido em 0 (zero) segundos. Utilizando Bypass Cache, todas as requisições http e https recebidas pelos Edge Servers da Azion serão enviadas para a sua origem, sem qualquer cache do conteúdo. Utilize Bypass Cache se você deseja entregar conteúdo distinto para cada requisição de usuário.

Já para TTL definido em 0 (zero) segundos, múltiplas requisições em paralelo aos Edge Servers da Azion serão enviadas como uma única requisição para sua origem, por Edge da Azion . Utilize TTL zero se o conteúdo puder ser entregue idêntico para todos os usuários que requisitarem simultaneamente, mas o conteúdo variar a cada instante de tempo. Além disso, ao utilizar TTL zero, os Edge Servers da Azion irão validar alterações do conteúdo com sua origem utilizando _If-Modified-Since_ e, caso o objeto não tenha sofrido alteração desde a última requisição, o conteúdo não precisará ser novamente transferido, podendo resultar em uma respota _304 Not Modified_, muito mais rápida.

Essa diferença é importante para que você obtenha o máximo de otimização na entrega de seu conteúdo e redução de carga em sua origem.

---

## 3. Forward Cookies {#ForwardCookies}

Se sua origem gerencia cookies de aplicação, você pode precisar da funcionalidade Forward Cookies.

Por padrão, a Azion filtra o Response Header Set-Cookie enviado por sua origem. Se 
desejar, você pode configurar a Azion para que o Set-Cookie seja repassado para seus usuários.

Para encontrar essa funcionalidade:


1. Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Content Delivery
2. Edite a configuração de Content Delivery desejada
3. Na aba Rules Engine, adicione ou edite uma configuração customizada para um ou mais _paths_
4. No campo Behavior, selecione Application Acceleration
5. Na seção Origin Settings, ative a funcionalidade Forward Cookies definindo-a com o valor _All_, se desejar repassar o cabeçalho Set-Cookie para seus usuários. Caso deseje configurar a Azion para filtrar o cabeçalho Set-Cookie, deixe Forward Cookies configurado como _None_.


> Ao utilizar a funcionalidade Forward Cookies você estará determinando que a Azion encaminhe para seus usuários o cabeçalho Set-Cookie recebido de sua origem, mesmo na situação de conteúdo em cache (_cache hit_). Para evitar que um usuário receba Set-Cookie de sessão de outro usuário, você deve listar todos os cookies de sessão (cookies privados) de sua aplicação na aba Cache Settings de sua configuração de Content Delivery, na seção Advanced Cache Key, em Cache by Cookie.

**JavaScript Cookies**

Uma alternativa ao envio do Response Header Set-Cookie é a criação de cookies por JavaScript. JavaScript permite criar, ler e expirar cookies através da propriedade document.cookie.

Para criar um cookie por JavaScript, é necessário informar _name=value_ e, opcionalmente, _expires_ e _path_:

~~~
document.cookie = “username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/”;
~~~

Você encontrará mais informações sobre JavaScript Cookies clicando [aqui](https://www.w3schools.com/js/js_cookies.asp).

Por padrão, a Azion não irá filtrar o Request Header Cookie independentemente de sua configuração de Forward Cookies e, portanto, JavaScript Cookies poderão ser enviados para sua origem para viabilizar o gerenciamento de sua aplicação.

---

## 4. Suporte a POST/PUT e outros métodos {#SuportePOSTPUT}

Você pode utilizar a Azion para acelerar suas aplicações web e APIs. Através do Application Acceleration você estende as funcionalidades do Content Delivery para suportar os métodos POST, PUT, PATCH, DELETE, além dos já suportados nativamente GET, HEAD e OPTIONS.

Você pode ativar a funcionalidade para os paths desejados:


1. Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Content Delivery
2. Edite a configuração de Content Delivery desejada
3. Na aba Rules Engine, adicione ou edite uma configuração customizada para um ou mais _paths_
4. No campo Behavior, selecione Application Acceleration

Com o Application Acceleration, você contará com importantes otimizações de protocolo além de manter uma conexão keepalive entre nossos Edge Servers e sua origem, sempre que possível.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.