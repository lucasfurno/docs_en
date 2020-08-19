#  Real-Time **Metrics**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/real-time-metrics/index.md)

To use Metrics you need to access the [Real-Time Manager](https://manager.azion.com/) and click on Control your traffic.

The Metrics screen has some sections that you can apply filters to, such as:

* Data Interval Filter section: Where you can select the period or domain that you would like shown.
* Data section: Where the graphs of the requested data are displayed

> 1. [Data Interval Filter](#DataFilterInterval)
> 2. [Export to CSV](#ExportCsv)
> 3. [How to Interpret the Graphics](#HowInterpretGraphics)
> 4. [Data Transferred](#DataTransferred)
> 5. [Requests](#Requests)
> 6. [Status Codes](#StatusCodes)
> 7. [HTTP Methods](#HTTPMethods)
> 8. [WAF](#WebApplicationFirewall)
> 9. [Connections](#LiveStreamingConnections)
> 10. [Bandwidth](#Bandwidth)

---

## 1. Data Interval Filter {#DataFilterInterval}

All the graph options for the products in Metrics have the Data Interval Filter.

It is possible to filter by domain with some graphs.

The graphs are updated and display the information according to the criteria set by the filter.

---

## 2. Export to CSV {#export-to-csv}

After applying the filters, you can export the information as a CSV file. To do this, click on the CSV icon next to the graph you need.

---

## 3. How to interpret the graphs {#HowInterpretGraphics}

The information is displayed according to the solution and period of time chosen in the filters, the displayed graphs are grouped by:

---

## 4. Data Transferred {#DataTransferred}

This tab displays graphs giving information on the volume of data transferred for the solution that you chose. This tab has 4 graphs referring to the volume of data transferred for the solution and period selected, as follows:

**Edge Caching:** This graph displays the total (Saved Data + Missed Data) amount of data transferred for the solution and period selected. Hover the mouse over graph to see the exact values transferred over this period.

The values shown at the foot of the graph are the total amount during the period.

**Edge Offloaded:** This graph displays the Percentage of the amount of data that was delivered by the Azion solution, i.e. It displays a Saved Data graph in percentages. Hover the mouse over the graph to see the exact percentages over this period.

The values shown at the foot of the graph are the averages during the period.

**Saved Data:** This graph displays the amount of data that was delivered by the Azion servers, i.e. Without looking up content on the origin server. Hover the mouse over the graph to see the exact amount over this period.

The values shown at the foot are the total amount during the period.

**Missed Data:** This graph displays the amount of data that was delivered by the origin server, i.e. The request went to the Azion servers, but the content could not be transferred to them from the origin. When the origin server deals with the request, it also sends the content to the Azion servers.

The values shown at the foot of the graph are the total amount during the period.

**Bandwidth Usage**

**Total Bandwidth Usage:** Quantity of MBps in bandwidth used.

Average bandwidth used during the period is displayed at the foot of the graph. 

**Bandwidth Offload:** Percentage of the bandwidth that was offloaded.

Average bandwidth used during the period is displayed at the foot of the graph.

**Saved Bandwidth:** Quantity of MBps of bandwidth that was delivered through CDN without needing to look up content on the origin server.

Average bandwidth used during the period is displayed at the foot of the graph.

**Missed Bandwidth:** Quantity of MBps of bandwidth, used by the origin server for content.

---

## 5. Requests {#Requests}

**Total Number of Requests:** Quantity of requests made for content. The total of requests during the period is displayed at the foot of the graph.

**Saved Requests:** Quantity of requests that were delivered by the Azion servers, i.e. Without looking up content on the origin server. The total number of requests delivered during the period is displayed at the foot of the graph.

**Missed Requests:** The amount of requests that were delivered by the origin server, i.e. The request went to the Azion servers, but the content could not be transferred to them from the origin. The total number of requests delivered by the origin during the period is displayed at the foot of the graph.

**Requests per Second**

**Total Requests per Second:** The amount of requests, per second, from customers for content. The average number of requests per second during the period is displayed at the foot of the graph.

**Requests per Second Offloaded:** Percentage of the requests per second that were delivered by the Azion servers, i.e. Without looking up content on the origin server. The average for the period is at the foot.

**Saved Requests per Second:** Quantity of requests per second that were delivered by the Azion servers, i.e. Without looking up content on the origin server. The average number of requests delivered during the period is displayed at the foot of the graph.

**Missed Requests per Second:** The amount of requests per second that were delivered by the origin server, i.e. The request went to the Azion servers, but the content could not be transferred to them from the origin. The average number of requests per second during the period is displayed at the foot of the graph.

---

## 6. Status Codes {#StatusCodes}

This tab displays the graphs with information pertaining to the Status Codes of the content delivered. An excellent reference for getting a better understanding about the HTTP Status Codes can be found at this link: [List of HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

**HTTP Status Codes 2xx:** This type of status indicates that the user request was received, understood, accepted and processed by the server.

| Code | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 200  | **OK:** Standard status for a successful HTTP request. It means that the content was delivered to the user correctly. |
| 204  | **No Content:** It means that the server completed the request, but had no content to deliver. |
| 206  | **Partial Content:** The server delivered only a part of the content because it was divided into parts. |
| 2xx  | **Other Status:** There can be other types of Status for requests that were also dealt with, but they are not common. |

**HTTP Status Codes 3xx**: This type of status code indicates that the user request was redirected and needs to go through another stage for it to be delivered.

| Code | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 301  | **Moved Permanently**: This and all future requests will be redirected to another URL. |
| 302  | **Found:** This request was temporarily redirected to another URL. |
| 304  | **Not Modified:** The content header indicates that the it has not been modified and does not need to be resent. It can deliver the existing file to the user’s browser. |
| 3xx  | **Redirection:** There can be other types of Status for requests that were also redirected, but they are not common. |

**HTTP Status Codes 4xx**: This type of status code indicates that an error has occurred with the user’s request.

| Code | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 400  | **Bad request:** The server cannot process the request, generally this is due to an error with the format of the request. |
| 403  | **Forbidden:** The request is valid, but was not authorized by the server. This means that the user or the IP that is making the request is not authorized to do so. |
| 404  | **Not Found:** The file that the request was for does not exist on the origin server. |
| 4xx  | **Client Error:** There can be other types of Status for requests that also generate errors, but they are not common. |

**HTTP Status Codes 5xx**: This type of status indicates that the server failed to delivered an apparently valid request.

| Code | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 500  | **Internal Server Error:** This is the generic message given, when an unexpected error occurs on the server and it is unable to deal with the request. |
| 502  | **Bad Gateway:** When the server is acting as a Gateway or Proxy and receives an invalid response from the origin. It generally occurs when the origin is offline. |
| 503  | **Service Unavailable:** Server is not available. Generally a temporary Status. |
| 5xx  | **Server Error:** There can be other types of Status for requests that also generate errors, but they are not common. |

---

## 7. HTTP Methods {#HTTPMethods}

This graph shows the requests for your site divided by the HTTP method used. For getting a better understanding about the HTTP Methods, you can read about them at this link:  [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol).

| Method | Description                                                  |
| ------ | ------------------------------------------------------------ |
| GET    | This request method only receives data from the server.      |
| POST   | This request method sends data to the server.                |
| HEAD   | This request method is the same as GET, but the body of the HTML page is not sent, only the header. |
| OTHERS | Other request methods, which are not so common, are grouped together here. |

---

## 8. Web Application Firewall (WAF) {#WebApplicationFirewall}

For clients who have the Web Application Firewall product, there is a specific graph to display the behavior of requests.

**Threats vs Requests:** This graph displays the average of blocked attacks for the selected period.

**Cross-Site Scripting (XSS) Threats:** This graph displays the average of Cross-Site Scripting attacks. A type of vulnerability typically found in web applications, which enables the attacker to insert itself alongside client scripts in a web page seen by other users.

**Remote File Inclusion (RFI) Threats:** This graph displays the average of Remote File Inclusion attacks, a type of vulnerability typically found in websites. It enables the attacker to add a file on the web server.

**SQL Injection Threats:** This graph displays the average of SQL Injection attacks, a technique for inserting code used to attack data-driven applications.

**Other Threats:** This graph displays the average attacks blocked by the WAF, which are not classified under any of the above categories.

---

## 9. Live Streaming {#LiveStreamingConnections}

This tab is available when the client has the *Live Streaming* product. It displays information about the number of users connected to the company’s streams.

**Average Connected Users:** Average of users connected to the selected stream. Average users connected during the period is displayed at the foot of the graph.

**Max Connected Users:** Maximum number of users connected to the selected stream. Maximum number of users connected during the period is displayed at the foot of the graph.

---

## 10. Bandwidth Saving {#Bandwidth}

This tab is available when the client has the *Image Processor* solution. It displays the savings that the client has made when transmitting images.

The total optimization from transmitting images is shown at the foot of the graph.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)