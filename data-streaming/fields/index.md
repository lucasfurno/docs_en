# **Fields**

Azion provides a wide range of variables related to access to its contents and applications. You can feed your big data and stream processing platforms, selecting templates created and maintained by Azion, which have a collection of variables available; or customize your own Data Set in the [Data Streaming](https://www.azion.com/en/products/data-streaming/) product.

| Variable | Source of data | Description |
|----------|-----------------|-----------|
| $blocked                              | WAF                    | Informs whether the WAF blocked the action or not; 0 when not blocked and 1 when blocked. When in "Learning Mode", it will not be blocked, regardless of the return.                       |
| $bytes\_sent                          | Edge Applications      | Bytes sent to the user, including header and body.                                                                                                                          |
| $client                               | Edge Applications, WAF | Unique Azion customer identifier.                                                                                                                                                |
| $configuration                        | Edge Applications, WAF | Unique Azion configuration identifier.                                                                                                                                           |
| $country                              | Edge Applications, WAF | Country name of the remote client, for example "Russian Federation", "United States". Geolocation detection of IP address.                                                      |
| $headers                              | WAF                    | Request headers analyzed by WAF.                                                                                                                                        |
| $host                                 | Edge Applications, WAF | Host information sent on the request line; or Host field of the HTTP header.                                                                                                  |
| $http\_referrer                       | Edge Applications      | Information on the last page the user was on, before making the request.                                                                                                 |
| $http\_user\_agent                    | Edge Applications      | The identification of the application that made the request, for example: Mozilla/5.0 (Windows NT 10.0; Win64; x64).                                                                  |
| $remote\_addr                         | Edge Applications, WAF | IP address of the request.                                                                                                                                                           |
| $remote\_port                         | Edge Applications      | Remote port of the request.                                                                                                                                                          |
| $request\_length                      | Edge Applications      | Request size, including request line, headers and body.                                                                                                             |
| $request\_method                      | Edge Applications      | Request method; usually "GET" or "POST".                                                                                                                                    |
| $request\_time                        | Edge Applications      | Request processing time with resolution in milliseconds.                                                                                                                   |
| $request\_uri                         | Edge Applications      | URI of the request made by the user, without the Host and Protocol information.                                                                                                      |
| $requestPath                          | Edge Applications, WAF | The request URI without Query String, Host and Protocol information.                                                                                                               |
| $requestQuery                         | Edge Applications, WAF | Only the URI parameters of the request.                                                                                                                                          |
| $scheme                               | Edge Applications      | Request scheme "http" or "https.                                                                                                                                             |
| $sent\_http\_content\_type            | Edge Applications      | "Content-Type" header sent in the origin’s response.                                                                                                                             |
| $sent\_http\_x\_original\_image\_size | Edge Applications      | "X-Original-Image-Size" header sent in the origin’s response (used by IMS to inform original image size).                                                  |
| $server\_protocol                     | Edge Applications, WAF | The protocol of the connection established, usually "HTTP/1.1" or "HTTP/2.0".                                                                                                          |
| $ssl\_cipher                          | Edge Applications      | Cipher string used to establish SSL connection.                                                                                                                       |
| $ssl\_protocol                        | Edge Applications      | The protocol for an established SSL connection, for example "TLS v1.2".                                                                                                                |
| $state                                | Edge Applications      | Name of the remote client's state, e.g. "RS", "SP". Geolocation detection of IP address.                                                                               |
| $status                               | Edge Applications      | The status code of the request, for example: 200.                                                                                                                                  |
| $tcpinfo\_rtt                         | Edge Applications      | The RTT time in microseconds measured by Edge for the user.                                                                                                                       |
| $time                                 | Edge Applications, WAF | Timestamp of the start of the request.                                                                                                                                                   |
| $upstream\_bytes\_received            | Edge Applications      | Number of bytes received by the origin's Edge, if the content is not cached.                                                                                              |
| $upstream\_cache\_status              | Edge Applications      | Status of the Edge cache. It can assume the values "MISS", "BYPASS", "EXPIRED", "STALE", "UPDATING", "REVALIDATED" or "HIT".                                                          |
| $upstream\_connect\_time              | Edge Applications      | Time in milliseconds for Edge to establish a connection with the origin ("0" in case of KeepAlive and "-" in case of cache).
| $upstream_header_time              | Edge Applications      | Time in milliseconds for Edge to receive the origin's response headers ( "-" in case of cache).|
| $upstream\_response\_time             | Edge Applications      | Time in milliseconds for Edge to receive all of the response from the origin, including headers and body ("-" in case of cache).                                                         |
| $upstream\_status                     | Edge Applications      | HTTP Status Code of the origin ("-" in case of cache).                                                                                                                                |
| $version                              | Edge Applications, WAF | The version of Azion Log used.                                                                                                                                                     |
| $waf\_args                            | WAF                    | The request arguments.                                                                                                                                                         |
| $waf\_attack\_action                  | Edge Applications, WAF | Reports WAF's action regarding the action ($BLOCK, $PASS, $LEARNING_BLOCK, $LEARNING_PASS).                                                                                           |
| $waf\_attack\_family                  | Edge Applications, WAF | Informs the classification of the WAF infraction detected in the request (SQL, XSS, TRAVERSAL, among others)                                                                            |
| $waf\_learning                        | WAF                    | Informs if WAF is in learning mode, usually 0 or 1.                                                                                                                           |
| $waf\_match                           | WAF                    | List of infractions found in the request, it is formed by key-value elements; the key refers to the type of violation detected; the value shows the string that generated the infraction. |
| $waf\_score                           | WAF                    | Reports the score that will be increased in the event of a match.                                                                                                                          |
| $waf\_server                          | WAF                    | Hostname used in the request.                                                                                                                                                    |
| $waf\_uri                             | WAF                    | URI used in the request.                                                                                                                                                        |


---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/Jessicactr/docs_en/edit/master/data-streaming/fields/index.md) on GitHub.
