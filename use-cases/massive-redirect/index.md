# Massive Redirect com **Azion Edge Functions**

## Migre aplicações e domínios sem afetar o ranqueamento de uma página e a experiência dos usuários

As equipes de marketing digital e tecnologia trabalham intensamente na construção de páginas e estratégias de SEO para que o seu ranqueamento em sites de busca seja o melhor possível, conduzindo mais usuários de forma orgânica a elas. Nesse cenário, quando por algum motivo é preciso mudar o domínio, a aplicação ou a estrutura de navegação do site, é fundamental construir uma estratégia de redirecionamento das páginas antigas para não perder o ranqueamento nos buscadores, como o Google, pois isso coloca em risco a experiência de uma parte importante da audiência do site.

Quando surge a necessidade de realizar uma dessas mudanças, uma das grandes preocupações das equipes de marketing é como manter o ranqueamento e autoridade no novo endereço ou estrutura de navegação. É provável que o domínio principal, todos os subdomínios e páginas que pertencem a essa estrutura terão suas pontuações nos sites de buscas impactadas.

A solução é configurar uma reposta de "redirect" permanente do endereço anterior para o novo, o chamado código HTTP 301(moved permanently). Com isso, a autoridade do endereço antigo é transferida para o novo, mantendo o ranqueamento nos sites de busca.

Há várias técnicas para implementar um redirect 301, por exemplo, inserindo um script diretamente no código-fonte da página. Contudo, dependendo da quantidade de páginas, essa técnica pode se tornar muito onerosa e acima de tudo prejudicar a performance e a experiência dos usuários, o que também é penalizado pelos algoritmos dos site de busca. Uma alternativa é criar um arquivo diretamente no Web Server da aplicação, que processará os redirecionamentos por meio de regras, eliminando a necessidade do apontamento individual dentro das páginas do site.

Entretanto, é comum um site ter centenas de páginas, e dessa forma a complexidade da configuração das regras aumenta proporcionalmente à quantidade de redirects necessários, tornando esse um trabalho nada trivial e de difícil manutenção. Empresas que fazem uso - ou pretendem fazer - de alguma plataforma de CMS ou e-commerce para gerenciar suas páginas, como Wordpress, Joomla, Magento, SAP Hybris e VTEX,  encontrarão enormes desafios na hora de trocar de domínio, implementar melhorias na estrutura da página ou trocar de ferramenta ou plataforma: estrutura de páginas a ser reconstruída, centenas de páginas que apontam para links antigos que deixarão de existir, complexidade na manutenção de páginas e links antigos.

De maneira geral, o conceito é simples. Todavia, a estratégia adotada para lidar com Massive Redirects irá definir a complexidade na implementação e manutenção, e principalmente a eficácia do ranqueamento e experiência dos usuários. Afinal, nada mais frustrante que um usuário encontrar sua página por um buscador, e ao acessá-la receber um erro de página não encontrada ou lentidão na abertura da págin

## Azion Edge Functions: funções serverless para redirect massivo de páginas.

Com a Edge Function _Massive Redirect_ da Azion você pode configurar de forma rápida e simples todos os seus redirecionamentos, em um só lugar, não importa a quantidade de páginas.

O _Massive Redirect_ é uma função serverless executada diretamente na edge da rede, mais próximo aos usuários, o que garante uma série de vantagens ao seu negócio.

Veja alguns casos onde o Azion Massive Redirect é a solução ideal:

* Migração de plataforma de CMS, e-commerce, LMS e outras;
* Atualização de URL (ex. o endereço mudou ou as URLs precisam ser transformadas em URLs amigáveis);
* Atualização de site (ex. a estrutura do site foi remodelada, com mudança na estrutura de diretórios, subdomínios ou páginas);
* Redirecionar uma página que não existe mais (ex. páginas obsoletas, como promoções expiradas ou conteúdos descontinuados);
* Evitar a duplicação de conteúdo (ex. impedir que os motores de busca considerem o endereço antigo e o novo como sendo diferentes, dividindo a pontuação e ranqueamento).

## Entendendo o funcionamento do Massive Redirect na Azion

Antes de começar, certifique-se de que o serviço Edge Functions está ativo em sua conta da Azion e que você já conta com a função Massive Redirect em seu Libraries de Edge Functions. Caso não esteja, entre em contato com nosso time comercial para habilitar o serviço.

Para o funcionamento da Edge Function Massive Redirect, informamos por parâmetros (**Edge Function Json args**) uma lista com os endereços a serem redirecionados e o respectivo de destino. Quando uma requisição chegar até a edge node da Azion, nosso serviço interpretará a instrução definida pela função, verificando se o endereço acessado corresponde aos recebidos no *Json args* (parâmetros), e executará o redirect para o destino correspondente. A partir desse momento, a requisição passará a ser direcionada para o novo endereço, de forma transparente para sua aplicação e para os servidores de sua origem.

Para utilizar a Function Massive Redirect, edite o **Edge Application** ao qual deseja atribuir este serviço, garantindo que o Edge Function está habilitado na aba Main Settings. A seguir, selecione a aba Functions e clique no botão **Add Function**. Informe um nome para sua função personalizada (utilize um nome significativo, por exemplo _MyStoreRedirect_, pois é por meio dele que sua Function será identificada posteriormente na configuração da Rule Engine) e selecione na lista de opções a **Edge Function** que você quer utilizar, nesse caso, a opção **Massive Redirect**. Note que o código da função irá aparecer logo abaixo, na seção **Code**, apenas para leitura e entendimento. 

Na seção **Json args**, informe os parâmetros (endereços antigos e novos) que serão passados para a função. O endereço antigo pode ser informado de duas formas:

* _**from**_: utilize o endereço completo a ser redirecionado (localização antiga);
* _**from_regex**_: utilize uma expressão regular para representar um padrão de construção de URL, permitindo configurar mais de um endereço com uma única regra.

Para o endereço novo, temos também duas opções:

* **moved**: localização de destino (URI) para um redirecionamento permanente (HTTP status 301);
* **found**: localização de destino (URI) para um redirecionamento temporário (HTTP status 302).

É possível configurar um ou vários redirecionamentos na mesma Edge Function. Veja alguns exemplos de como pode ser feita essa configuração:

~~~
[{
    "from": "https://www.old-site.com",
    "moved": "https://www.new-site.com"
}]
~~~
Redirecionamento permanente (301) de [www.old-site.com](#) para [www.new-site.com](#)

~~~
[{
    "from_regex": "https://(api|store|checkout)\\.old-site\\.com$",
    "moved": "https://www.new-site.com/%1$"

}]
~~~
Redirecionamento permanente (301) utilizando expressão regular, direcionando os endereços **api**, **store** e *checkout* do domínio [old-site.com](#) para o domínio [new-site.com](#).

~~~
[{
    "from": "https://www.old-site.com/shoes.html",
    "moved": "https://www.new-site.com/category/shoes"
},
{
    "from": "https://www.old-site.com/shoes-snekears.html",
    "moved": "https://www.new-site.com/category/shoes/sneakers"
},
{
    "from": "https://www.old-site.com/users-login.html",
    "found": "https://www.new-site.com/login.html"
},
{
    "from": "https://www.old-site.com/clothes-dresses-new-year-eve.html",
    "found": "https://www.new-site.com/category/clothes/dress/new_year_eve"
}]
~~~
Vários redirecionamentos configurados na mesma Function.

Depois de criada, basta associar sua Function a uma Rule Engine dentro de sua Edge Application. Na aba **Rules Engine**, utilize a Default Rule ou crie uma nova rule com um critério de validação (**criteria**) para ativar sua function, e na seção **Behavior**, selecione Run Function e escolha a Function de Massive Redirect que você criou.

Entre em contato com nosso Suporte em caso de dúvidas.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.