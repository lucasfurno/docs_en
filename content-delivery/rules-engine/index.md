# Rules **Engine**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/content-delivery/rules-engine/index.md)

Você pode transferir parte da lógica das regras de negócio de sua aplicação para o Intelligent Edge da Azion utilizando as funcionalidades de _serverless_ computing do produto Application Acceleration. Dessa forma, você constrói uma arquitetura que entrega melhor performance para seus usuários e consome menos recursos e processamento em sua origem.

O Rules Engine foi elaborado para permitir a codificação de uma lógica de execução condicional de comportamentos e ações diretamente no Intelligent Edge da Azion, mais próximo de seus usuários e, portanto, com melhor performance e taxa de transferência para sua aplicação.

> 1. [Como funciona](#como-funciona)
> 2. [Fases de Processamento](#fases-de-processamento)
> 3. [Regras](#regras)
> 4. [Funções](#funcoes)
# Rules **Engine**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/content-delivery/rules-engine/index.md)

Você pode transferir parte da lógica das regras de negócio de sua aplicação para o Intelligent Edge da Azion utilizando as funcionalidades de _serverless_ computing do produto Application Acceleration. Dessa forma, você constrói uma arquitetura que entrega melhor performance para seus usuários e consome menos recursos e processamento em sua origem.

O Rules Engine foi elaborado para permitir a codificação de uma lógica de execução condicional de comportamentos e ações diretamente no Intelligent Edge da Azion, mais próximo de seus usuários e, portanto, com melhor performance e taxa de transferência para sua aplicação.

> 1. [Como funciona](#como-funciona)
> 2. [Fases de Processamento](#fases-de-processamento)
> 3. [Regras](#regras)
> 4. [Funções](#funcoes)

---

## 1. Como Funciona {#como-funciona}

Cada requisição de seus usuários para sua aplicação é processada em três fases sequenciais:

1. Request Phase
2. Cache Phase
3. Reponse Phase

Em cada fase de processamento, você pode definir um conjunto de regras para manipular a requisição de acordo com as necessidades de sua aplicação ou negócio. As regras são compostas por critérios, que representam as condições para execução da regra, e por comportamentos, que representam as ações que precisam ser executadas.

O processamento das fases é sequencial e você pode utilizar como critérios um poderoso conjunto de variáveis e operadores de comparação. Caso as condições sejam atendidas, os comportamentos de cada regra são executados até que todas as regras sejam processadas ou se encontre uma regra com um comportamento finalizador no caminho (_Deny_, _Redirect To_, _Deliver_).

---

## 2. Fases de Processamento {#fases-de-processamento}

As fases de processamento representam as etapas em que a requisição se encontra. São elas:

**Fase de Requisição**

Na Request Phase seu usuário está solicitando um recurso de sua aplicação. É nesta fase que você define as regras para aceitar ou não a requisição de seu usuário. Você também deve utilizar a Request Phase para manipular a requisição de seu usuário de acordo com suas regras de negócio, bem como definir quais origens deverão tratar a requisição em cada situação, caso o conteúdo solicitado não esteja em cache.

Você pode utilizar como condições das regras da Request Phase qualquer variável relativa aos dados enviados por seu usuário na requisição. Como a resposta ainda não foi processada por sua aplicação, nessa fase você não tem acesso a variáveis relacionadas ao conteúdo que será entregue para seu usuário.

**Fase de Cache**

As requisições aceitas pela fase anterior são então processadas na Cache Phase. Nesta fase de processamento você define como a Azion deve gerenciar o cache de sua aplicação. Caso sua aplicação não permita nenhum tipo de cache, você pode definir na Request Phase as condições em que deseja pular a Cache Phase a passar diretamente para a próxima fase.

**Fase de Resposta**

Na Response Phase você pode construir as regras para manipulação final da resposta que será entregue para seus usuários. Toda manipulação processada na Response Phase é dinâmica e será executada individualmente para cada usuário.

---

## 3. Regras {#regras}

As regras são compostas por Criteria, que determina o conjunto de condições que precisam ser atendidas para a execução dos Behaviors.

**Critérios**

Em Criteria você define as condições para execução da regra. Você pode utilizar um poderoso conjunto de variáveis, operadores de comparação sobre strings e operadores lógicos para construção de sua regra de negócio.

**Variáveis**

| Campo | Descrição | Fases em que pode ser utilizada | Requisitos |
|-------|-----------|---------------------------------|------------|
| ${arg_name_}  | Argumento _name_ enviado pelo usuário na linha de requisição (query string). Por exemplo, para a requisição GET _/path?search=test_, a variável _${arg_search}_ assumirá o valor _test_. | Request Phase <br> Cache Phase <br>Response Phase | Application Acceleration |
| ${args} | Todos os argumentos enviados pelo usuário na linha de requisição (query string). | Request Phase <br> Cache Phase <br> Response Phase | Application Acceleration |
| ${cookie_name_} | Valor do cookie _name_. Por exemplo, para o cookie _icl_current_language=pt-br\_, a variável _${cookie__icl_current_language}_ assumirá o valor _pt-br_. | Request Phase <br>Cache Phase <br>Response Phase | Application Acceleration |
| ${device_group} | Grupo do dispositivo do usuário. Os grupos de dispositivos são customizados pelo User Agent na aba Device Groups do Real-Time Manager. | Request Phase <br>Cache Phase <br>Response Phase | Adaptive Delivery |
| ${geoip_city_continent_code} | Código de continente com 2 letras, utilizando a base de geolocalização geoip_city. Por exemplo: _EU para Europa_, _NA_ para América do Norte, _SA_ para América do Sul etc. |  |  |
| ${geoip_city_country_code} | Código de país com 2 letras, utilizando a base de geolocalização geoip_city. Por exemplo: _RU_ para Rússia, _BR_ para Brasil, _US_ para Estados Unidos etc. | Request Phase <br>Cache Phase <br>Response Phase | Application Acceleration |
| ${geoip_city_country_code3} | Código de país com 3 letras, utilizando a base de geolocalização geoip_city. Por exemplo: _RUS_ para Rússia, _BRA_ para Brasil, _USA_ para Estados Unidos etc. | Request Phase <br>Cache Phase <br>Response Phase | Application Acceleration |
| ${geoip_city_country_name} | Nome do país por extenso, utilizando a base de geolocalização geoip_city. Por exemplo: _United States_, _Brazil_, _Russian Federation_ etc. | Request Phase <br>Cache Phase <br> Response Phase | Application Acceleration |
| ${geoip_country_code} | Código de país com 2 letras, utilizando a base de geolocalização geoip_country. Por exemplo: _RU_ para Rússia, _BR_ para Brasil, _US_ para Estados Unidos etc. | Request Phase <br>Cache Phase <br> Response Phase | Application Acceleration |
| ${geoip_country_code3} | ódigo de país com 3 letras, utilizando a base de geolocalização geoip_country. Por exemplo: _RUS_ para Rússia, _BRA_ para Brasil, _USA_ para Estados Unidos etc. | Request Phase <br>Cache Phase <br> Response Phase | Application Acceleration |
| ${geoip_country_name} | Nome do país por extenso, utilizando a base de geolocalização geoip_country. Por exemplo: _United States_, _Brazil_, _Russian Federation_ etc. | Request Phase <br>Cache Phase <br> Response Phase | Application Acceleration |
| ${host} | Em ordem de precedência: o _host name_ da linha de requisição, ou o valor do campo de cabeçalho Host da requisição,  ou o nome do servidor atendendo a requisição. | Request Phase <br>Cache Phase <br> Response Phase | Application Acceleration |
| ${http_name\_} | O valor do campo de cabeçalho _name_ da requisição. O argumento _name_ deve ser convertido para letras minúsculas e os hífens devem ser convertidos para _underscore_. Por exemplo: ${http_accept\_} assumirá o valor da campo de cabeçalho Accept da requisição HTTP. |  |  |
| ${remote_addr} | O endereço IP do cliente que está realizando a requisição HTTP. | Request Phase <br>Cache Phase <br>Response Phase | Application Acceleration |
| ${remote_user} | O _username_ fornecido pela autenticação básica, quando houver. | Request Phase <br>Cache Phase <br>Response Phase | Application Acceleration |
| ${request} | A linha completa da requisição. | Request Phase <br>Cache Phase <br>Response Phase | Application Acceleration |
| ${request_body} | Os argumentos de um POST, enviados no _body_ da requisição. | Request Phase <br>Cache Phase <br>Response Phase | Application Acceleration |
| ${request_method} | O método HTTP da requisição. Por exemplo: _GET_, _POST_, _PUT_ etc. | Request Phase <br>Cache Phase <br>Response Phase | Application Acceleration |
| ${request_uri} | A URI completa da requisição, com argumentos (query string). | Request Phase <br>Cache Phase <br>Response Phase | Application Acceleration |
| ${scheme} | O _scheme_ da requisição: _http_ ou _https_. | Request Phase <br>Cache Phase <br>Response Phase | Application Acceleration |
| ${sent_http_name\_} | O valor do campo de cabeçalho de resposta _name_.O argumento _name_ deve ser convertido para letras minúsculas e os hífens devem ser convertidos para underscore. Por exemplo: _${sent_http_content_length}_ assumirá o valor do cabeçalho Content-Length. | Response Phase | Application Acceleration |
| ${status} | O _status code_ da resposta. | Response Phase | Application Acceleration |
| ${upstream_addr} | O endereço IP e porta da origem consultada para obtenção da resposta. Caso múltiplas origens sejam consultadas durante o processamento da requisição, os endereços serão separados por vírgula. Por exemplo: _192.168.1.1:80_, _192.168.1.2:80_. Se um redirect interno de um grupo de servidores para outro ocorrer, iniciado por um “X-Accel-Redirect” ou por uma página de erro, os endereços dos diferentes grupos serão separados por “:”. Por exemplo: “_192.168.1.1:80, 192.168.1.2:80 : 192.168.10.1:80, 192.168.10.2:80_”. | Response Phase | Application Acceleration |
| ${upstream_cookie_name\_} | Valor do cookie name enviado pela origem através do campo de cabeçalho Set-Cookie. Caso múltiplas origens sejam consultadas durante o processamento da requisição, apenas os cookies da última origem são armazenados. | Response Phase | Application Acceleration |
| ${upstream_http_name\_} | Valor do campo de cabeçalho _name_ enviado pela origem. O argumento _name_ deve ser convertido para letras minúsculas e os hífens devem ser convertidos para _underscore_. Caso múltiplas origens sejam consultadas durante o processamento da requisição, apenas os cabeçalhos da última origem são armazenados. Por exemplo: _${upstream_http_server}_ assumirá o valor do campo de cabeçalho Server enviado pela última origem consultada. | Response Phase | Application Acceleration |
| ${upstream_status} | _Status Code_ da resposta da origem enviada para o Intelligent Edge. Caso múltiplas origens sejam consultadas durante o processamento da requisição, os _status codes_ serão separados por vírgula. Se um redirect interno de um grupo de servidores para outro ocorrer, iniciado por um “X-Accel-Redirect” ou por uma página de erro, os status codes dos diferentes grupos serão separados por “:”. | Response Phase | Application Acceleration |
| ${uri} | A URI normalizada da requisição. O valor da _${uri}_ pode mudar durante o processamento de uma requisição, por exemplo, quando ocorre um redirect interno ou quando são utilizados arquivos index. | Request Phase <br>Cache Phase <br> Response Phase | - |
|-------|-----------|---------------------------------|------------|

**Operadores de Comparação**

A condição para execução de um regra deve ser a comparação de uma variável com um argumento. Os operadores de comparação são:

| Operador | Descrição | Argumento |
|----------|-----------|-----------|
| is equal | O valor da variável é igual ao argumento, comparado caracter a caracter. | string |
| is not equal | O valor da variável não é exatamente igual ao argumento. | string |
| starts with | O valor da variável inicia pelo argumento. | string |
| does not start with | O valor da variável não inicia pelo argumento. | string |
| matches | O valor da variável coincide com a expressão regular informada como argumento. | regular expression |
| does not match | O valor da variável não coincide com a expressão regular informada como argumento. | regular expression |
| exists | A variável tem valor definido. Por exemplo ${arg_search} existe se foi enviado um argumento search na query string da requisição. | - |
| does not exist | A variável não tem valor definido. Por exemplo ${arg_search} não existe se não foi enviado um argumento search na query string da requisição. | - |


**Operadores Lógicos**

Múltiplas condições podem ser definidas por meio dos operadores lógicos **and** e **or**. O operador and tem precedência implícita sobre o operador or.

Se necessária precedência explícita, você pode adicionar múltiplos grupos de critérios sob a lógica and.

**Comportamentos**

Em Behavior você adiciona os comportamentos que deseja executar, caso as condições da regra sejam satisfeitas.

Em cada fase de processamento, comportamentos distintos estão disponíveis.

---

## 4. Funções {#funcoes}

Para os behaviors que solicitam um argumento obrigatório, como por exemplo o behavior _Set Cookie_, você pode utilizar as mesmas variáveis que estão disponíveis em cada fase de processamento. Dessa forma você pode, por exemplo, compor cookies ou cabeçalhos http utilizando dados coletados da requisição, tais como o grupo de dispositivo do usuário ou sua geolocalização.

A Azion também disponibiliza para você algumas funções para simplificar a manipulação de seus argumentos:

| Função e Argumento | Descrição |
|:--------|:-------:|
|${cookie_time_offset(number)}|Retorna a data atual acrescida de um offset em segundos, informado como argumento, para ser utilizado na definição do tempo de expiracão de um cookie. Por exemplo, se você deseja que o cookie expire em 1 hora, utilize o behavior Add Response Cookie com o argumento:<br>_&lt;cookie-name&gt;=&lt;cookie-value&gt;; Expires=${cookie_time_offset(3600)}_|
|${encode_base64(string)}|Retorna o agumento codificado em base64. Por exemplo, _${encode_base64(www.domain.com)} retornará o valor d3d3LmRvbWFpbi5jb20K_|

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
