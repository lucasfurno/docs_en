# Network **Lists**

Network Lists é o recurso da plataforma da Azion que permite criar e gerenciar *whitelists* *, *blacklists* ou mesmo *greylists* baseadas na rede ou localização do usuário. Com ele é possível prevenir diversos tipos de ataques a sua rede, até mesmo impedir que usuários com comportamentos maliciosos tenham acesso à suas aplicações.

Através de regras de restrições por IPs, ASN ou por *geolocation*. As Network Lists são utilizadas nas regras de negócio do Rules Engine do Edge Firewall, mitigando riscos de segurança e otimizando a performance de seus recursos.

~~~
Atenção: Para utilizar o recurso de Network Lists é necessário habilitar o módulo Network Layer Protection.
~~~

> 1. [Como funciona?](#como-funciona)
> 2. [Hands-On](#hands-on)
> 3. [Documentação de Suporte](#documentacao-de-suporte)

---

## 1. Como funciona? {#como-funciona}

Com Azion Network Lists, você pode criar e gerenciar listas que são carregadas em todos os Edge Nodes da Azion. Sempre que uma Network List é associada a uma regra, ela é comparada com o endereço IP do cliente que está realizando a requisição HTTP, levando em conta os operadores de comparação configurados na Rule do Rules Engine.

Uma Network List pode ser dos tipos:

* IP/CIDR: Corresponde a uma lista de endereços IP ou CIDR, devendo ser preenchido um endereço por linha. Se preferir, informe também a máscara de sub-rede dos endereços IP.
* ASN: AS Number refere-se a Alocação de Números de Sistema Autônomo que corresponde a um grupo de redes de edereços IP gerenciado por um ou mais operadores de rede que possuem uma clara e única política de roteamento. Consultando o serviço de ASN Whois da [LACNIC](http://lacnic.net/cgi-bin/lacnic/whois?lg=EN) o ASN da Azion, por exemplo, é AS52580. Escolha o tipo ASN para representar uma lista de grupos AS, devendo ser preenchido um endereço por linha, somente o número sem prefixo.
* Countries: Corresponde uma lista de Países. Para incluir Países na lista, selecione os itens na aba Available Countries e mova para aba Chosen Countries.

Depois de criar uma Network List associe a mesma em uma ou mais Rules ou Rules Sets que possuam o módulo Network Layer Protection ativado.

> Atenção: Uma Network Lists terá o efetivo uso quando associada a uma ou mais Rules no Edge Firewall Rules Engine através do condicional(Criteria) Network, para isso, o módulo Network Layer Protection deve estar habilitado.

Para proporcionar ainda mais agilidade aos seus processos, a Azion provê e mantém algumas Network Lists atualizadas automaticamente e prontas para usar. Uma delas é a Network List Azion IP Tor Exit Nodes, que contém os endereços IP de saídas da rede Tor e poderá ser utilizada em uma ou mais Rules, por meio do da condição (Criteria) Network, de acordo com suas necessidades de negócio.

> O conteúdo das Network Lists providas pela Azion não pode ser editado.

## 2. Hands-on. Passo a Passo para criar uma Network List {#hand-on}

1. A partir do Real-Time Manager, acesse o menu Libraries > Network Lists.
2. Para incluir uma nova lista, clique no botão Add.
3. Preencha os campos que aparecerão, conforme abaixo:
  - Add Network List (Nome da sua lista): Atribui um nome sugestivo para sua *Network List*. Esse nome aparecerá na lista de opções na seção *Criterias*, dentro da configuração de *Rules Engine*.
  - Type: Tipo da *Network List*. Podem ser os seguintes tipos:
    - ASN (*Autonomous System Number*)
    - *Countries* (Países)
    - IP/CIDR (Endereços IP ou classes de endereços)
  - List: Adicione aqui os itens que irão compor a sua lista. Para os tipos ASN e IP/CIDR, um campo de digitação será apresentado. Inclua um endereço por linha. Itens duplicados serão excluídos automaticamente. Para o tipo Countries, uma lista para seleção será apresentada. Selecione os itens na aba Available Countries e mova para aba Chosen Countries para incluí-los na lista.
4. Clique en *Save* para finalizar a configuração.

## 3. Documentação de Suporte {#documentacao-de-suporte}

* [Network Lists API]({% tl api_v3_network_lists %})
* [Edge Firewall]({% tl documentation_products_edge_firewall %})

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/edge-caching/netwrok-lists/index.md) on GitHub.
