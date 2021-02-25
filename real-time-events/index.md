

# Real-Time **Events**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/real-time-events/index.md)



Real-Time Events is an Edge Analytics module that allows you to display data from your Azion Products and Services in real time.

You can use Real-Time Events to perform complex searches and explore data from your Azion applications.

To access Real-Time Events, open [Real-Time Manager](https://manager.azion.com/). Click on the top left menu  and select on *Real-Time Events*. You will find the following fields:

> 1. [Data Sources](#DataSources)
> 2. [Time Filter](#TimeFilter)
> 3. [Search](#Search)
> 4. [Refresh](#Refresh)

---

## 1. Data Sources {#DataSources}

The first step  to explore your data is choosing the Data Source, which represents the Azion product or service that generated the events.

When submitting a search, the Data Source represents the index from where you want to collect data.

Azion provides the following Data Sources:

#### *Edge Applications*

It displays the data of requests made to your Edge Applications at Azion.

| Variables                            | Description                                                  |
| ------------------------------------ | ------------------------------------------------------------ |
| **$bytes_sent**                      | Bytes sent to the user, including header and body.           |
| **$client**                          | Unique Azion customer identifier.                            |
| **$country_name**                    | Country name of the remote client, for example “Russian Federation”, “United States”. Geolocation detection of IP address. |
| **$host**                            | Host information sent on the request line; or HTTP header Host field. |
| **$http_referrer**                   | Information from the last page the user was on before making the request. |
| **$http_user_agent**                 | The identification of the application that made the request, for example: Mozilla/5.0 (Windows NT 10.0; Win64; x64). |
| **$remote_addr**                     | IP address of the request.                                   |
| **$remote_port**                     | Remote port of the request.                                  |
| **$request_length**                  | Request size, including request line, headers and body.      |
| **$request_method**                  | Request method; usually “GET” or “POST”.                     |
| **$request_time**                    | Request processing time with resolution in milliseconds.     |
| **$request_uri**                     | URI of the request made by the user, without the Host and Protocol information. |
| **$requestPath**                     | The request URI without Query String, Host and Protocol information. |
| **$requestQuery**                    | Only the URI parameters of the request.                      |
| **$scheme**                          | Request scheme “http” or “https".                            |
| **$sent_http_content_type**          | “Content-Type” header sent in the origin’s response.         |
| **$sent_http_x_original_image_size** | “X-Original-Image-Size” header sent in the origin’s response (used by IMS to inform original image size). |
| **$server_protocol**                 | The protocol of the connection established, usually “HTTP/1.1” or “HTTP/2.0”. |
| **$ssl_cipher**                      | Cipher string used to establish SSL connection.              |
| **$ssl_protocol**                    | The protocol for an established SSL connection, for example “TLS v1.2”. |
| **$state**                           | Name of the remote client’s state, for example: “RS”, “SP”. <br/>Geolocation detection of IP address. |
| **$status**                          | The status code of the request, for example: 200.            |
| **$tcpinfo_rtt**                     | The RTT time in microseconds measured by Edge for the user.  |
| **$time**                            | Request date and time.                                       |
| **$upstream_bytes_received**         | Number of bytes received by the origin’s Edge, if the content is not cached. |
| **$upstream_cache_status**           | Status of the Edge cache. It can assume the values “MISS”, “BYPASS”, “EXPIRED”, “STALE”, “UPDATING”, “REVALIDATED” or “HIT”. |
| **$upstream_connect_time**           | Time in milliseconds for Edge to establish a connection with the origin (“0” in case of KeepAlive and “-“ in case of cache). |
| **$upstream_response_time**          | Time in milliseconds for Edge to receive all of the response from the origin, including headers and body (“-“ in case of cache). |
| **$upstream_status**                 | HTTP Status Code of the origin (“-“ in case of cache).       |
| **$version**                         | The version of Azion Log used.                               |
| **$waf_attack_action**               | It reports WAF’s action regarding the action ($BLOCK, $PASS, $LEARNING_BLOCK, $LEARNING_PASS). |
| **$waf_attack_family**               | It informs the classification of the WAF infraction detected in the request (SQL, XSS, TRAVERSAL, among others). |

#### *Data Streaming*

If you have contracted the [Data Streaming](https://www.azion.com/pt-br/docs/produtos/data-streaming/) product, this data source will display the event records of sending the data to your endpoints.

| Variable            | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| **$client_id**      | Unique Azion customer identifier.                            |
| **$endpoint**       | Endpoint used to send data.                                  |
| **$endpoint_type**  | Endpoint type configured for sending data, such as: HTTP / HTTPS Post, Kafka, S3, etc. |
| **$status**         | The status code of the request, for example: 200.            |
| **$streamed_bytes** | Total amount of data in bytes sent to the selected endpoint. |
| **$timestamp**      | Date and time when the data is sent to the configured endpoint. |
| **$version**        | The version of Azion Log used.                               |

#### *Edge Pulse*

 If you are using the Azion Pulse in your Edge Applications, the Edge Pulse data source will display the performance data measured from the user's browser (RUM).

| Variable                        | Description                                                  |
| ------------------------------- | ------------------------------------------------------------ |
| **$hostname**                   | Hostname of the current URL.                                 |
| **$locationHref**               | It returns the complete URL of the current page.             |
| **$navigation.contentDownload** | Time used to download the content.                           |
| **$navigation.dns**             | DNS resolution time.                                         |
| **$navigation.networkDuration** | Duration without query browser waiting.                      |
| **$navigation.PageLoadTime**    | Time from the start of navigation to the full page load.     |
| **$navigation.redirectCount**   | It returns the number of redirects since the last navigation without redirection in the context of the current navigation. |
| **$navigation.renderTime**      | Time the browser was rendered after browsing.                |
| **$navigation.ssl**             | Standard protocol used to maintain a secure traffic connection. |
| **$navigation.tcp**             | Internet protocol that returns the data that makes up the page. |
| **$navigation.ttfb**            | Time until the arrival of the first byte of the requested page. |
| **$navigation.type**            | It returns the type of navigation without redirection.       |
| **$navigation.typeBackForward** | Type of navigation through the session history.              |
| **$navigation.typeNavigate**    | It returns the type of the last navigation without redirection, for example: by clicking on a link, entering the URL in the address bar or submitting a form. |
| **$navigation.typeReload**      | Type of navigation for the reload operation, that is, when the page was reloaded. |
| **$navigation.typeReserved**    | Any type of navigation not defined by those previously mentioned (typeNavigate, typeReload). |
| **$networkApi.downlink**        | It returns the average volume of data received (Mb/s).       |
| **$platform**                   | Operating system architecture (for example Linux x86_64, Iphone, etc). |
| **$referrer**                   | It returns the previous url to the current page. That is, the url by which the user arrived at “locationHref”. If the access originated directly from the current page (not through a link, but for example, through a bookmark), its value will be an empty string. It does not provide DOM access to the reference page. |
| **$timestamp**                  | Request date and time.                                       |
| **$userAgent**                  | It identifies the client UA browser.                         |
| **$version**                    | The version of Azion Log used.                               |

#### *WAF*

If you have contracted the [Web Application Firewall](https://www.azion.com/pt-br/docs/produtos/web-application-firewall/) product, the WAF Events data source will display the requests analyzed by WAF to allow you to map the score assigned to the request, the WAF rules that matched, the reason for the block and more.

| Variable                 | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| **$attack_family**       | It tells you the attack families, categories where our Web Application Firewall identifies the attack and classifies it according to the OWASP Top 10. |
| **$blocked**             | It informs whether the WAF blocked the action or not; 0 when not blocked and 1 when blocked. When in “Learning Mode”, it will not be blocked, regardless of the return. |
| **$client_id**           | Unique Azion customer identifier.                            |
| **$geoloc_country_name** | Name of the remote client's country, for example "Russian Federation", "United States". <br/>Detection by IP address geolocation. |
| **$headers**             | Request headers analyzed by WAF.                             |
| **$host**                | Host information sent on the request line; or Host field of the HTTP header. |
| **$remote_address**      | IP address of the request.                                   |
| **$server_protocol**     | The protocol of the connection established, usually “HTTP/1.1” or “HTTP/2.0”. |
| **$timestamp**           | Request date and time.                                       |
| **$total_blocked**       | It informs the total number of blocked requests.             |
| **$total_processed**     | It informs the total number of processed requests..          |
| **$version**             | The version of Azion Log used.                               |
| **$waf_action**          | It reports WAF’s action regarding the action ($BLOCK, $PASS, $LEARNING_BLOCK, $LEARNING_PASS). |
| **$waf_args**            | The request arguments.                                       |
| **$waf_learning**        | It informs if WAF is in learning mode, usually 0 or 1.       |
| **$waf_match**           | List of infractions found in the request, it is formed by key-value elements; the key refers to the type of violation detected; the value shows the string that generated the infraction. |
| **$waf_score**           | It reports the score that will be increased in case of match. |
| **$waf_server**          | Hostname used in the request.                                |
| **$waf_uri**             | URI used in the request.                                     |

---

## 2. Time Filter {#TimeFilter}

Real-Time Events keeps the events from the last 3 days. The Time Filter allows you to refine the event search result, and is selected by default for Last 15 minutes, but you can change the scope of the search  by selecting:

* Last 15 minutes
* Last 30 minutes
* Last 1 hour
* Last 3 hours
* Last 6 hours
* Last 12 hours
* Last day
* Last 2 days
* Last 3 days

---

## 3. Search {#Search}

In the Search field, you can optionally filter your search results by a keyword or phrase.

When submitting a search with the Search field blank, you will get all existing records in the Data Origin, for the selected time filter.

Records are indexed as key: value. If you use only one keyword, such as www, you will filter all records that have that keyword as the value of any field.

You can also restrict the search to a particular field, using the notation: *key:value*, such as *status:200*. In this case, you will filter only the records which have a value specified for this key.

You may search for more complex field compositions. Use the notations AND and OR, in the search field to combine the fields, such as 'status:200 AND scheme:https'. 

---

## 4. Refresh {#Refresh}

The search always returns the results ordered by the time of the event, from the most recent to the oldest.

You can use the Refresh button to update the returned data, repeating the last search performed.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
