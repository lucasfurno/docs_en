# Content **Delivery**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/content-delivery/index.md)

O Azion Content Delivery acelera a entrega dos seus conteúdos, cacheando-os nos edges da CDN, muito mais próximos dos usuários finais. Seu conteúdo, incluindo os arquivos mais pesados, fica prontamente disponível, mesmo durante grandes picos de acesso ou em caso de falhas.

O [Azion Real-Time Manager](https://manager.azion.com/) permite configurar e gerenciar funcionalidades avançadas disponíveis nos Intelligent Edges de forma simples e em tempo real. Isso inclui definir comportamentos do seu conteúdo através de regras (Rules Engine) e controlar esse conteúdo através de Custom Headers.

Todas as operações realizadas pelo Real-Time Manager são executadas em tempo real.

> 1. [Rede de entrega de conteúdo](#rede-de-entrega-de-conteudo)
> 2. [HTTP e HTTPS](#http-e-https)
> 3. [Manipulação de cabeçalhos HTTP](#manipulacao-de-cabecalhos-http)
> 4. [Rules Engine](#rules-engine)
> 5. [Live Streaming & VOD](#live-streaming-e-vod)
> 6. [Analytics & Data Streaming](#analytics-e-data-streaming)

---

## 1. Rede de entrega de conteúdo {#rede-de-entrega-de-conteudo}

Com base em nossa rede global distribuída e mecanismos de _self-healing_, aumentamos a segurança dos seus conteúdos e aplicações web enquanto reduzimos seus custos de infraestrutura.

**Como funciona?**

A Azion acelera o carregamento de seu site ao entregar seu conteúdo com alta taxa de transferência e baixa latência a partir dos Intelligent Edges, muito mais próximos de seus usuários.

Quando um usuário requisita um conteúdo na internet, seu navegador ou aplicativo inicia pela resolução de DNS para traduzir o domínio solicitado para um endereço IP. Ao utilizar a Azion, você irá configurar o DNS de seu conteúdo para apontar para um endereço da Azion, que é fornecido a você ao criar uma configuração de Content Delivery.

A Azion seleciona, através de seu SDN Router, a infraestrutura de Intelligent Edge mais próxima do usuário, reduzindo latência e aumentando a velocidade da transferência do conteúdo.

Ao contar com a ampla rede de entrega de conteúdo da Azion, você ganha escalabilidade e _throughput_.

**Cache de conteúdo**

Essa arquitetura de proxy reverso viabiliza que você entregue seu conteúdo com muito mais eficiência. O conteúdo que estiver em cache (_cache hit_) nos Intelligent Edges pode ser entregue diretamente para seus usuários, sem necessidade de acessar sua origem. Além de aumentar o desempenho e escalabilidade para seu conteúdo, você poderá economizar em sua infraestrutura de origem.

Um _cache miss_ ocorre quando um conteúdo é solicitado e não está cacheado nos edges. A Azion minimiza o efeito do _cache miss_, ao manter uma conexão keepalive com sua origem, sempre que possível, evitando o overhead do handshake TCP/IP. Independente do volume de requisições simultâneas realizadas aos Intelligent Edges da Azion, cada edge buscará o conteúdo em sua origem apenas uma vez por _cache miss_, o que reduz substancialmente o impacto em sua infraestrutura.

**Configurações de Browser Cache**

Browser Cache é a área de armazenamento temporário nos dispositivos dos seus usuários. Ao utilizar com eficiência o browser cache, você melhora a performance de seu site e reduz o tráfego de dados.

Você pode definir as configurações de browser cache para seu conteúdo em sua origem, através do cabeçalho HTTP de Cache-Control. Se preferir, a Azion simplificou o processo para você e permite que você sobreescreva as definições de browser cache para seu conteúdo através do Real-Time Manager, de forma simples e amigável.

**Configurações de CDN Cache**

CDN Cache é o armazenamento temporário do seu conteúdo nos Intelligent Edges da Azion.

Você também pode definir as configurações de CDN cache para seu conteúdo em sua origem, através do cabeçalho HTTP de Cache-Control ou, se preferir, a Azion simplificou o processo para você e permite que você sobreescreva as definições de CDN cache para seu conteúdo através do Real-Time Manager, de forma mais simples e amigável.

Para aumentar a disponibilidade de seu conteúdo mesmo em caso de falha de sua origem, a Azion provê o mecanismo de _stale while revalidate_.

**Origem**

A Azion trabalha com uma arquitetura de proxy reverso, através da qual seus usuários se conectarão nos Intelligent Edges da Azion, que poderão realizar o cache de seu conteúdo, além de contar com um amplo arsenal de otimização. Nessa arquitetura, o conteúdo precisa ser disponibilizado a partir de uma origem, que pode ser um servidor em sua infraestrutura, um serviço na _cloud_ ou um dos produtos da Azion.

*   [Single Origin]({% tl documentation_products_content_delivery_single_origin %})
*   [Cloud Storage]({% tl documentation_products_cloud_storage %})
*   [Load Balancer]({% tl documentation_products_load_balancer %})
*   Media Packager
*   [Live Ingest]({% tl documentation_products_live_ingest %})

---

## 2. HTTP e HTTPS {#http-e-https}

Na Azion você pode utilizar as versões HTTP/1.0, HTTP/1.1 e [HTTP/2]({% tl documentation_how_to_configurations_http2 %}). Além disso, não há tarifação adicional sobre o tráfego HTTPS.

O uso de HTTPS garante a você segurança na transmissão de dados de seus clientes pela internet, demonstra a confiabilidade de seu site e a autenticidade de seu domínio, além de melhorar o rankeamento de seu site nos motores de busca como o Google. Para utilizar HTTPS, você precisará de um certificado SSL. Consulte a documentação de [Digital Certificates]({% tl documentation_products_edge_applications_digital_certificates %}) para obter mais informações.

**Redirect HTTP para HTTPS**

Você pode configurar a Azion para fazer redirect de HTTP para HTTPS de forma simples e ágil. Se o seu conteúdo estiver preparado para respeitar o esquema de conexão, você poderá configurar a Azion para redirecionar todo ou parte do seu tráfego de HTTP para HTTPS simplesmente selecionado essa opção no Rules Engine.

Você ganhará agilidade no processo de migração e evitará o gerenciamento de redirects em sua origem.

**Conexão ponto-a-ponto**

Na arquitetura de proxy reverso adotada pela Azion, seus usuários se conectam ao Intelligent Edge por HTTP ou HTTPS e você escolhe como deseja que a Azion se conecte em sua origem:

*   **Preserve HTTP/HTTPS protocol:** irá manter o mesmo protocolo de conexão (HTTP ou HTTPS) e porta utilizados por seu usuário ao acessar seu conteúdo na Azion para se conectar em sua origem.
*   **Enforce HTTP:** a conexão entre os Edge Servers da Azion e sua origem será por HTTP, independente do protocolo de conexão (HTTP ou HTTPS) e porta utilizados por seu usuário para acessar seu conteúdo na Azion. Com essa opção, você pode customizar uma porta para sua origem no campo Address diferente da porta default (80 para HTTP) se desejar.
*   **Enforce HTTPS:** a conexão entre os Edge Servers da Azion e sua origem será por HTTPS, independente do protocolo de conexão (HTTP ou HTTPS) e porta utilizados por seu usuário para acessar seu conteúdo na Azion. Com essa opção, você pode customizar uma porta para sua origem no campo Address diferente da porta default (443 para HTTPS) se desejar.

---

## 3. Manipulação de cabeçalhos HTTP {#manipulacao-de-cabecalhos-http}

Você pode adicionar ou remover cabeçalhos HTTP através do Real-Time Manager. Adicione ou remova cabeçalhos HTTP antes de enviar a resposta para seus usuários. Adicione ou remova cabeçalhos HTTP antes de enviar a requisição para sua origem.

Você ganha simplicidade e agilidade no processo de manipulação de cabeçalhos HTTP através de uma interface amigável e em tempo real.

---

## 4. Rules Engine {#rules-engine}

Rules Engine é a interface no Real-Time Manager onde você define comportamentos por _path_ do seu conteúdo. Você pode utilizar expressões regulares para ganhar maior flexibilidade na definição de seus _paths_.

Adicione ou edite um ou mais _paths_ no Rules Engine para definir o comportamento esperado:

*   **Delivery:** é o compartamento de cache e entrega do conteúdo. Suporta os métodos HTTP GET, HEAD e OPTIONS.
*   **Access Denied:** evita o acesso indesejado de seus usuários a um ou mais _paths_, retornando um _403 Forbidden_.
*   **Redirect:** você pode migrar conteúdo de um _path_ para outro realizando um redirect (301).

Utilize a funcionalidade de Gzip para comprimir seus arquivos de texto (_text/*_), otimizando a entrega de seu conteúdo.

Você também pode estender as funcionalidades do produto Content Delivery, ao contratar:

*   [Application Acceleration]({% tl documentation_products_application_acceleration %})
*   [Image Optimization]({% tl documentation_products_image_optimization %})
*   [Edge Firewall]({% tl documentation_products_edge_firewall %})
*   [Web Application Firewall]({% tl documentation_products_web_application_firewall %})
*   [Adaptive Delivery]({% tl documentation_products_adaptative_delivery %})

---

## 5. Live Streaming e VOD {#live-streaming-e-vod}

O produto Content Delivery suporta HLS (Apple HTTP Live Streaming) para transmissões live e também para áudio e vídeo on demand.

Se seu encoder trabalhar apenas com o protocolo RTMP, você precisará do produto [Live Ingest]({% tl documentation_products_live_ingest %}) para receber sua transmissão e disponibilizar seu stream em HLS para distribuição pelo Content Delivery.

Para áudio e vídeo on demand (VOD), você pode distribuir suas mídias através de Progressive Download diretamente pelo Azion Content Delivery, ou pode otimizar seu fluxo de produção de conteúdo e melhorar a experiência para seus usuários ao utilizar a funcionalidade de Dynamic Packaging do produto Media Packager, que se encarrega de converter suas mídias para HLS para distribuição através do Content Delivery.

---

## 6. Analytics e Data Streaming {#analytics-e-data-streaming}

Monitore os principais indicadores de acesso ao seu conteúdo e aplicações através dos produtos:

*   [Analytics]({% tl  documentation_products_real_time_analytics %})
*   [Data Streaming]({% tl documentation_products_data_streaming %})
*   [Rawlogs]({% tl documentation_products_content_delivery_rawlogs %})

---

*   [Single Origin]({% tl documentation_products_content_delivery_single_origin %})
*   [Rawlogs]({% tl documentation_products_content_delivery_rawlogs %})
*   [Rules Engine]({% tl documentation_products_content_delivery_rules_engine %})

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
