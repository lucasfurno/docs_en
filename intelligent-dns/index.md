# Intelligent **DNS**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/intelligent-dns/index.md)

Com a Azion sua aplicação fica mais rápida. Com o Intelligent DNS vai ficar ainda mais. Ele é um módulo para hospedagem de domínios que compõe nossa solução de roteamento de tráfego, o Edge Traffic Router. Sua implementação confere uma redução substancial na latência das requisições, melhorando a performance de suas aplicações e APIs, proporcionando uma melhor experiência para o usuário final.

> 1. [O que é um DNS?](#o-que-e-um-dns)
> 2. [Como funciona o Intelligent DNS?](#como-funciona-o-intelligent-dns)
> 3. [Hands-on](#hands-on)
> 4. [Tipos de entradas suportadas e as respectivas recomendações](#tipos-de-entradas-suportadas)
> 5. [Regras de preenchimento de valores (Value)](#regras-de-preenchimento-de-valores)
> 6. [Como utilizar wildcards?](#como-utilizar-wildcards)
> 7. [Como testar minha zona?](#como-testar-minha-zona)
> 8. [Como configurar o Intelligent DNS para responder pelos seus domínios?](#como-configurar-responder-pelos-dominios)

---

## 1. O que é um DNS(Domain Name System)? {#o-que-e-um-dns}

Como o próprio nome diz é um sistema de resolução de nomes de domínios. Ele consegue resolver o nome em um endereço IP para que possa ser estabelecida uma conexão com o destino que fornecerá o conteúdo do site solicitado.

---

## 2. Como funciona o Intelligent DNS? {#como-funciona-o-intelligent-dns}

O Intelligent DNS é um produto desenhado para quem busca alto desempenho e alta disponibilidade para o seu negócio. Acoplado a ampla rede de pontos de presença dos edges da Azion, atua em conjunto com nossos mecanismos de edge network, combinando técnicas para otimização das requisições, ocasionando em melhores tempos de resposta, diminuindo consideravelmente o tempo de entrega de seu conteúdo.

Sendo ele um DNS autoritativo, o cliente consegue facilmente gerenciar as configurações de entradas de seus domínios, através de uma interface amigável e intuitiva, com a garantia de alta disponibilidade de resolução de consultas que só uma rede de edges de alto desempenho como a da Azion pode oferecer. Além disso, é possível criar entradas do tipo ANAME, possibilitando o registro de um _naked domain_, configurações que, apesar de não obrigatórias, favorecem a usabilidade e acessibilidade web.

---

## 3. Hands-on. Passo a passo para configurar o Intelligent DNS {#hands-on}

---

## Criação de uma Zona Hospedada

1.  A partir do [Real-Time Manager](https://manager.azion.com/), acesse o menu _Routing Services > Intelligent DNS_. Você visualizará a interface principal onde poderá criar e administrar suas zonas.
2.  Clique no botão **Add Zone** e preencha os campos indicados a seguir:  
    **Name for zone** (Nome da Zona): Identificador da sua nova zona de domínio criada. Esse campo é livre. Você pode cadastrar essa informação da maneira que melhor lhe convier.  
    **Domain** (Domínio): Nesse campo você deve informar apenas o [Naked Domain](https://en.wikipedia.org/wiki/DNS_zone) em formato [FQDN](https://pt.wikipedia.org/wiki/FQDN). Ex: _mydomain.com_.  
    **Active**: Essa flag indica se essa zona está ativa e deve ser respondida pelo Intelligent DNS ou não. Zonas desativadas são desconsideradas nas respostas do DNS.
3.  Para finalizar, clique no botão **Save**

---

## Criando registros em sua zona

Crie e edite entradas para seus domínios de acordo com a sua necessidade.

A partir do [Real-Time Manager](https://manager.azion.com/), acesse o menu _Routing Services > Intelligent DNS_. Selecione o domínio que deseja administrar. Você visualizará a interface principal onde poderá criar e editar suas zonas. Ao fazer isso, você verá duas abas:

**Main Settings**

Nessa aba você poderá editar o nome da zona, o seu domínio principal, o status dela no serviço de DNS e também terá acesso aos endereços dos servidores autoritativos da Azion (name servers) que responderão as consultas referentes a essa sua zona.

**Records**

Nessa aba, você verá a lista de registros que fazem parte dessa zona.  
Para inserir um novo registro, clique no botão **Add Record**. A tela de inclusão será apresentada com os campos a seguir:

*   **Name (Nome do Registro)**  
    Essa descrição é o domínio que se deseja criar. Como por exemplo: "_help_", em "<em">help.azion.com", ou então "_manager_" em "_manager.azion.com_".</em"> 
*   **Type (Tipo do Registro)**  
    É o tipo de registro que está sendo adicionado, como por exemplo um registro do tipo A, AAAA, MX ou CNAME, dentre outros.  
    [(ver seção Tipos de entradas suportadas e as respectivas recomendações que o Intelligent DNS segue)](#tipos-de-entradas-suportadas)  

*   **Value (Valor do Registro)**  
    É a resposta de DNS para o registro cadastrado, como por exemplo um endereço IPv4.  
    [(ver seção Regras de preenchimento de valores (Value))](#regras-de-preenchimento-de-valores)  

*   **TTL (Time To Live)**: É o tempo que uma resposta pode ficar em cache em servidores resolvers.  

Para finalizar a criação de seu registro, clique no botão **Save**. A partir desse momento, essas informações serão sincronizadas com o serviço de atendimento do Intelligent DNS. Suas configurações são salvas e distribuídas para a rede da Azion praticamente em tempo real.

Pronto. Seu domínio já está configurado e preparado para ser atendido pelo Intelligent DNS da Azion. Para verificar se tudo deu certo, execute alguns dos testes descritos na seção [Como testar minha zona?](#como-testar-minha-zona)

---

## 4. Tipos de entradas suportadas e as respectivas recomendações que o Intelligent DNS segue {#tipos-de-entradas-suportadas}

Para prover a criação de registros, o Intelligent DNS implementa os seguintes tipos de entradas DNS.

| Type | Referência |
|------|------------|
| A | [RFC1035](https://tools.ietf.org/html/rfc1035) |
| AAAA | [RFC3596](https://tools.ietf.org/html/rfc3596) |
| ANAME | [draft-ietf-dnsop-aname-04](https://tools.ietf.org/html/draft-ietf-dnsop-aname-04) |
| CNAME | [RFC1035](https://tools.ietf.org/html/rfc1035) |
| MX | [RFC1035](https://tools.ietf.org/html/rfc1035) e [RFC7505](https://tools.ietf.org/html/rfc7505) |
| NS | [RFC2782](https://tools.ietf.org/html/rfc2782) |
| PTR | [RFC1035](https://tools.ietf.org/html/rfc1035) |
| SRV | [RFC2782](https://tools.ietf.org/html/rfc2782) |
| TXT | [RFC1035](https://tools.ietf.org/html/rfc1035) e [RFC1464](https://tools.ietf.org/html/rfc1464) |


## 5. Regras de preenchimento de valores (Value) {#regras-de-preenchimento-de-valores}

| Type | Regra de restrição | Exemplo |
|------|--------------------|---------|
| A | [Deve seguir o formato IPv4](https://pt.wikipedia.org/wiki/IPv4) <br><br> Máximo de 10 endereços IP (um por linha)<br><br> Somente endereços IPv4 válidos serão aceitos como resposta| Nome da Zona: azion.com<br><br> Nome do Registro: @ (Ou em branco)<br><br> Valor da resposta:<br><br> 192.209.210.67<br><br> 198.199.105.93 |
| AAAA | [Deve seguir o formato IPv6](https://pt.wikipedia.org/wiki/IPv6) Máximo de 10 endereços IP (um por linha)<br><br> Somente endereços IPv6 válidos serão aceitos como resposta | Nome da Zona: azion.com<br><br> Nome do Registro: www<br><br> Valor da resposta:<br><br> 2800:3f0:4001:815::2004 |
| ANAME | [Deve respeitar o formato FQDN](https://pt.wikipedia.org/wiki/FQDN)<br><br> Apenas um domínio para cada registro do tipo ANAME<br><br> Somente domínios abaixo de azioncdn.net são aceitos como valor.<br><br> Pode coexistir com registros de mesmo nome mas de tipos diferentes (MX, TXT etc.) | Nome da Zona: azion.com<br><br> Nome do Registro: @<br><br> Valor da resposta:<br><br> 32082s.ha.azioncdn.net |
| CNAME | [Deve respeitar o formato FQDN](https://pt.wikipedia.org/wiki/FQDN) <br><br> Apontar somente para outro nome de domínio, nunca para um endereço IP<br><br> Não pode ser colocado no nível do domínio raiz.<br><br> Permitido apenas um domínio para cada registro do tipo CNAME<br><br> Um nome de host definido em um registro CNAME não deve ter outros registros de recursos de outros tipos (MX, A, etc.)<br><br> Os registros CNAME podem apontar para outros registros CNAME, mas isso não é considerado uma boa prática, pois é ineficiente<br><br> Caso um registro CNAME estiver apontando para um registro da mesma zona, o Intelligent DNS responderá todos eles em apenas um consulta |  |
| MX | Deve seguir o formato [PRIORITY] [ADDRESS]<br><br> Máximo de 10 endereços IP (um por linha) | Nome da Zona: azion.com<br><br> Nome do Registro: mail<br><br> Valor(es) da resposta:<br><br> 10 mailserver.example.com<br><br> 20 mailserver2.example.com |
| NS | [Deve respeitar o formato FQDN](https://pt.wikipedia.org/wiki/FQDN)  ou endereço de ip<br><br> Máximo de 10 endereços (um por linha)<br><br> Um NS não pode ser configurado para o domínio principal da zona (naked domain)<br><br> Deve apontar para os servidores que detém autoridade sobre aquele registro| Nome da Zona: azion.com<br><br> Nome do Registro: ns<br><br> Valores de resposta:<br><br> ns1.aziondns.net<br><br> ns2.aziondns.net |
| PTR | [Zonas reversas vinculadas a endereços IPv6 seguem outras regras. Veja aqui mais informações.](https://pt.wikipedia.org/wiki/Reverse_DNS_lookup) | 1- Crie uma nova zona, colocando a seguinte informação como DOMAIN:<br> 0.168.192.in-addr.arpa<br><br> 2 - Após a criação dessa zona, você deve criar um registro associado a ela do tipo PTR, com a seguinte configuração:<br><br> Nome do Registro: 1<br><br> Valor da resposta: www.exemplo.com |
| SRV | Deve obedecer o seguinte formato no nome do registro: '_service._protocol.name'. Exemplo: "_ldap._tcp.azionsrv"<br><br> Os valores de resposta devem seguir, obrigatoriamente, o formato [prioridade] [peso] [porta] [destino]<br><br> Máximo de 10 respostas por registro (uma por linha)<br><br> Deve apontar para o nome do host que possua um registro A ou AAAA.<br><br> Obs: É você quem deve ter essa atenção, pois o Intelligent DNS não realiza essa validação automaticamente | Nome da Zona: azion.com<br><br> Nome do Registro: _ldap._tcp.azionsrv<br><br> Valores de resposta:<br><br> 0 60 5060 bigbox.example.com   |
| TXT | Limite total de 1000 caracteres<br><br> Textos separados por ENTER são considerados respostas diferentes para o Intelligent DNS | Nome da Zona: azion.com<br><br> Nome do Registro: txt<br><br> Valores de resposta:<br><br> This domain name is reserved for use in documentation<br><br> "printer=lpr5"<br><br> "favorite drink=orange juice"   |

## 6. Como utilizar wildcards? {#como-utilizar-wildcards}

Um registro curinga é um registro que responde a solicitações de DNS para domínios que você ainda não definiu. Você pode criá-los para qualquer tipo, inserindo um asterisco (*) no nome do registro. Por exemplo, imagine que você tenha a seguinte configuração para uma zona cujo domínio é "_example.com_":

| Name | Type | Value |
|------|------|-------|
| www | A | 192.168.0.1<br><br> 192.168.0.2<br><br> 192.168.0.3 |
| * | A | 1.1.1.1 |      
| *.wildcard | A | 2.2.2.2  |

Isso significa que:

*   Se a consulta for realizada por _www.example.com_ a resposta será composta por 3 endereços IP: 192.168.0.1, 192.168.0.2 e 192.168.0 OBS: Ele **não é** um wildcard, mas tem prioridade na resposta porque encontrou corretamente o registro consultado.
*   Se a consulta for realizada por _ghost.example.com_ a resposta será efetuada de acordo com o wildcard encontrado. Ou seja, responderá: 1.1.1.1
*   Se a consulta for realizada por _another.wildcard.example.com_ a resposta será efetuada de acordo com o wildcard encontrado para essa construção Ou seja, responderá: 2.2.2.2
*   Se a consulta for realizada por _wrong.record.example.com_ a resposta não terá nenhum valor, pois não existe nenhuma correspondência a essa estrutura consultada.

**Restrições na construção de wildcards**

Somente será considerado um wildcard, o asterisco mais à esquerda seguido, obrigatoriamente, por um ponto. Todos os demais asteriscos, se existirem, serão considerados como caracteres válidos.

Asteriscos localizados mais a esquerda que não estiverem sendo seguidos por um ponto, não serão considerados wildcards.

Não é permitido a utilização de caracteres curingas em registros do tipo SRV, pois ele segue uma norma de formatação em seu nome.

---

## 7. Como testar minha zona? {#como-testar-minha-zona}

Se você já efetuou as configurações desejadas no Intelligent DNS e agora deseja verificar se ele está respondendo adequadamente suas informações, você pode testá-lo utilizando as seguintes ferramentas:

### DIG

O "_dig_" (domain information groper) é uma ferramenta de linha de comando de administração de rede para consultar o DNS. Ela é útil para solucionar problemas de rede e para fins educacionais. Ele pode operar com base na opção da linha de comando e nos argumentos do sinalizador, ou no modo em lote, lendo solicitações de um arquivo do sistema operacional. Quando um servidor de nomes específico não é informado na chamada de comando, ele usa o resolvedor padrão do sistema operacional, geralmente configurado no arquivo resolv.conf. Sem argumentos, ele consulta a zona raiz do DNS.

É um componente do pacote de software para servidores de nomes de domínio _BIND_ e, na prática, substitui ferramentas antigas, como "_nslookup_" e o "_host_". No entanto, as ferramentas mais antigas ainda são usadas de maneira complementar.

Para você testar o Intelligent DNS, deve utilizar um dos nameservers listados na aba _Main Settings_ de sua zona cadastrada na Azion.

Por exemplo, imagine que você tenha a seguinte configuração:

| Name | Type | Value | TTL |
|------|------|-------|-----|
| www | A | 192.168.0.1<br><br> 192.168.0.2<br><br> 192.168.0.3 | 3600 |

Para verificar como o Intelligent DNS responderá por uma consulta ao tipo "A" cadastrado para o registro "_www_", digite o seguinte comando:

~~~
  > dig A www.example.com @ns1.aziondns.net 
~~~

Essa será a resposta a essa consulta:

~~~
 ; <<>> DiG 9.10.6 <<>> A www.example.com @ns1.aziondns.net ;; global options: +cmd ;; Got answer: ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 46329 ;; flags: qr aa rd; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1 ;; WARNING: recursion requested but not available ;; OPT PSEUDOSECTION: ; EDNS: version: 0, flags:; udp: 4096 ;; QUESTION SECTION: ;www.example.com. IN A ;; ANSWER SECTION: www.example.com. 3600 IN A 192.168.0.1 www.example.com. 3600 IN A 192.168.0.2 www.example.com. 3600 IN A 192.168.0.3 ;; Query time: 22 msec ;; SERVER: 179.191.160.2#53(179.191.160.2) ;; WHEN: Thu Sep 12 13:13:14 -03 2019 ;; MSG SIZE rcvd: 137
~~~

### HOST

O _host_ realiza pesquisas de DNS, convertendo nomes de domínio em endereços IP e vice-versa. Quando nenhum argumento ou opção é fornecido, o host imprime um breve resumo dos argumentos e opções da linha de comando.

Por exemplo, imagine que você tenha a seguinte configuração:

| Name | Type | Value | TTL |
|------|------|-------|-----|
| www | A | 192.168.0.1<br><br> 192.168.0.2<br><br> 192.168.0.3 | 3600 |

Para verificar como o Intelligent DNS responderá por uma consulta ao tipo "A" cadastrado para o registro "_www_", digite o seguinte comando:

~~~
> host www.example.com ns1.aziondns.net
~~~

Essa será a resposta a essa consulta:

~~~
Using domain server: Name: ns1.aziondns.net Address: 179.191.160.2#53 Aliases: www.example.com has address 192.168.0.1 www.example.com has address 192.168.0.2 www.example.com has address 192.168.0.3
~~~

### NSLOOKUP

_Nslookup_ é uma ferramenta, comum ao Windows e ao Linux, utilizada para se obter informações sobre registros de DNS de um determinado domínio, host ou IP.

Por exemplo, imagine que você tenha a seguinte configuração:

| Name | Type | Value | TTL |
|------|------|-------|-----|
| www | A | 192.168.0.1<br><br> 192.168.0.2<br><br> 192.168.0.3 | 3600 |

Para verificar como o Intelligent DNS responderá por uma consulta ao tipo "A" cadastrado para o registro "_www_", digite o seguinte comando:

~~~
 > nslookup www.example.com ns1.aziondns.net
~~~

Essa será a resposta a essa consulta:

~~~
 Server: ns1.aziondns.net Address: 179.191.160.2#53 Name: www.example.com Address: 192.168.0.1 Name: www.example.com Address: 192.168.0.2 Name: www.example.com Address: 192.168.0.3
~~~

---

## 8. Como configurar o Intelligent DNS para responder pelos seus domínios? {#como-configurar-responder-pelos-dominios}

Para que o Intelligent DNS passe a responder como autoridade sobre suas zonas, você deve efetuar o apontamento no seu DNS de registro. (registro.br, GoDaddy, AWS Registrar, etc)

Para efetuar o apontamento no seu DNS de registro, utilize um dos nameservers listados na aba _Main Settings_ de suas zonas cadastradas na Azion.

Importante verificar se todos os seus registros estão devidamente cadastrados e testados no Intelligent DNS antes de efetuar esse apontamento. Caso contrário você correrá o risco de ter indisponibilidade do seu serviço.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
