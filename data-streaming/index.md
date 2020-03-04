# Data **Streaming**
    
Data Streaming é um produto de Edge Analytics que permite que você alimente suas plataformas de SIEM, big data e stream processing com dados de acesso ao seu conteúdo e aplicações, em tempo real, adicionando ainda mais inteligência ao seu negócio.

Essa integração permite que você analise o comportamento de seus usuários e da performance dos seus conteúdos, aplicações e troubleshooting, de forma simples e ágil.


  > 1. [Data Sources](#DataSources)
  > 2. [Template](#Template)
  > 3. [Domains](#Domains)
  > 4. [Endpoint](#Endpoint)


---

## 1. Data Sources {#DataSources}

A primeira etapa é a escolha do Data Source, que representa a aplicação na Azion que gerou os registros de eventos, para isso, você deve selecionar de onde seus dados serão coletados.


* **Edge Applications:** requisições de seus usuários a seus Edge Applications na Azion.
* **WAF Events:** se você tiver contratado o produto [Web Application Firewall]({%tl documentation_products_web_application_firewall %}), o data source WAF Events apresentará as requisições analisadas pelo WAF.

---

## 2. Template {#Template}

O template representa uma seleção de variáveis que devem ser coletadas e um formato para transferência. Você pode selecionar templates criados e mantidos pela Azion ou customizar sua própria seleção.

Quando selecionada a opção "Custom Template", é possível criar seu próprio Data Set personalizado, no formato JSON, e selecionar as variáveis mais adequadas às suas necessidades.

Consulte a documentação que segue para obter a descrição das variáveis disponíveis: [Fields]({%tl documentation_products_data_streaming_fields %}).

Seus eventos serão agrupados em blocos de até 2.000 registros separados pelo caracter \n, e enviados no payload para seu endpoint. O Data Streaming enviará seus eventos quando o bloco atingir 2000 registros ou a cada 60 segundos, o que ocorrer antes.

---

## 3. Domains {#Domains}

Você pode associar ao Data Streaming um ou mais de seus domínios cadastrados na Azion.

Ao associar um domínio ao Data Streaming, os eventos associados a esse domínio serão coletados e enviados para seu endpoint.

---

## 4. Endpoint {#Endpoint}

Endpoint é o destino para onde você deseja enviar os dados coletados pela Azion.

O tipo de endpoint representa o método que seu endpoint está configurado para receber os dados do Data Streaming.

**Standard HTTP/HTTPS POST**

A utilização deste tipo de endpoint, faz com que o serviço de Data Streaming envie os dados no payload de um POST HTTP, para o processamento em sua plataforma.

* **Endpoint URL** 

A URL configurada em sua plataforma para receber os dados do Data Streaming. Utilize o formato _scheme://domain/path_.

* **Custom Headers** 

Você pode informar um ou mais cabeçalhos customizados para a sua requisição HTTP/HTTPS. Para a configuração dos cabeçalhos, é necessário informar o Nome e o Valor para cada cabeçalho.

**Apache Kafka**

A utilização deste tipo de endpoint, faz com que o serviço de Data Streaming envie os dados para um endpoint Kafka em sua infraestrutura.

* **Bootstrap Servers** 

Os servers no cluster Kafka, no formato "host1:port1, host2:port2, ...". A lista não precisa conter todos os servidores de seu cluster, apenas alguns servidores que serão utilizados para a conexão inicial. Recomendamos que você utilize mais de um server para aumentar a redundância e disponibilidade.

* **Topic** 

Você precisa definir um Topic onde deseja que o Data Streaming publique as mensagens em seu cluster.

**Simple Storage Service (S3)**

A utilização deste tipo de endpoint, faz com que o serviço de Data Streaming envie os dados diretamente para qualquer storage que trabalhe com o protocolo S3, como por exemplo Amazon S3, Cloud Storage, entre outros.

* **Host URL** 

A URL do seu Host S3. Você pode conectar com qualquer provedor que trabalhe com o protocolo S3.

* **Bucket Name** 

O nome do Bucket que o objeto será enviado. É importante que o Bucket já esteja criado para que o Data Streaming possa enviar os objetos.

* **Region** 

A região a qual o Bucket está hospedado. Por exemplo, "us-east-1".

* **Access Key** 

O chave para acesso ao Bucket.

* **Secret Key** 

O segredo da chave para acessar ao Bucket.

* **Object Key Prefix** 

Um prefixo para os arquivos enviados. Por exemplo "waf_logs", então todos os objetos enviados serão salvos com "waf_logs_&lt;TIMESTAMP&gt;_&lt;UUID&gt;".

* **Content Type** 

O formato que o objeto será criado no Bucket. Tendo "plain/text" e "application/gzip" como opções.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.
