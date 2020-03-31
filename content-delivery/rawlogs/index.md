# Rawlogs

Você pode ter acesso aos logs de todas as requisições de seus usuários que passaram pela Azion por meio do produto Rawlogs.

O log de acesso (access_log) traz informações que lhe permitirão conduzir auditorias, _troubleshooting_, análise de performance ou _data mining_.

> 1. [Como funciona](#como-funciona)
> 2. [Formato do log](#formato-do-log)
> 3. [Como configurar](#como-configurar)

---

## 1. Como funciona {#como-funciona}

Ao configurar o Rawlogs, os Edge Servers da Azion passam a coletar logs de acesso de seus usuários, que são consolidados de hora em hora e disponibilizados para download. Você pode transferir os arquivos de log para a sua estação de trabalho usando FTP.

Os arquivos de log são armazenados em formato texto comprimido (gzip), divididos por dia e utilizam o horário UTC (3 horas a frente do horário de Brasília).

Após 45 dias, os logs mais antigos são removidos do Cloud Storage e não poderão ser recuperados. Você deve estabelecer uma rotina de transferência dos arquivos para um local de armazenamento permanente, se desejar manter os arquivos por mais tempo.

---

## 2. Formato do log {#formato-do-log}

O log é gravado em formato texto, com os campos separados pelo caracter tab (\t). Os seguintes campos são coletados:

~~~
v5\t$time_iso8601\t$clientid\t$virtualhostid\t$configuration_id\t$solution\t$solution_id\t$host\t$request_time\t$request_method\t$upstream_cache_status\t $status\t$proxy_status\t$upstream_status\t$upstream_bytes_received\t$scheme\t$request_uri\t$sessionid\t$streamname\t$sent_http_content_type\t$server_protocol\t$request_length\t$bytes_sent\t $upstream_connect_time\t$upstream_header_time\t$upstream_response_time\t$tcpinfo_rtt\t$remote_addr\t$remote_port\t$waf_attack_family\t$waf_attack_action\t$waf_country_name\t$waf_region_name\t $ssl_protocol\t$ssl_cipher\t$ssl_session_reused\t$http_user_agent\t$http_referer\t$reference_error\t$sent_http_x_original_image_size
~~~

---

## 3. Como configurar {#como-configurar}

Para configurar o Rawlogs, você precisa solicitar a ativação do produto para a Azion. Serão fornecidos o usuário e a senha para que você possa baixar seus logs de um FTP Server da Azion.

O Rawlogs não tem custo adicional, mas você poderá ser tarifado pelo volume ocupado por seus logs na área de transferência da Azion.

Após a confirmação de que o produto está provisionado para a sua conta, basta seguir os passos que seguem para configurá-lo.

1. Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Content Delivery.
2. Edite a configuração de Content Delivery para a qual deseja habilitar o Rawlogs.
3. Marque a opção _Store Raw Logs_ na aba Main Settings e salve a configuração.

A partir desse momento, os logs de acesso passarão a ser coletados e armazenados na área de transferência criada para você, seguindo a nomenclatura de arquivos _yyyymmdd-v5.log.gz_, como no exemplo que segue:

~~~
-rw-r--r-- 1 storage storage 54M Set 2 12:22 2016100212-v5.log.gz -rw-r--r-- 1 storage storage 66M Set 2 13:23 2016100213-v5.log.gz -rw-r--r-- 1 storage storage 79M Set 2 14:26 2016100214-v5.log.gz -rw-r--r-- 1 storage storage 83M Set 2 15:25 2016100215-v5.log.gz -rw-r--r-- 1 storage storage 78M Set 2 16:26 2016100216-v5.log.gz -rw-r--r-- 1 storage storage 83M Set 2 17:21 2016100217-v5.log.gz -rw-r--r-- 1 storage storage 91M Set 2 18:22 2016100218-v5.log.gz -rw-r--r-- 1 storage storage 96M Set 2 19:27 2016100219-v5.log.gz -rw-r--r-- 1 storage storage 94M Set 2 20:26 2016100220-v5.log.gz -rw-r--r-- 1 storage storage 91M Set 2 21:20 2016100221-v5.log.gz -rw-r--r-- 1 storage storage 90M Set 2 22:23 2016100222-v5.log.gz -rw-r--r-- 1 storage storage 101M Set 2 23:24 2016100223-v5.log.gz -rw-r--r-- 1 storage storage 100M Set 3 00:23 2016070300-v5.log.gz -rw-r--r-- 1 storage storage 105M Set 3 01:24 2016070301-v5.log.gz -rw-r--r-- 1 storage storage 85M Set 3 02:23 2016070302-v5.log.gz -rw-r--r-- 1 storage storage 88M Set 3 03:20 2016070303-v5.log.gz -rw-r--r-- 1 storage storage 82M Set 3 04:18 2016070304-v5.log.gz -rw-r--r-- 1 storage storage 54M Set 3 05:17 2016070305-v5.log.gz -rw-r--r-- 1 storage storage 27M Set 3 06:21 2016070306-v5.log.gz -rw-r--r-- 1 storage storage 17M Set 3 07:20 2016070307-v5.log.gz -rw-r--r-- 1 storage storage 15M Set 3 08:20 2016070308-v5.log.gz -rw-r--r-- 1 storage storage 18M Set 3 09:20 2016070309-v5.log.gz -rw-r--r-- 1 storage storage 24M Set 3 10:21 2016070310-v5.log.gz -rw-r--r-- 1 storage storage 35M Set 3 11:22 2016070311-v5.log.gz -rw-r--r-- 1 storage storage 55M Set 3 12:23 2016070312-v5.log.gz -rw-r--r-- 1 storage storage 66M Set 3 13:23 2016070313-v5.log.gz -rw-r--r-- 1 storage storage 77M Set 3 14:28 2016070314-v5.log.gz -rw-r--r-- 1 storage storage 84M Set 3 15:44 2016070315-v5.log.gz -rw-r--r-- 1 storage storage 83M Set 3 16:48 2016070316-v5.log.gz -rw-r--r-- 1 storage storage 30M Set 3 17:18 2016070317-v5.log.gz -rw-r--r-- 1 storage storage 90M Set 3 18:18 2016070318-v5.log.gz -rw-r--r-- 1 storage storage 60M Set 3 19:13 2016070319-v5.log.gz 
~~~

Use qualquer cliente de FTP para baixar os arquivos, utilizando as credenciais enviadas pela Azion durante a criação de sua conta.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/content-delivery/rawlogs/index.md) on GitHub.