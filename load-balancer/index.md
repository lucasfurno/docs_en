# Load **Balancer**

Para alcançar altos níveis de tolerância a falhas e performance é necessário garantir a disponibilidade do seu conteúdo e aplicações mesmo em caso de incidentes com seus servidores de origem. O Azion Load Balancer permite balancear o tráfego para suas origens, data centers ou provedores de cloud, evita o congestionamento de rede e a sobrecarga de seus servidores. Além disso, detecta falhas e provê múltiplos algoritmos que permitem distribuir a carga para as infraestruturas disponíveis, garantindo a melhor experiência para seus usuários e resultados para sua empresa.

> 1. [Funcionalidades do Load Balancer](#FuncionalidadesLoadBalancer)
> 2. [Como configurar o Load Balancer](#ComoConfigurarLoadBalancer)

---

## 1. Funcionalidades do Load Balancer {#FuncionalidadesLoadBalancer}

Com Azion Load Balancer você adiciona múltiplas origens para seu conteúdo, seleciona o método de balanceamento de carga que mais se adequa as suas necessidades e customiza timeouts e tratamento de erros.

**Método de Balanceamento**

Você pode selecionar o método de balanceamento que define como será distribuída a carga entre suas origens:

* **Round-Robin:** define o algoritmo de balanceamento em rodízio. Leva em consideração o volume de requisições e não o tempo que cada origem demora para responder. Cada origem receberá carga proporcionalmente ao seu peso no round-robin. Origens mais lentas poderão acumular maior número de conexões em paralelo.
* **Least connections:** mantém o controle do número de conexões ativas com cada origem e envia a próxima requisição sempre para a origem que tiver menor número de conexões. Assim, origens mais lentas receberão menor número de requisições, enquanto origens mais rápidas poderão atender mais requisições sequencialmente.
* **IP Hash:** mantém um controle por endereço IP do usuário e tenta, sempre quando possível, associar a mesma origem para cada IP.

**Host Header**

O cabeçalho Host é utilizado por sua origem para identificar o _virtualhost_ e localizar seu conteúdo ou aplicação. Ao configurar uma origem no Real-Time Manager, você pode customizar a valor que deve ser enviado pela Azion no cabeçalho Host.

Se este campo for deixado em branco, a Azion usará, por default, o mesmo endereço definido no campo Address. Deixe o campo Host Header em branco se sua origem estiver configurada para responder o _virtualhost_ pelo mesmo endereço que está configurado no DNS.

Você pode preencher um valor customizado de Host Header para ser enviado para sua origem. Por exemplo, _www.azion.com_. Você deve customizar o Host Header se sua origem estiver configurada para responder um _virtualhost_ em um endereço diferente do que está configurado no DNS.

Ou ainda, você pode utilizar a variável _$host_ no campo Host Header, para instruir os edge servers para repassarem para sua origem o mesmo cabeçalho Host recebido de seus visitantes. Utilize essa configuração se tiver múltiplos _virtualhosts_ sendo respondidos pela mesma origem.

**Origin Path**

Caso precise que os Edge Nodes da Azion requisitem o conteúdo de sua origem em um caminho diferente da URI, você pode definir um Origin Path. A Azion fará a concatenação do Origin Path com a URI solicitada pelo usuário.

A definição do Origin Path é opcional. Se não for definido, será utilizada apenas a URI.

Por exemplo, se em sua origem todo o conteúdo fica abaixo do path _/secure_, porém esse caminho não é exibido na URL para seus usuários, você pode definir o _/secure_ como Origin Path em suas configurações de origem. O restante do caminho será preservado, de acordo com a requisição do usuário.

**Origin Protocol Policy**

A arquitetura de entrega da Azion permite que você customize o tipo de conexão desejada dos Edge Nodes para sua origem:

* **Preserve HTTP/HTTPS protocol:** irá manter o mesmo protocolo de conexão (HTTP ou HTTPS) e porta utilizados por seu usuário ao acessar seu conteúdo na Azion para se conectar em sua origem.
* **Enforce HTTP:** a conexão entre os Edge Nodes da Azion e sua origem será por HTTP, independente do protocolo de conexão (HTTP ou HTTPS) e porta utilizados por seu usuário para acessar seu conteúdo na Azion. Com essa opção, você pode customizar uma porta para sua origem no campo Address diferente da porta default (80 para HTTP) se desejar.
* **Enforce HTTPS:** a conexão entre os Edge Nodes da Azion e sua origem será por HTTPS, independente do protocolo de conexão (HTTP ou HTTPS) e porta utilizados por seu usuário para acessar seu conteúdo na Azion. Com essa opção, você pode customizar uma porta para sua origem no campo Address diferente da porta default (443 para HTTPS) se desejar.

**Múltiplas Origens**

Você deve adicionar múltiplas origens para alcançar altos níveis de disponibilidade e evitar que um incidente impacte na disponibilidade de seu conteúdo e aplicações.

* **Address:** endereço IP ou hostname de sua origem. Você pode customizar a porta da origem, caso tenha definido a Origin Protocol Policy em Enforce HTTP ou Enforce HTTPS, utilizando a notação _host:port_.
* **Weight:** você pode definir um peso para cada origem. Esse peso define a proporção de carga que a origem irá receber. Se você definir o peso de uma origem em 3, por exemplo, ela receberá 3 vezes mais carga do que uma origem com peso definido em 1.
* **Server Role:** se o método de balanceamento selecionado por você for Round-Robin ou Least connections, você pode definir Server Role para cada origem: Primary ou Backup. As origens Backup atuarão como origens _standby_ e só receberão carga se todas as origems Primary falharem.
* **Active:** para retirar um servidor do balanceamento temporariamente para manutenção, você pode desativá-lo desmarcando o checkbox Active. É necessário pelo menos uma origem ativa para que o conteúdo fique disponível.

**Customização de Timeouts**

O Azion Load Balancer irá consultar as origens respeitando o método de balanceamento e peso atribuidos por você. Caso alguma origem retorne um erro 404 (Not Found), um erro 5xx ou demore mais do que os timeouts configurados por você para responder, as demais origens serão consultadas antes de retornar qualquer erro para seus usuários.

Você pode customizar os seguintes timeouts:

* **Connection:** timeout de 60 segundos no estabelecimento da conexão com a origem.
* **Between Bytes:** timeout de 120 segundos entre bytes em uma conexão já estabelecida.

---

## 2. Como configurar o Load Balancer {#ComoConfigurarLoadBalancer}

Para configurar o Azion Load Balancer:

1.  Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Edge Application
2.  Edite a configuração de Content Delivery desejada
3.  Na aba Origins, adicione ou edite uma origem para seu conteúdo
4.  Selecione Load Balancer como Origin Type e configure Method e adicione endereços
5.  Após salvar, acesse a aba Rules Engine para editar ou adicionar regras para um ou mais _paths_
6.  Na seção Origin Settings, selecione a configuração de origem criada por você nos passos 3 e 4

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.