# Analytics

Para utilizar o Analytics você deve acessar o [Real-Time Manager](https://manager.azion.com/) e clicar em **Control your traffic**.

A tela do Analytics possui algumas regiões para que possa ser feito alguns filtros, tais como:

*   Área para Filtrar o Intervalo de Dados: Onde você pode selecionar o período que gostaria que fosse exibido.
*   Área de Dados: Onde são exibidos os gráficos com os dados solicitados.


> 1.  [Filtrar Intervalo de dados](#FiltrarIntevaloDados)
> 2.  [Export to CSV](#ExportCSV)
> 3.  [Como Interpretar os Gráficos](#ComoInterpretarGraficos)
> 4.  [Data Transferred](#DataTransferred)
> 5.  [Requests](#Requestss)
> 6.  [Status Codes](#StatusCodes)
> 7.  [HTTP Methods](#HTTPMethods)
> 8.  [Connections](#LiveStreamingConnections)
> 9.  [Storage](#cloudstorage)
> 10. [WAF](#WebApplicationFirewall)

---

## 1. Filtrar Intervalo de Dados {#FiltrarIntevaloDados}

Todas as opções de gráficos de produtos no Analytics possuem o Filtro de Intervalo de Dados.

Os gráficos são atualizados e apresentam as informações conforme os critérios selecionados no filtro.

---

## 2. Export to CSV (Exportando para CSV) {#ExportCSV}

Após aplicar os filtros, você pode exportar as informações para um arquivo CSV, para realizar esta ação, clique no ícone CSV ao lado do gráfico desejado.

---

## 3. Como Interpretar os Gráficos {#ComoInterpretarGraficos}

As informações são apresentadas conforme a solução e o intervalo de tempo selecionados nos filtros, os gráficos apresentados estão agrupados em:

---

## 4. Data Transferred (Dados Transferidos) {#DataTransferred}

Esta guia apresenta gráficos com as informações referentes ao volume de dados transferidos pela solução que você selecionou, esta aba apresenta 4 gráficos referentes ao volume de dados trafegados na solução e no período selecionado, como segue:

**Total Data (Total de Dados)**: Este gráfico apresenta o somatório (Saved Data + Missed Data) do volume de dados trafegados na solução e no período selecionado, passe o mouse sobre o gráfico para visualizar o valor exato trafegada no período.

Os valores exibidos no rodapé do gráfico são os somatórios do volume no intervalo.

**Data Offloaded (Dados Entregues)**: Este gráfico apresenta o percentual do volume de dados que foram entregues pela solução da Azion, ou seja, é a representação do gráfico Saved Data só que em percentuais, passe o mouse sobre o gráfico para visualizar o percentual exato no intervalo selecionado.

Os valores exibidos no rodapé do gráfico são as médias no intervalo.

**Saved Data (Dados Entregues pelo Cache)**: Este gráfico apresenta o volume de dados que foram entregues pelos servidores da Azion, ou seja, sem buscar o conteúdo no servidor de origem, passe o mouse sobre o gráfico para visualizar o valor exato do período.

Os valores exibidos no rodapé são os somatórios do volume do intervalo.

**Missed Data (Datos Entregues pela Origem)**: Este gráfico apresenta o volume de dados que foram entregues pelo servidor de origem, ou seja, a solicitação foi feita aos servidores da Azion, mas o conteúdo não havia sido transferido da origem para eles. No momento que o servidor de origem atende a solicitação, ele também envia para os servidores da Azion o conteúdo.

Os valores exibidos no rodapé do gráfico são os somatórios do volume no intervalo.

Bandwitdh Usage (Utilização de Banda)

**Total Bandwidth Usage (Total de Banda Utilizada)**: Quantidade de Mbps utilizados da banda.

No rodapé do gráfico mostra a média da banda utilizada no intervalo.

**Bandwidth Offload**: Percentual de banda que foi descarregado.

No rodapé do gráfico é exibida a média da banda utilizada no intervalo.

**Saved Bandwidth**: Quantidade de Mbps da banda que foi entregue pela CDN sem precisar buscar o conteúdo no servidor de origem.

No rodapé do gráfico é exibida a média da banda utilizada no intervalo.

**Missed Bandwidth**: Quantidade de Mbps da banda, até o servidor de origem do conteúdo.

---

## 5. Requests (Solicitações) {#Requestss}

**Total de Requests**: Quantidade de solicitações de clientes ao conteúdo. No rodapé do gráfico mostra o somatório de solicitações do intervalo.

**Saved Requests**: Quantidade de solicitações que foram entregues pelos servidores da Azion, ou seja, sem buscar o conteúdo no servidor de origem. No rodapé do gráfico temos o total de solicitações entregues no intervalo.

**Missed Requests**: Quantidade de solicitações que foram entregues pelo servidor de origem, ou seja, a solicitação foi feita aos servidores da Azion, mas o conteúdo não havia sido transferido da origem para eles. No rodapé do gráfico temos o total de solicitações para a origem no intervalo.

Requests per Second (Solicitações por Segundo)

**Total Requests per Second**: Quantidade de solicitações de clientes ao conteúdo por segundo. No rodapé do gráfico temos a média de solicitações por segundo no intervalo.

**Requests per Second Offloaded**: Percentual por segundo de solicitações que foram entregues pelos servidores da Azion, ou seja, sem buscar o conteúdo no servidor de origem. No rodapé temos a média no intervalo.

**Saved Requests per Second**: Quantidade de solicitações por segundo que foram entregues pelos servidores da Azion, ou seja, sem buscar o conteúdo no servidor de origem. No rodapé do gráfico temos a média de solicitações entregues no intervalo.

**Missed Requests per Second**: Quantidade de solicitações por segundo que foram entregues pelo servidor de origem, ou seja, a solicitação foi feita aos servidores da Azion, mas o conteúdo não havia sido transferido da origem para eles. No rodapé do gráfico é exibido a média de solicitações por segundo no intervalo.

---

## 6. Status Codes {#StatusCodes}

Esta guia apresenta os gráficos com as informações referentes aos códigos de Status de entrega de conteúdo. Uma excelente documentação para aprofundar o conhecimento sobre HTTP Status Codes pode ser encontrada neste link: [List of HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) . Disponível apenas no Analytics Premium.

**HTTP Status Codes 2xx**: Essa classe de status indica que a requisição do usuário foi recebida, entendida, aceita e processada pelo servidor.

| Código | Descrição |
|--------|---------- |
| 200    | **OK**: Status padrão de uma requisição HTTP bem sucedida. Significa que o conteúdo foi entregue para o usuário corretamente. |
| 204    | **No Content**: Significa que o servidor completou a requisição mas não havia nenhum conteúdo a ser entregue. |
| 206    | **Parcial Content**: O servidor está entregando somente parte do conteúdo pois ele foi dividido em partes. |
| 2xx    | **Outros Status**: Aqui podem constar outros tipos de Status de requisições que também foram atendidas mas que não são muito comuns. |


**HTTP Status Codes 3xx**: Essa classe de status indica que a requisição do usuário foi redirecionada e precisa mais um passo para ser entregue.

| Código | Descrição |
|--------|-----------|
| 301    | **Moved Permanently**: Essa e todas as requisições futuras serão redirecionadas para outra URL. |
| 302    | **Found**: Essa requisição foi temporariamente redirecionada para outra URL. |
| 304    | **Not Modified**: É identificado pelo Header do conteúdo que ele ainda não foi modificado e não precisa ser requisitado novamente. Pode-se entregar o arquivo existente no Browser do usuário. |
| 3xx    | **Redirection**: Aqui podem constar outros tipos de Status de requisições que também foram redirecionadas mas que não são muito comuns. |




**HTTP Status Codes 4xx**: Essa classe de status indica que ocorreu um erro na requisição do usuário:


| Código | Descrição |
|--------|-----------|
| 400    | **Bad request**: O servidor não pode processar a requisição, geralmente por algum erro no formato da requisição. |
| 403    | **Forbidden**: A requisição é válida mas não foi autorizada no servidor, significa que o usuário ou o IP que está fazendo a requisição não é autorizado para tal. |
| 404    | **Not Found**: O arquivo ao qual a requisição solicitou não existe na origem. |
| 4xx    | **Client Error**: Aqui podem constar outros tipos de Status de requisições que também geraram erros mas que não são muito comuns. |



**HTTP Status Codes 5xx**: Essa classe de status indica que o servidor falhou ao tentar entregar uma requisição aparentemente válida.

| Código | Descrição |
|--------|-----------|
| 500    | **Internal Server Error**: É uma mensagem genérica que é dada quando há um erro inesperado no servidor não conseguindo tratar a requisição. |
| 502    | **Bad Gateway**: Quando o servidor está servindo como Gateway ou Proxy e recebe uma resposta inválida da origem. Geralmente ocorre quando a origem está fora. |
| 503    | **Service Unavailable**: Servidor não está disponível. Geralmente um Status temporário. |
| 5xx    | **Server Error**: Aqui podem constar outros tipos de Status de requisições que também geraram erros mas que não são muito comuns. |


---

## 7. HTTP Methods {#HTTPMethods}

Esse gráfico mostra as requisições para o seu site segregadas por método HTTP utilizado. Para informações mais aprofundadas sobre métodos HTTP pode-se ler neste link: [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) . Gráfico disponível apenas no produto Analytics Premium.


| Método | Descrição |
|--------|-----------|
| GET    | Esse método de requisição só recebe dados do servidor. |
| POST   | Esse método de requisição envia dado para o servidor. |
| HEAD   | Esse método de requisição é igual a um GET, mas não recebe o corpo do HTML, somente o cabeçalho. |
| OTHERS | Outros métodos de requisição que não são tão comuns, são agrupados neste tipo. |



---

## 8. Connections {#LiveStreamingConnections}

Esta aba está disponível quando a solução _Live Streaming_ é selecionada. Ela apresenta as informações referentes ao número de usuários conectados aos streams da sua empresa.

**Average Connected Users**: Média de usuários conectados no Stream selecionado. No rodapé do gráfico é exibido a média de usuários conectados no intervalo.

**Max Connected Users**: Máximo de usuários conectados no Stream selecionado. No rodapé do gráfico é exibido o número máximo de usuários conectados no intervalo.

---

## 9. Storage (Dados Armazenados) {#cloudstorage}

Esta guia apresenta gráficos com as informações referentes ao do produto Cloud Storage.

**Used Space**: Quantidade de informação armazenada pela sua empresa ao longo do tempo. No rodapé do gráfico é exibido o máximo de utilização do storage no intervalo.

---

## 10. Web Application Firewall (WAF) {#WebApplicationFirewall}

Para os clientes que possuem o produto Web Application Firewall há um gráfico específico para mostrar os comportamentos das requests.

**Threats vs Requests**: Esse gráfico apresenta a média de ataques bloqueados no período selecionado.

**Cross-Site Scripting (XSS) Threats**: Esse gráfico representa a média de ataques do tipo Cross-Site Scripting, um tipo de vulnerabilidade tipicamente encontrado em web applications, que permite ao atacante inserir no lado do cliente scripts em uma página da web vista por outros usuários.

**Remote File Inclusion (RFI) Threats**: Esse gráfico representa a média de ataques do tipo Remote File Inclusion, um tipo de vulnerabilidade tipicamente encontrado em websites. Permite ao atacante incluir um arquivo no web server.

**SQL Injection Threats**: Esse gráfico representa a média de ataques do tipo SQL Injection, uma técnica de inserção de códigos usada para atacar data-driven applications.

**Other Threats**: Esse gráfico apresenta a média de ataques bloqueados pelo WAF e que não estão separados pelas classificações de ataques acima.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.