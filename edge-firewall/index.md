# Edge **Firewall**

O Azion Edge Firewall permite a criação de regras de controle de acesso ao seu conteúdo diretamente nos Edges, evitando que requisições indesejadas cheguem a sua origem ou que tenham acesso às suas aplicações.

Você poderá criar _whitelists_ ou _blacklists_ por país de acesso do usuário (_geo blocking_) ou por endereço IP, para evitar que seu conteúdo ou aplicações web sejam acessados de determinados locais.

Também poderá ativar outros controles de acesso, como o bloqueio baseado no HTTP Referrer, isto é, no domínio da página html que está requisitando determinado recurso. Assim você poderá evitar que vídeos, imagens, javascripts, css ou outros recursos do seu site sejam requisitados por domínios diferentes dos seus próprios.

Ou poderá ativar a funcionalidade de Secure Token e gerar URLs seguras para determinados recursos de seu site, com tempo de validade da URL e secret, controlando, dessa forma, o compartilhamento de URLs de recursos por seus usuários.

> 1. [Referrer Blocking](#referrer-blocking)
> 2. [Geo Blocking](#geo-blocking)
> 3. [Secure Token](#secure-token)
> 4. [IP Blocking](#ip-blocking)
> 5. [Origin Shield](#origin-shield)
> 6. [Como configurar o Edge Firewall](#como-configurar-o-edge-firewall)
> 7. [Como o Edge Firewall é tarifado](#como-o-edge-firewall-e-tarifado)

---

## 1. Referrer Blocking {#referrer-blocking}

Referer é um cabeçalho do protocolo HTTP, originalmente especificado com erro de grafia para a palavra inglesa Referrer, que identifica o endereço da página web com o link para o recurso que está sendo requisitado.

Você pode ativar o bloqueio por Referrer para que determinados recursos de seu site, tais como imagens, vídeos, javascripts, css ou outros recursos, sejam acessíveis somente quando o cabeçalho HTTP Referer identificar o endereço de algum dos domínios aceitos. Isso evitará que uma página externa, que não esteja listada como _Accepted Domains_, requisite os recursos de seu site.

O bloqueio de acesso a determinado recurso resultará em uma mensagem 403 Forbidden.


| Campo | Definição |
|-------|-----------|
| Block Access by Referer | Assinale esse campo para ativar essa modalidade de controle. O recurso solicitado será entregue somente se o cabeçalho Referer da requisição identificar um dos domínios especificados no campo _Accepted Domains_. |
| Allow Blank Referer | Assinale esse campo se desejar permitir a entrega do recurso quando o cabeçalho Referer estiver ausente. Ao marcar essa opção, você estará permitindo que o objeto seja acessado, por exemplo, preenchendo-se a URL do recurso diretamente na barra de endereço do browser, situação em que não há uma página web de Referrer com o link para o recurso. |
| Accepted Domains | Adicione os domínios aceitos como Referrer das requisições. Você pode adicionar até 10 domínios. Se necessário, poderá ser utilizado Wildcard Domains, por exemplo, _*.seudominio.com_. Para adicionar mais de um dominio, clique em Add Domain.  Para remover um domínio da listagem, clique no botão [-] correspondente ao domínio desejado. |

---

## 2. Geo Blocking {#geo-blocking}

A Azion utiliza um serviço de identificação de países, a partir do endereço IP de seu usuário, com 99,8% de precisão.

Por meio da funcionalidade de Geo Blocking, você pode configurar regras de controle de acesso a seu conteúdo ou aplicações web, com base no país identificado.

Utilize essa funcionalidade para controlar a entrega de seu conteúdo somente para os países em que seu negócio esteja presente, ou somente para os países que você tenha direito de distribuição de determinado conteúdo. Você também pode utilizar essa funcionalidade para filtrar ataques de determinados países.

O bloqueio de acesso a seu conteúdo resultará em uma mensagem _403 Forbidden_.

| Campo | Definição |
|-------|-----------|
| Geo Block | É o campo utilizado para definir sua política de Geo Blocking. Selecione uma das opções que seguem:<br> _whitelist:_ seu conteúdo será entregue somente para os países adicionados no campo Country. Todos os demais acessos serão bloqueados.<br> _blacklist:_ seu conteúdo será entregue para todos os países, com exceção dos adicionados no campo Country.<br> _disabled:_ seu conteúdo será entregue para todos os países. |
| Country | Adicicione a lista de países desejada. Para adicionar mais de um país, clique em Add Country.<br> Para remover um país da lista, clique no botão [-] correspondente ao país desejado. |

---

## 3. Secure Token {#secure-token}

O Secure Token é utilizado para proteger uma URL de compartilhamentos indesejados entre usuários. Você pode utilizar esse recurso para coibir o compartilhamento de URL de seu conteúdo fechado ou personalizado, tais como vídeos, aulas, imagens, dentre outros, definindo um período de validade para que o acesso seja realizado.

Sua aplicação deverá implementar a lógica de geração do Secure Token para as URLs que desejar proteger. Cada URL protegida só será entregue pela Azion se apresentar um Token válido. O Token representa um hash da URL do conteúdo sendo requistado, contendo um período de validade do próprio token e uma Secret. Caso o Token esteja expirado, a Secret não esteja correta ou o Token não seja válido para a URL solicitada, o acesso ao conteúdo será bloqueado com _403 Forbidden_.

Jamais implemente a geração do Secure Token _client-side_, isto é, via javascript no próprio browser do usuário, pois isso colocaria em risco o sigilo de sua Secret. A geração do Secure Token deve ser implementada _server-side_, em sua aplicação.

Veja exemplos de códigos de geração de Secure Token no Github para mais referências: [https://github.com/aziontech/secure_token](https://github.com/aziontech/secure_token).

| Campo | Definição |
|-------|-----------|
| Require Secure Token | Esse campo permite ativar o controle de acesso por Secure Token. Caso ativado, o conteúdo só será entregue se apresentar um Token dentro do prazo de validade, com a secret correta e válido para a URL que está sendo acessada. |
| Secret | Esse campo é utilizado para definição de uma Secret de conhecimento apenas da Azion e de sua aplicação responsável por gerar os tokens.<br><br>Cuidado: ao alterar a Secret no Real-Time Manager e em sua aplicação, todos os tokens gerados anteriormente por usa aplicação, com a Secret antiga, serão considerados inválidos. |

---

## 4. IP Blocking {#ip-blocking}

Você também pode utilizar o Azion Edge Firewall para controlar o acesso ao seu conteúdo baseado no endereço IP de seu usuário.

Com essa funcionalidade você pode, por exemplo, liberar o acesso a determinadas configurações de teste (_stage_) somente para os IPs de sua rede corporativa, ou bloquear o acesso de um IP ou conjunto de IPs que estejam sendo responsáveis por algum ataque.

Você pode utilizar a notação CIDR para definir máscaras de IPs.

| Campo | Definição |
|-------|-----------|
| Default Policy | Esse campo define a política default do bloqueio por IPs:<br> _Allow from all:_ todos os endereços IPs estarão liberados por default e, se desejável, você listará apenas os IPs que deseja bloquear em uma _blacklist_.<br> _Deny from all:_ todos os endereços IPs estarão bloqueados por default e você deverá listar apenas os IPs para os quais deseja liberar o acesso em uma _whitelist_. |
| IP Whitelist / IP Blacklist | Esse campo é utilizado em conjunto com a Default Policy. Inclua até 50 endereços IPs ou máscaras CIDR, um por linha, na listagem de exceção à política default.<br><br> Se a política default for Allow from all, a listagem será de IP Blacklist.<br><br> Se a política default for Deny from all, a listagem será de IP Whitelist. |

---

## 5. Origin Shield {#origin-shield}

Com este add-on do Azion Edge Firewall você poderá criar um perímetro de segurança para a sua infraestrutura de origem, seja ela um provedor de cloud, hosting ou mesmo o seu próprio datacenter. Com este serviço, sua origem receberá acesso apenas de endereços IP’s específicos da nossa rede, e assim você poderá bloquear qualquer outro acesso a sua origem.

Nossa lista de IP’s pode sofrer alterações de tempos em tempos, mas após atualiza-la só colocaremos os novos servidores em produção para quem utiliza o add-on Origin Shield 4 dias após a publicação da lista. Assim, sugerimos que você consulte de forma automatizada a nossa lista de IP’s e atualize os seus filtros de borda sempre que ela receber atualizações, para evitar indisponibilidade de serviço.

Para garantir a segurança contra ataques realizados diretamente na sua origem, sugerimos o uso do Azion DDoS Protection com o add-on Infrastructure Protection, que irá garantir a proteção do seu ASN via BGP utilizando a rede distrbuida da Azion.

---

## 6. Como configurar o Edge Firewall {#como-configurar-o-edge-firewall}

Para configurar o Azion Edge Firewall:

1.  Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Cloud Security > Edge Firewall.
2.  Crie uma nova _rule set_ do Edge Firewall clicando no botão _Add_, ou edite uma existente.
3.  Preencha um nome sugestivo para sua rule set, você irá precisar dele mais adiante.
4.  Configure as opções de Referer Block, Geo Blocking, Secure Token e IP Blocking, conforme sua necessidade.
5.  Se desejar, você pode desmarcar o checkbox _Active_, para criar uma configuração em espera (_standby_). Os bloqueios só serão executados se a _rule set_ estiver ativa.
6.  Após salvar, acesse a aba Rules Engine para editar ou adicionar regras para um ou mais _paths_
7.  Na seção Edge Firewall Settings, selecione o nome da _rule set_ que você deseja aplicar, definido no passo 3.

---

## 7. Como o Edge Firewall é tarifado {#como-o-edge-firewall-e-tarifado}

A cobrança do produto Azion Edge Firewall é baseada no número total de requisições recebidas pelo [Azion Content Delivery]({% tl documentation_products_content_delivery %}) para suas configurações que possuem o Edge Firewall ativado. A cobrança do Edge Firewall é adicional a cobrança do Content Delivery.

Uma configuração de Content Delivery tem o Edge Firewall ativado se houver pelo menos uma _rule set_ de Edge Firewall ativa aplicada a pelo menos uma regra de Rules Engine.

São contabilizadas tanto requisições HTTP quanto HTTPS, sem distinção de valor entre ambas.

Para reduzir seu consumo, você pode deixar as _rule sets_ do Edge Firewall em espera (_standby_), desmarcando o _checkbox Active_. Caso a _rule set_ esteja desativada, nenhum bloqueio dessa _rule set_ será aplicado até que você ative-a marcando o _checkbox Active_.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.