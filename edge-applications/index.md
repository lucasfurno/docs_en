# Edge **Applications**

O Azion Edge Applications permite que você construa suas aplicações web para serem executadas na plataforma de edge computing da Azion.

Você pode utilizar as funcionalidades de cache (CDN), compute, network e security para construir aplicações web mais robustas, capazes de atender a grandes picos de acesso com melhor performance e segurança para seus usuários.

> 1. [Como funciona?](#como-funciona)
> 2. [Caching (CDN)](#caching-cdn)
> 3. [Edge Application Modules](#edge-application-modules)
> 4. [Documentações de suporte](#documentacoes-de-suporte)

---

## 1. Como funciona? {#como-funciona}

A Azion trabalha com uma arquitetura de proxy reverso, através da qual seus usuários se conectarão nos Intelligent Edges de nossa rede global altamente distribuída, que poderá realizar _caching_ de seu conteúdo ou mesmo executar funções de sua aplicação, além de contar com um amplo arsenal de optimizações e segurança.

Quando um usuário requisita um conteúdo na internet, seu navegador ou aplicativo inicia pela resolução de DNS para traduzir o domínio solicitado para um endereço IP. Ao utilizar a Azion, você irá configurar o DNS de sua aplicação web para apontar para um endereço gerado ao criar um Domain na Azion.

A Azion seleciona, através de seu SDN Router, a infraestrutura de Intelligent Edge mais próxima do usuário, reduzindo latência e aumentando a velocidade da transferência do conteúdo.

Nessa arquitetura, seu conteúdo ou aplicação web precisa ser disponibilizado a partir de uma origem, que pode ser um ou mais web servers em sua infraestrutura, um serviço na cloud ou um dos Origin Services da Azion.

---

## 2. Caching (CDN) {#caching-cdn}

A CDN da Azion viabiliza que você entregue seu conteúdo com muito mais eficiência. O conteúdo que estiver em cache (_cache hit_) nos Intelligent Edges da Azion pode ser entregue diretamente para seus usuários, a partir do ponto de presença mais próximo, sem necessidade de acessar sua origem. Além de aumentar o desempenho e escalabilidade para seu conteúdo, você poderá economizar em sua infraestrutura de origem.

Um _cache miss_ ocorre quando um conteúdo é solicitado e não está cacheado nos edges. A Azion minimiza o efeito do _cache miss_, ao manter uma conexão keepalive com sua origem, sempre que possível, evitando o overhead do handshake TCP/IP. Independente do volume de requisições simultâneas realizadas aos Intelligent Edges da Azion, cada edge buscará o conteúdo em sua origem apenas uma vez por _cache miss_, o que reduz substancialmente o impacto em sua infraestrutura.

---

## 3. Edge Application Modules {#edge-application-modules}

A Azion disponibiliza para você módulos de _network_, _compute_ e _security_ para que você possa construir web applications de alta performance, escalabilidade e segurança, com muito mais simplicidade e livre de tarefas operacionais. Consulte as documentações de cada produto:

*   [Application Acceleration]({% tl documentation_products_application_acceleration %})
*   Caching (CDN)
*   [Device Detection]({% tl documentation_products_adaptative_delivery %})
*   [Edge Firewall]({% tl documentation_products_edge_firewall %})
*   Edge Functions
*   [Image Optimization]({% tl documentation_products_image_optimization %})
*   [Load Balancer]({% tl documentation_products_load_balancer %})
*   [Raw Logs]({% tl documentation_products_content_delivery_rawlogs %})
*   [Web Application Firewall]({% tl documentation_products_web_application_firewall %})

---

## 4. Documentações de suporte {#documentacoes-de-suporte}

*   [Real-Time Purge]({% tl documentation_products_edge_applications_real_time_purge %})
*   [Rules Engine]({% tl documentation_products_edge_applications_rules_engine %})
*   [Digital Certificates]({% tl documentation_products_edge_applications_digital_certificates %})

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.