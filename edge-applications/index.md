# Edge **Application**

O Azion Edge Application permite que você construa suas aplicações web para serem executadas na plataforma de Edge Computing da Azion.

Você pode utilizar as funcionalidades de Edge Caching, Edge Functions e Network para construir aplicações web mais robustas, capazes de atender a grandes picos de acesso com melhor performance e segurança para seus usuários.

> 1. [Como funciona?](#como-funciona)
> 2. [Edge Caching](#caching-cdn)
> 3. [Minimum TLS Version](#minimum-tls-version)
> 3. [Edge Application Modules](#edge-application-modules)
> 4. [Documentações de suporte](#documentacoes-de-suporte)

---

## 1. Como funciona? {#como-funciona}

A Azion trabalha com uma arquitetura de proxy reverso, através da qual seus usuários se conectam nos Edge Nodes de nossa rede global altamente distribuída, que poderá realizar _caching_ de seu conteúdo ou mesmo executar funções de sua aplicação, além de contar com um amplo arsenal para otimização.

Quando um usuário requisita um conteúdo na internet, seu navegador ou aplicativo inicia pela resolução de DNS para traduzir o domínio solicitado para um endereço IP. Ao utilizar a Azion, você irá configurar o DNS de sua aplicação web para apontar para um endereço gerado ao criar um Domain na Azion.

A Azion seleciona, através de seu SDN Router, o Edge Node mais próximo do usuário, reduzindo latência e aumentando a velocidade da transferência do conteúdo.

Nessa arquitetura, seu conteúdo ou aplicação web precisa ser disponibilizado a partir de uma origem, que pode ser um ou mais web servers em sua infraestrutura, um serviço na cloud ou um dos Origin Services da Azion.

---

## 2. Edge Caching {#caching-cdn}

A rede global altamente distribuída da Azion permite que você entregue seu conteúdo com muito mais eficiência. O conteúdo que estiver em cache (_cache hit_) nos Edge Nodes da Azion pode ser entregue diretamente para seus usuários, a partir do Edge Node mais próximo, sem necessidade de acessar sua origem. Além de aumentar o desempenho e escalabilidade para seu conteúdo, você poderá economizar em sua infraestrutura de origem.

Um _cache miss_ ocorre quando um conteúdo é solicitado e não está cacheado. A Azion minimiza o efeito do _cache miss_, ao manter uma conexão keepalive com sua origem, sempre que possível, evitando o overhead do handshake TCP/IP. Independente do volume de requisições simultâneas realizadas aos Edge Nodes da Azion, cada Edge Node buscará o conteúdo em sua origem apenas uma vez por _cache miss_, o que reduz substancialmente o impacto em sua infraestrutura.

---

## 3. Minimum TLS version {#minimum-tls-version}

O protocolo TLS (_Transport Layer Security_) permite você criptografar o tráfego da web. Atualmente o protocolo disponibiliza algumas versões que podem ser utilizadas, como: TLS 1.0 (Deprecated), 1.1 (Deprecated), 1.2 e 1.3.

Você poderá escolher a versão mínima de TLS que será suportada para criptografar o tráfego.

~~~
Atenção: ao escolher versões recentes do protocolo, esteja ciente que alguns dispositivos ou navegadores antigos não conseguirão acessar a Edge Application.
~~~

Para utilizar a funcionalidade, siga as seguintes etapas:

1. Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu **Edge Services** e selecione **Edge Applications**.
2. Adicione ou edite uma **Edge Application**.
3. Para escolher a versão mínima do TLS é necessário que o **Delivery Protocol** na aba **Main Settings** seja **HTTP & HTTPS**.
4. Selecione a versão mínima do protocolo TLS que irá criptografar o tráfego.

~~~
Atenção: a funcionalidade Minimum TLS version está disponível apenas para clientes que se enquadram na Versão 3 da plataforma Azion.
~~~


---

## 4. Edge Application Modules {#edge-application-modules}

A Azion disponibiliza para você módulos de _network_, _compute_ e _security_ para que você possa construir web applications de alta performance, escalabilidade e segurança, com muito mais simplicidade e livre de tarefas operacionais. Consulte as documentações de cada produto:

*   [Application Acceleration]({% tl documentation_products_application_acceleration %})
*   [Edge Caching]({% tl documentation_products_application_acceleration %})
*   [Edge Functions]({% tl edge_services_compute_modules_edge_functions %})
*   [Image Processor]({% tl documentation_products_image_optimization %})
*   [Load Balancer]({% tl documentation_products_load_balancer %})

---

## 5. Documentações de suporte {#documentacoes-de-suporte}

[<svg width="20" xmlns="http://www.w3.org/2000/svg" class="icon icon-list" viewBox="0 0 60 60"><g stroke="#333" fill="#333" stroke-width="0"><g stroke="none"><path d="M42.5 22h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm-25-6h10a1 1 0 1 0 0-2h-10a1 1 0 1 0 0 2zm25 14h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm0 8h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm0 8h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2z"/><path d="M38.914 0H6.5v60h47V14.586L38.914 0zm.586 3.414L50.086 14H39.5V3.414zM8.5 58V2h29v14h14v42h-43z"/></g></g></svg> Real-Time Purge]({% tl documentation_products_edge_applications_real_time_purge %})

[<svg width="20" xmlns="http://www.w3.org/2000/svg" class="icon icon-list" viewBox="0 0 60 60"><g stroke="#333" fill="#333" stroke-width="0"><g stroke="none"><path d="M42.5 22h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm-25-6h10a1 1 0 1 0 0-2h-10a1 1 0 1 0 0 2zm25 14h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm0 8h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm0 8h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2z"/><path d="M38.914 0H6.5v60h47V14.586L38.914 0zm.586 3.414L50.086 14H39.5V3.414zM8.5 58V2h29v14h14v42h-43z"/></g></g></svg> Rules Engine]({% tl documentation_products_edge_applications_rules_engine %})

[<svg width="20" xmlns="http://www.w3.org/2000/svg" class="icon icon-list" viewBox="0 0 60 60"><g stroke="#333" fill="#333" stroke-width="0"><g stroke="none"><path d="M42.5 22h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm-25-6h10a1 1 0 1 0 0-2h-10a1 1 0 1 0 0 2zm25 14h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm0 8h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm0 8h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2z"/><path d="M38.914 0H6.5v60h47V14.586L38.914 0zm.586 3.414L50.086 14H39.5V3.414zM8.5 58V2h29v14h14v42h-43z"/></g></g></svg> Digital Certificates]({% tl documentation_products_edge_applications_digital_certificates %})

[<svg width="20" xmlns="http://www.w3.org/2000/svg" class="icon icon-list" viewBox="0 0 60 60"><g stroke="#333" fill="#333" stroke-width="0"><g stroke="none"><path d="M42.5 22h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm-25-6h10a1 1 0 1 0 0-2h-10a1 1 0 1 0 0 2zm25 14h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm0 8h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2zm0 8h-25a1 1 0 1 0 0 2h25a1 1 0 1 0 0-2z"/><path d="M38.914 0H6.5v60h47V14.586L38.914 0zm.586 3.414L50.086 14H39.5V3.414zM8.5 58V2h29v14h14v42h-43z"/></g></g></svg> Single Origin]({% tl documentation_products_content_delivery_single_origin %})

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.