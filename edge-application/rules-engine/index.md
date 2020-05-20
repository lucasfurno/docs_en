# Rules **Engine**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-application/rules-engine/index.md)

Você pode transferir parte da lógica das regras de negócio de sua aplicação para o Intelligent Edge da Azion utilizando as funcionalidades de serverless computing do produto Application Acceleration. Dessa forma, você constrói uma arquitetura que entrega melhor performance para seus usuários e consome menos recursos e processamento em sua origem.

O Rules Engine foi elaborado para permitir a codificação de uma lógica de execução condicional de comportamentos e ações diretamente no Intelligent Edge da Azion, mais próximo de seus usuários e, portanto, com melhor performance e taxa de transferência para sua aplicação.

> 1. [Como funciona?](#como-funciona)
> 2. [Fases de Processamento](#fases-de-processamento)
> 3. [Regras](#regras)
> 4. [Funções](#funcoes)

---

## 1. Como funciona? {#como-funciona}

Cada requisição de seus usuários para sua aplicação é processada em duas fases sequenciais:

1.  Request Phase
2.  Reponse Phase

Em cada fase de processamento, você pode definir um conjunto de regras para manipular a requisição de acordo com as necessidades de sua aplicação ou negócio. As regras são compostas por critérios, que representam as condições para execução da regra, e por comportamentos, que representam as ações que precisam ser executadas.

O processamento das fases é sequencial e você pode utilizar como critérios um poderoso conjunto de variáveis e operadores de comparação. Caso as condições sejam atendidas, os comportamentos de cada regra são executados até que todas as regras sejam processadas ou se encontre uma regra com um comportamento finalizador no caminho (_Deny_, _Redirect To_, _Deliver_).

---

## 2. Fases de Processamento {#fases-de-processamento}

As fases de processamento representam as etapas em que a requisição se encontra. São elas:

**Fase de Requisição**

Na Request Phase seu usuário está solicitando um recurso de sua aplicação. É nesta fase que você define as regras para aceitar ou não a requisição de seu usuário. Você também deve utilizar a Request Phase para manipular a requisição de seu usuário de acordo com suas regras de negócio, bem como definir quais origens deverão tratar a requisição em cada situação, caso o conteúdo solicitado não esteja em cache.

Você pode utilizar como condições das regras da Request Phase qualquer variável relativa aos dados enviados por seu usuário na requisição. Como a resposta ainda não foi processada por sua aplicação, nessa fase você não tem acesso a variáveis relacionadas ao conteúdo que será entregue para seu usuário.

Nesta fase, você define também como a Azion deve gerenciar o cache de sua aplicação. Caso sua aplicação não permita nenhum tipo de cache, você pode definir as condições para ignorar o cache.

**Fase de Resposta**

Na Response Phase você pode construir as regras para manipulação final da resposta que será entregue para seus usuários. Toda manipulação processada na Response Phase é dinâmica e será executada individualmente para cada usuário.

---

## 3. Regras {#regras}

As regras são compostas por Criteria, que determina o conjunto de condições que precisam ser atendidas para a execução dos Behaviors.

**Critérios**

Em Criteria você define as condições para execução da regra. Você pode utilizar um poderoso conjunto de variáveis, operadores de comparação sobre strings e operadores lógicos para construção de sua regra de negócio.

**Variáveis**

| Variável | Descrição | Fases em que pode ser utilizada | Requisitos |
|----------|-----------|---------------------------------|------------|
| ${arg_name} | Argumento name enviado pelo usuário na linha de requisição (query string). Por exemplo, para a requisição GET /path?search=test, a variável ${arg_search} assumirá o valor test. | Request Phase <br>Response Phase | Application Acceleration |
| ${args} | Todos os argumentos enviados pelo usuário na linha de requisição (query string). | Request Phase <br>Response Phase | Application Acceleration |
| ${cookie_name} | Valor do cookie name. Por exemplo, para o cookie_icl_current_language=pt-br, a variável ${cookie__icl_current_language} assumirá o valor pt-br. | Request Phase<br> Response Phase | Adaptive Delivery |
| ${device_group} | Grupo do dispositivo do usuário. Os grupos de dispositivos são customizados pelo User Agent na aba Device Groups do Real-Time Manager. | Request Phase <br>Response Phase | Adaptive Delivery |
| ${geoip_city_continent_code} | Código de continente com 2 letras, utilizando a base de geolocalização geoip_city. Por exemplo: EU para Europa, NA para América do Norte, SA para América do Sul etc. | Request Phase <br>Response Phase | Application Acceleration |
| ${geoip_city_country_code} | Código de país com 2 letras, utilizando a base de geolocalização geoip_city. Por exemplo: RU para Rússia, BR para Brasil, US para Estados Unidos etc.	 | Request Phase <br>Response Phase | Application Acceleration |
| ${geoip_city_country_code3} | Código de país com 3 letras, utilizando a base de geolocalização geoip_city. Por exemplo: RUS para Rússia, BRA para Brasil, USA para Estados Unidos etc. | Request Phase <br>Response Phase | Application Acceleration |
| ${geoip_city_country_name} | Nome do país por extenso, utilizando a base de geolocalização geoip_city. Por exemplo: United States, Brazil, Russian Federation etc. | Request Phase <br>Response Phase | Application Acceleration |
| ${geoip_country_code} | Código de país com 2 letras, utilizando a base de geolocalização geoip_country. Por exemplo: RU para Rússia, BR para Brasil, US para Estados Unidos etc. | Request Phase <br>Response Phase | Application Acceleration |
| ${geoip_country_code3} | Código de país com 3 letras, utilizando a base de geolocalização geoip_country. Por exemplo: RUS para Rússia, BRA para Brasil, USA para Estados Unidos etc. | Request Phase <br>Response Phase | Application Acceleration |
| ${geoip_country_name} | Nome do país por extenso, utilizando a base de geolocalização geoip_country. Por exemplo: United States, Brazil, Russian Federation etc. | Request Phase <br>Response Phase | Application Acceleration |
| ${host} | Em ordem de precedência: o host name da linha de requisição, ou o valor do campo de cabeçalho Host da requisição, ou o nome do servidor atendendo a requisição. | Request Phase <br>Response Phase | Application Acceleration |
| ${http_name} | O valor do campo de cabeçalho name da requisição. O argumento name deve ser convertido para letras minúsculas e os hífens devem ser convertidos para underscore. Por exemplo: ${http_accept} assumirá o valor da campo de cabeçalho Accept da requisição HTTP. | Request Phase <br>Response Phase | Application Acceleration |
| ${remote_addr} | O endereço IP do cliente que está realizando a requisição HTTP. | Request Phase <br>Response Phase | Application Acceleration |
| ${remote_user} | O username fornecido pela autenticação básica, quando houver. | Request Phase <br>Response Phase | Application Acceleration |
| ${request} | A linha completa da requisição. | Request Phase <br>Response Phase | Application Acceleration |
| ${request_body} | Os argumentos de um POST, enviados no body da requisição. | Request Phase <br>Response Phase | Application Acceleration |
| ${request_method} | O método HTTP da requisição. Por exemplo: GET, POST, PUT etc. | Request Phase <br>Response Phase | Application Acceleration |
| ${request_uri} | A URI completa da requisição, com argumentos (query string). | Request Phase <br>Response Phase | Application Acceleration |
| ${scheme} | O scheme da requisição: http ou https. | Request Phase <br>Response Phase | Application Acceleration |
| ${sent_http_name} | O valor do campo de cabeçalho de resposta name.O argumento name deve ser convertido para letras minúsculas e os hífens devem ser convertidos para underscore. Por exemplo: ${sent_http_content_length} assumirá o valor do cabeçalho Content-Length. | Response Phase | Application Acceleration |
| ${status} | O status code da resposta. | Response Phase | Application Acceleration |
| ${upstream_addr} | O endereço IP e porta da origem consultada para obtenção da resposta. Caso múltiplas origens sejam consultadas durante o processamento da requisição, os endereços serão separados por vírgula. Por exemplo: 192.168.1.1:80, 192.168.1.2:80. Se um redirect interno de um grupo de servidores para outro ocorrer, iniciado por um “X-Accel-Redirect” ou por uma página de erro, os endereços dos diferentes grupos serão separados por “:”. Por exemplo: “192.168.1.1:80, 192.168.1.2:80 : 192.168.10.1:80, 192.168.10.2:80”. | Response Phase | Application Acceleration |
| ${upstream_cookie_name} | Valor do cookie name enviado pela origem através do campo de cabeçalho Set-Cookie. Caso múltiplas origens sejam consultadas durante o processamento da requisição, apenas os cookies da última origem são armazenados. | Response Phase | Application Acceleration |
| ${upstream_http_name} | Valor do campo de cabeçalho name enviado pela origem. O argumento name deve ser convertido para letras minúsculas e os hífens devem ser convertidos para underscore. Caso múltiplas origens sejam consultadas durante o processamento da requisição, apenas os cabeçalhos da última origem são armazenados. Por exemplo: ${upstream_http_server} assumirá o valor do campo de cabeçalho Server enviado pela última origem consultada. | Response Phase | Application Acceleration |
| ${upstream_status} | Status Code da resposta da origem enviada para o Intelligent Edge. Caso múltiplas origens sejam consultadas durante o processamento da requisição, os status codes serão separados por vírgula. Se um redirect interno de um grupo de servidores para outro ocorrer, iniciado por um “X-Accel-Redirect” ou por uma página de erro, os status codes dos diferentes grupos serão separados por “:”. | Response Phase | Application Acceleration |
| ${uri} | A URI normalizada da requisição. O valor da ${uri} pode mudar durante o processamento de uma requisição, por exemplo, quando ocorre um redirect interno ou quando são utilizados arquivos index. | Response Phase | - |


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
| exists | A variável tem valor definido. Por exemplo _${arg_search}_ existe se foi enviado um argumento _search_ na query string da requisição. | - |
| does not exist |A variável não tem valor definido. Por exemplo _${arg_search}_ não existe se não foi enviado um argumento _search_ na query string da requisição. | - |

**Operadores Lógicos**

Múltiplas condições podem ser definidas por meio dos operadores lógicos **and** e **or**. O operador and tem precedência implícita sobre o operador or.

Se necessária precedência explícita, você pode adicionar múltiplos grupos de critérios sob a lógica and.

**Comportamentos**

Em Behavior você adiciona os comportamentos que deseja executar, caso as condições da regra sejam satisfeitas.

Em cada fase de processamento, comportamentos distintos estão disponíveis.

| Behavior | Descrição | Fases em que pode ser utilizado | Requisitos |
|----------|-----------|-----------|------------|
| Add Request Header | Adiciona um campo de cabeçalho na requisição que será enviada a origem. O campo de cabeçalho deve ser informado como argumento no formato _Field: value_. |  | Request Phase | - |
| Add Response Cookie | Adiciona um cookie na resposta através do cabeçalho Set-Cookie. O valor do cookie deve ser informado como argumento nos formatos:<br><br> _&lt;cookie-name&gt;=&lt;cookie-value&gt;<br> &lt;cookie-name&gt;=&lt;cookie-value&gt;; Expires=&lt;date&gt;<br> &lt;cookie-name&gt;=&lt;cookie-value&gt;; Domain=&lt;domain-value&gt;<br> &lt;cookie-name&gt;=&lt;cookie-value&gt;; Path=&lt;path-value&gt;_<br>                         Múltiplas diretivas também são permitidas, por exemplo:<br> _&lt;cookie-name&gt;=&lt;cookie-value&gt;; Domain=&lt;domain-value&gt;;<br> Path=&lt;path-value&gt;; Expires=&lt;date&gt;_| Response Phase | Application Acceleration |
| Add Response Header | Adiciona um campo de cabeçalho na resposta que será enviada para o usuário. O campo de cabeçalho deve ser informado como argumento no formato Field: _value_. | Response Phase | - |
| Bypass Cache Phase | Define que a Azion não deverá armazenar em cache a resposta de sua origem. Pula o processamento da requisição diretamente para a Response Phase. | Request Phase | Application Acceleration |
| Capture Match Groups | Behavior de apoio para manipulação de strings.<br><br>Armazena em uma variável temporária o resultado da captura de grupos de correspondência definidos por uma regex aplicada a um dos campos da requisição HTTP disponibilizados.<br><br>Essa variável temporária pode ser posteriormente referenciada no behavior Rewrite Request para montar a string de reescrita.<br><br>Este behavior requer três argumentos:<br><br>  _captured array name:_ o nome que você deseja dar a variável temporária onde será armazenado o array de strings capturadas. <br> _subject:_ o campo da requisição HTTP de onde você deseja capturar alguma string.<br> _regex:_ a expressão regular usada para capturar as strings. Cada grupo capturado deve ser representado entre parênteses.<br><br> Por exemplo, para capturar o caminho e o nome  de um arquivo em uma requisição HTTP, você poderia utilizar:<br><br> _captured array name:_ capture<br>_subject:_ ${uri}<br>_regex:_ ^(.*/)([^/]*)$<br><br> Você poderá referenciar a variável de captura como um array utilizando a notação %{_variable[index]_}. Por se tratar de uma variável local, você só poderá utilizá-la dentro da mesma regra que estiver configurando.<br><br>Neste exemplo, se a URI for /path/image.jpg, a variável de captura apresentará os seguintes valores:<br><br> %{capture[0]} = “/path/image.jpg”<br>%{capture[1]} = “/path/”<br>%{capture[2]} = “image.jpg”<br><br>Você também pode nomear os índices, para referenciá-los usando nomes em vez de um índice numérico. Para tanto, utilize a notação _?&lt;name&gt;_ como no exemplo que segue.<br><br> _captured array name:_ capture<br> _subject:_ ${uri}<br> _regex:_ ^(?&lt;path&gt;.*/)(?&lt;filename&gt;[^/]*)$| Request Phase | Application Acceleration |
| Deliver | Encerra o processamento da requisição e entrega o conteúdo para o usuário, sem executar nenhuma das regras seguintes. Ao utilizar o behavior Deliver, você estará forçando o término do processamento imediatamente. | Request Phase<br> Response Phase | - |
| Deny (403 Forbidden) | Entrega um _403 Forbidden_ para o usuário. Por se tratar de uma regra finalizadora, esse behavior encerra o processamento da requisição. | Request Phase | - |
| Enable Gzip | Ativa a compressão de dados Gzip, caso suportada pelo browser do usuário. | Request Phase<br>Response Phase | - |
| Enable Sliced Files | Ativa segmentação de objetos grandes em slices de 1MB, caso sua origem tenha suporte a HTTP range requests.<br><br> Utilize este behavior se você entrega mídias com mais de 1MB através da CDN para que a Azion possa iniciar a entrega do conteúdo para seus usuários mesmo antes de ter recebido todo o objeto de sua origem e, dessa forma, otimizar a performance de seu site ou aplicação.<br><br> Ao ativar esta funcionalidade, a Azion irá requisitar os objetos para sua origem via range requests e os mesmos serão cacheados na Azion com advanced cache key.<br><br> Caso sua origem não tenha suporte a range requests, a Azion só poderá iniciar a entrega de seu conteúdo para seus usuários após sua origem finalizar o envio completo do objeto. | Default Rule | - |
| Enforce HLS cache | Este behavior é incluído automaticamente pela Azion toda vez que você selecionar uma origem do tipo Live Ingest. Duas ações são executadas nessa situação:<br><br> o bypass de todas suas regras da Cache Phase.<br>a imposição da política de cache definida pela Azion para transmissões live em HLS.<br><br>A política de cache da Azion para transmissões live em HLS é de:<br><br> 5 segundos de cache para playlists (.m3u8).<br>60 segundos de cache para chunks (.ts).<br>| Request Phase | Live Ingest |
| Filter Request Header | Remove um campo de cabeçalho da requisição que será enviada para a origem. O nome do campo de cabeçalho deve ser informado como argumento. | Request Phase | - |
| Filter Response Header | Remove um campo de cabeçalho da resposta que será enviada para o usuário. O nome do campo de cabeçalho deve ser informado como argumento. | Response Phase | - |
| Forward Cookies | Ao utilizar o behavior Forward Cookies você estará determinando que a Azion encaminhe para seus usuários o cabeçalho Set-Cookie recebido de sua origem, mesmo na situação de conteúdo em cache (cache hit). Para evitar que um usuário receba Set-Cookie de sessão de outro usuário, você deve listar todos os cookies de sessão (cookies privados) de sua aplicação na aba Cache Settings de sua configuração de Content Delivery, na seção Advanced Cache Key, em Cache by Cookie. | Request Phase | Application Acceleration |
| Index Document | Este behavior é incluído automaticamente pela Azion toda vez que você selecionar uma origem do tipo Cloud Storage.<br><br>Você deve definir o nome do index document que estiver utilizando no Cloud Storage, tipicamente index.html ou index.htm.<br><br>Para as requisições em que a URI termine com / será entregue o conteúdo do index document.<br><br>Se você utilizar pastas no Cloud Storage para organizar seu conteúdo, certifique-se de incluir a / no final das URIs para garantir a entrega do index document. | Request Phase | Cloud Storage |
| Optimize Images | Ativa a otimização de imagens. | Request Phase | Image Optimization |
| Redirect HTTP to HTTPS | Redireciona a requisição HTTP para a respectiva URL em HTTPS. Caso a requisição já seja HTTPS, não executa nenhum comportamento. | Request Phase | - |
| Redirect To<br> (301 Moved Permanently) | Redireciona o usuário para uma outra URL informada como argumento, utilizando o status code _301 Moved Permanently_. Por se tratar de uma regra finalizadora, esse behavior encerra o processamento da requisição. | Request Phase | - |
| Rewrite Request | Modifica o path do recurso que será requisitado para a origem. Você pode reescrever o path do recurso utilizando:<br><br> uma string.<br> as variáveis da requisição (as mesmas que podem ser utilizadas em Criteria).<br>as variáveis locais, no formato %{_name[index]_}, com o resultado de captura de strings, ao utilizar o behavior auxiliar _Capture Match Groups_.<br><br> Por exemplo, se você deseja que a requisição de um usuário para o recurso /original/image.jpg seja enviada para sua origem como /new/image.jpg, você pode:<br><br>>Utilizar o behavior auxiliar _Capture Match Groups_ com os argumentos:<br>_captured array name:_ capture<br>_subject:_ ${uri}<br>_regex:_ /original/(.*)<br><br>Utilizar o behavior _Rewrite Request_ com o argumento:<br>/new/%{capture[1]} | Request Phase | Application Acceleration |
| Set Cache Policy | Atribui a política de cache que deve ser utilizada para a requisição. As políticas de cache devem ser previamente configuradas na aba Cache Settings. Na política de cache você configura o tempo que o objeto deve ser armazenado em cache e as regras para variação dos objetos em cache (advanced cache key). | Request Phase | - |
| Set Edge Firewall | Atribui a política de Edge Firewall que deve ser utilizada para a requisição. As políticas de Edge Firewall devem ser previamente configuradas no menu Cloud Security > Edge Firewall. | Request Phase | Edge Firewall |
| Set Origin | Atribui a origem que deve ser consultada pelo Intelligent Edge. As origens devem ser previamente configuradas na aba Origins. | Request Phase | - |
| Set WAF Rule Set | Atribui a política de WAF que deve ser utilizada para a requisição. As políticas de WAF devem ser previamente configuradas no menu Cloud Security > WAF. | Request Phase |Web Application Firewall |

---

## 4. Funções {#funcoes}

Para os behaviors que solicitam um argumento obrigatório, como por exemplo o behavior Set Cookie, você pode utilizar as mesmas variáveis que estão disponíveis em cada fase de processamento. Dessa forma você pode, por exemplo, compor cookies ou cabeçalhos http utilizando dados coletados da requisição, tais como o grupo de dispositivo do usuário ou sua geolocalização.

A Azion também disponibiliza para você algumas funções para simplificar a manipulação de seus argumentos:

| Função e Argumento | Descrição |
|--------------------|-----------|
| ${cookie_time_offset(number)} | Retorna a data atual acrescida de um offset em segundos, informado como argumento, para ser utilizado na definição do tempo de expiracão de um cookie. Por exemplo, se você deseja que o cookie expire em 1 hora, utilize o behavior Add Response Cookie com o argumento:<br> _&lt;cookie-name&gt;=&lt;cookie-value&gt;; Expires=${cookie_time_offset(3600)}_ |
| ${encode_base64(string)} | Retorna o agumento codificado em base64. Por exemplo,<br> _${encode_base64(www.domain.com)} retornará o valor d3d3LmRvbWFpbi5jb20K_ |

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
