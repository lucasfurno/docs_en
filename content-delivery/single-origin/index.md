# Single **Origin**

Por meio do Single Origin você poderá configurar o endereço de sua origem e ajustar parâmetros.

> 1. [Funcionalidades do Single Origin](#funcionalidades-do-single-origin)
> 2. [Como configurar uma Single Origin](#como-configurar-uma-single-origin)

---

## 1. Funcionalidades do Single Origin  {#funcionalidades-do-single-origin}

Com Single Origin você adiciona uma origem para seu conteúdo e customiza Host Header, método de conexão e timeouts.

**Host Header**

O cabeçalho Host é utilizado por sua origem para identificar o _virtualhost_ e localizar seu conteúdo ou aplicação. Ao configurar uma origem no Real-Time Manager, você pode customizar a valor que deve ser enviado pela Azion no cabeçalho Host.

Se este campo for deixado em branco, a Azion usará, por default, o mesmo endereço definido no campo Address. Deixe o campo Host Header em branco se sua origem estiver configurada para responder o _virtualhost_ pelo mesmo endereço que está configurado no DNS.

Você pode preencher um valor customizado de Host Header para ser enviado para sua origem. Por exemplo, _www.azion.com_. Você deve customizar o Host Header se sua origem estiver configurada para responder um _virtualhost_ em um endereço diferente do que está configurado no DNS.

Ou ainda, você pode utilizar a variável _$host_ no campo Host Header, para instruir os edge nodes para repassarem para sua origem o mesmo cabeçalho Host recebido de seus visitantes. Utilize essa configuração se tiver múltiplos _virtualhosts_ sendo respondidos pela mesma origem.

**Origin Path**

Caso precise que os Edge Nodes da Azion requisitem o conteúdo de sua origem em um caminho diferente da URI, você pode definir um Origin Path. A Azion fará a concatenação do Origin Path com a URI solicitada pelo usuário.

A definição do Origin Path é opcional. Se não for definido, será utilizada apenas a URI.

Por exemplo, se em sua origem todo o conteúdo fica abaixo do path _/secure_, porém esse caminho não é exibido na URL para seus usuários, você pode definir o _/secure_ como Origin Path em suas configurações de origem. O restante do caminho será preservado, de acordo com a requisição do usuário.

**Origin Protocol Policy**

A arquitetura de entrega da Azion permite que você customize o tipo de conexão desejada dos Edge Nodes para sua origem:

* **Preserve HTTP/HTTPS protocol:** irá manter o mesmo protocolo de conexão (HTTP ou HTTPS) e porta utilizados por seu usuário ao acessar seu conteúdo na Azion para se conectar em sua origem.
* **Enforce HTTP:** a conexão entre os Edge Nodes da Azion e sua origem será por HTTP, independente do protocolo de conexão (HTTP ou HTTPS) e porta utilizados por seu usuário para acessar seu conteúdo na Azion. Com essa opção, você pode customizar uma porta para sua origem no campo Address diferente da porta default (80 para HTTP) se desejar.
* **Enforce HTTPS:** a conexão entre os Edge Nodes da Azion e sua origem será por HTTPS, independente do protocolo de conexão (HTTP ou HTTPS) e porta utilizados por seu usuário para acessar seu conteúdo na Azion. Com essa opção, você pode customizar uma porta para sua origem no campo Address diferente da porta default (443 para HTTPS) se desejar.

**Address**

Após a definição dos campos acima, adicione a origem informando o endereço IP ou hostname (FQDN – Full Qualified Domain Name) de sua origem.

Você pode também customizar a porta da origem, caso tenha definido a _Origin Protocol Policy_ em _Enforce HTTP_ ou _Enforce HTTPS_, utilizando a notação _host:port._

**HMAC Authentication**

Você pode incluir uma Single Origin onde sua origem se encontra em um Object Storage com acesso privado, com autenticação através de HMAC.

Deve-se incluir nas credenciais de acesso HMAC, Region, Access Key e Secret Key fornecidos pelo seu Object Storage provider.

O Google Cloud Storage™ suporta buckets com tipo de local single region (us-east1 por exemplo) e multirregional e se este for seu caso, você pode configurar o valor "auto" como Region.

A Secret Key fica protegida sendo exibida apenas para seus usuários com permissão de escrita e mantendo sua segurança de acesso.

_©2020 Google LLC All rights reserved. Google Cloud Storage is a trademark of Google LLC._

Ao habilitar o HMAC Authentication, o seu conteúdo privado passará a ser entregue aos seus usuários pela Edge Application.

**Timeouts**

Você pode customizar os seguintes timeouts:

* **Connection:** timeout em segundos no estabelecimento da conexão do Edge Nodes com sua origem.
* **Between Bytes:** timeout em segundos entre bytes em uma conexão já estabelecida.

---

## 2. Como configurar uma Single Origin {#como-configurar-uma-single-origin}

Para configurar uma Single Origin:

1.  Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Content Delivery.
2.  Edite a configuração de Content Delivery desejada.
3.  Na aba Origins, adicione ou edite uma origem para seu conteúdo.
4.  Selecione _Single Origin_ como _Origin Type_ e preencha os campos solicitados.
5.  Após salvar, acesse a aba Rules Engine para editar ou adicionar regras para um ou mais _paths_.
6.  Na seção Origin Settings, selecione a configuração de origem criada por você nos passos 3 e 4.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.