# Real-Time **Events**

Real-Time Events é um módulo do Edge Orchestration que permite que você visualize dados de seus Produtos e Serviços Azion em tempo real.

Você pode utilizar o Real-Time Events para realizar buscas complexas e explorar os dados de suas aplicações na Azion, que estão organizados em Data Sources.

> 1. [Data Sources](#DataSources)
> 2. [Time Filter](#TimeFilter)
> 3. [Search](#Search)
> 4. [Refresh](#Refresh)

---

## 1. Data Sources {#DataSources}

A primeira etapa para você explorar seus dados é a escolha do Data Source, que representa o Produto ou Serviço Azion que gerou os eventos.

Para submeter sua requisição de busca, você deve selecionar o Data Source de onde deseja coletar os eventos.

A Azion disponibiliza os seguintes Data Sources:

*   **Edge Application Logs:** apresenta os dados de requisições realizadas a seus Edge Applications na Azion.
*   **WAF Events:** caso tenha contratado o produto [Web Application Firewall]({% tl  documentation_products_web_application_firewall %}), o data source WAF Events apresentará as requisições analisadas pelo WAF para permitir que você mapeie o score atribuído a requisição, as regras de WAF que deram match, o motivo do bloqueio e muito mais.
*   **Edge Pulse:** se você estiver utilizando a tag do Azion Pulse em suas Edge Applications, o data source Pulse Events apresentará os dados de performance mensurados a partir do browser do usuário.
*   **Data Streaming:** caso tenha contratado o produto [Data Streaming]({% tl  documentation_products_data_streaming %}), o data source Data Streaming apresentará os dados de depuração de envio ao Endpoint configurado.

---

## 2. Time Filter {#TimeFilter}

O Real-Time Events guarda para você os eventos das últimas 24 horas e você pode optar por filtrar apenas os eventos mais recentes. O Time Filter restringe o resultado da busca de eventos, e vem por padrão selecionado para _Last 15 minutes_, mas você pode alterar a abrangência da busca selecionando:

* Last 15 minutes
* Last 30 minutes
* Last 1 hour
* Last 3 hour
* Last 6 hour
* Last 12 hour
* Last day
* Last 2 days
* Last 3 days

---

## 3. Search {#Search}

No campo Search você pode, opcionalmente, filtrar os resultados de sua busca por uma palavra-chave ou expressão.

Ao submeter uma busca com o campo Search em branco, você irá obter todos os registros existentes no Data Source, para o filtro de tempo selecionado.

Os registros são indexados como chave:valor. Se você utilizar apenas uma palavra-chave, como por exemplo www, você irá filtrar todos os registros que possuem essa palavra-chave como valor de qualquer campo.

Você também pode restringir a busca a um determinado campo, utilizando a notação _chave:valor_, como por exemplo _status:200_. Nesse caso, você irá filtrar apenas os registros que possuem o valor especificado para essa chave.

Você pode fazer buscas mais complexas pela composição de campos. Utilize as notações AND e OR, no campo de busca para combinar campos, como por exemplo _status:200_ AND _scheme:https_.

---

## 4. Refresh {#Refresh}

A busca retorna sempre os resultados ordenados pelo horário de ocorrência do evento, do mais recente para o mais antigo.

Você pode utilizar o botão Refresh para atualizar os dados retornados, repetindo a última busca realizada.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.