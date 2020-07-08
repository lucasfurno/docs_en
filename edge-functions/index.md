# Edge **Functions**

[Edite no GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-functions/index.md)

O Azion Edge Functions permite que você crie aplicações serverless orientadas a eventos, na edge da rede, mais perto dos usuários.

Com Edge Functions você pode executar funções serverless em resposta a eventos em Edge Nodes de nossa rede distribuída. Sem ter que provisionar ou gerenciar servidores. 

Você pode usar functions para manipular HTTP nas seguintes fases de Request e HTTP Response:

- Assim que a requisição de um usuário for recebida no Edge Node (Viewer Request)
- Antes que o Azion Edge Node encaminhe a requisição à Origin (Origin Request)
- Assim que  o Edge Node receber a resposta da Origin (Origin Response)
- Antes que o Azion Edge Node encaminhe a resposta para o usuário (Viewer Respnse)

Você pode também gerar *Responses* sem necessáriamente ter que encaminhar a requisição para a origem.

Com o uso de Edge Functions escritas em Lua e JavaScript na plataforma de Edge Computing da Azion, você poderá criar uma variedade de soluções, por exemplo:

- Inspecionar Cookies para Rewrite de URLs para diferentes versões de seu site em experimentos A/B Test.
- Enviar objetos diferentes para seus usuários baseado em User-Agent header, que contem informação sobre o device que enviou a Request. Por exemplo, você pode enviar imagens em diferentes resoluções baseado no dispositivo dos usuários.
- Inspecionar Headers e Authorized Tokens, inserindo Header e permitindo Access Controll antes de encaminhar a request à Origem.
- Adicionar, remover ou modificar cabeçalhos, e rewrite de path direcionando usuários para diferentes objetos em cache.
- Gerar HTTP responses para tarefas como redirecionar usuários não autenticados para páginas de login, ou criar e entregar webpages estáticas geradas diretamente na edge.

Veja mais formas de uso das Edge Functions em [Casos de Uso](https://www.azion.com/pt-br/documentacao/casos-de-uso/).

> 1. [Como funciona?](#como-funciona)
> 2. [Como utilizar?](#como-utilizar)
> 3. [Hands-on](#hands-on)
> 4. [Documentação de Suporte](#documentacao-de-suporte)

---

## 1. Como funciona? {#como-funciona}

Crie suas próprias funções personalizadas ou utilize alguma das já existentes disponibilizadas pela azion, tanto para Edge Application ou Edge Firewall. As linguagens suportadas atualmente pela plataforma são **Lua e JavaScript**.

Edge Functions executam no tratamento/atendimento da requisição, a plataforma de Edge provê um modelo de Rules Engine que pode ser usado para vincular a execução do código das Edge Functions de acordo com as fases de tratamento. 

O runtime específico de cada linguagem provê uma interface de programação para interagir e manipular os objetos de Request e Response para implementar a lógica necessária.

Ao instanciar uma Edge Function, você pode informar parâmetros que serão passados para a função, em formato [JSON](https://www.json.org/), através de argumentos, podendo ainda definir e executar testes on-line para validar sua construção.

Edge Functions são executadas diretamente na infraestrutura das Edges da Azion. Para utilizá-las, basta que estejam associadas a um Behavior no Rules Engine. Assim, quando uma requisição satisfazer os critérios definidos nas regras da Rule Engine, o *trigger* para execução da Edge Function será disparado.

---

## 2. Como utilizar? {#como-utilizar}

Crie suas próprias funções personalizadas ou utilize alguma das funções prontas para uso providas pela Azion ou Independent Software Vendors. Através do Real-Time Manager, em Libraries. Você pode criar Edge Functions e manter um repositório funções que poderão ser utilizadas em Edge Application ou Edge Firewall. Consulte a Runtime API de acordo com o Runtime escolhido para escrita da Edge Function.

### Criar Edge Functions

Utilize a Runtime API da linguagem de sua preferência para escrever Edge Functions.

Ao criar Edge Functions usando o *Runtime Enviroment* JavaScript, as Edge Functions escritas pelo próprio usuário entram direto em produção sem passar por uma revisão interna uma vez que o código é executado isoladamente e limitado a recursos isolados.

O código de Edge Functions escritas em Lua passa por uma revisão minuciosa de nossos engenheiros de software antes de entrar em produção. Nosso objetivo é garantir a segurança e uso correto da plataforma de Edge Computing, seu código poderá ser revisado em critérios como:

- Uso de variáveis globais que não são permitidas. Por conta do ambiente multi-tenant, o código da Edge Function Lua deve evitar uso de variáveis globais e shared memory
- Chamadas HTTP bloqueantes. Toda chamada a serviço externo deverá usar o protocolo HTTP por meio de APIs assíncronas para que o processo não seja bloqueado
- O Código ou Lib também deve passar nos testes luacheck.

Para mais detalhes de cada Runtime API e exemplos de código, consulte a documentação de [Runtime APIs](https://www.azion.com/pt-br/documentacao/produtos/edge-functions/runtime-apis/)

### Instanciar Edge Functions

Antes de associar um trigger de execução à Edge Function, ela deve ser instanciada, de acordo com o seu initiator type, em Edge Application ou Edge Firewall. Para isso, o módulo Edge Functions deve estar habilitado, então, através da aba **Functions** você poderá instanciar suas Edge Functions para posterior uso em uma Rule do Rules Engine.

Para saber mais sobre Edge Functions Instances acesse a documentação de [Edge Application](https://www.azion.com/pt-br/documentacao/produtos/edge-application/edge-functions-instances/) e [Edge Firewall](https://www.azion.com/pt-br/documentacao/produtos/edge-firewall/edge-functions-instances/)

### Métricas para Edge Functions

Através do Real-Time Metrics, fornecemos informações em tempo real sobre o desempenho das suas Edge Functions.

Para acessar os gráficos, siga as seguintes etapas:

1. Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu **Data Services** e selecione **Real-Time Metrics**, em seguida, clique em **Edge Functions**.
2. Visualize informações como, por exemplo, a quantidade de invocações por instância de Edge Function.

Leia mais sobre o [Real-Time Metrics](https://www.azion.com/pt-br/produtos/real-time-metrics/).

---

## 4. Hands-On Passo a passo para criar uma Edge Function 	{#hands-on}

Para que sua Edge Function entre efetivamente em producão basta escrever, instânciar e associar a um Behavior _Run Function_, em uma Rule no Rules Engine:

1. Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Libraries, selecione Edge Functions.

2. Adicione uma nova _edge function_ clicando no botão _Add Function_.

3. Em Language, selecione ***JavaScript***.

   ~~~
   let a = Math.floor(Math.random() * 10);
   if (a > 5) {
       const jso = JSON.parse('{ "flip a coin": "heads"}');
       AzionSetResponse(JSON.stringify(jso));
   } else {
       const jso = JSON.parse('{ "flip a coin": "tails" }');
       AzionSetResponse(JSON.stringify(jso));
   }
   ~~~

4. Acesse uma Edge Application e Habilite o Módulo Edge Functions, 

5. Na aba ***Rules Engine***, crie ou edite uma Rule e na seção ***Behavior***, no campo ***Then***,  selecione "Run Function" e associe a **Edge Function** desejada. 

6. Exemplo de Resposta ao executar o Behavior Run Function:

   ~~~
   {"flip a coin":"heads"}
   ~~~

7. Utilize o ***Real-Time Metrics*** para acompanhar métricas como, por exemplo, a quantidade de invocações de instâncias de Edge Functions.



---

## 4. Documentação de Suporte 	{#documentacao-de-suporte}

- Edge Application - Edge Functions Instances
- [Edge Application Rules Engine](https://www.azion.com/pt-br/documentacao/produtos/edge-application/rules-engine/)
- Edge Firewall - Edge Functions Instances
- [Edge Firewall Rules Engine](https://www.azion.com/pt-br/documentacao/produtos/edge-firewall/rules-engine/)

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

