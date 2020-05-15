#  Real-Time **Metrics**

To use the Metrics you have to access [Real-Time Manager](https://manager.azion.com/) and click on Control your traffic.

The Metrics screen has some regions which enable you to filter information, such as:

* Area to filter your data interval: Where you can select either the period or domain you would like to be displayed.
* Data Area: Where the graphs with the requested data are displayed.



> 1. [Filter data interval](#filter-data-interval)
> 2. [Export to CSV](#export-to-csv)
> 3. [How to Interpret the Graphics](#how-to-interpret-the-graphics)
> 4. [Data Transferred](#data-transferred)
> 5. [Requests](#requests)
> 6. [Status Codes](#status-codes)
> 7. [HTTP Methods](#http-methods)
> 8. [WAF](#web-application-firewall-waf)
> 9. [Connections](#connections)
> 10. [Bandwidth](#storage-stored-data)

​    

---

## 1. Filter Data Interval {#filter-data-interval}

Every graph options of Metrics products have a Data Interval Filter.

In same graphs it's possible to filter by domain.

The graphs are updated and present the information according to the criteria selected in the filter.

---

## 2. Export to CSV {#export-to-csv}

After applying the filters, you can export the information to a CSV file, to perform this action, click on the CSV icon next to the desired graphic.

---

## 3. How to Interpret the Graphics {#how-to-interpret-the-graphics}

The information is presented according to the solution and the time interval selected in the filters, the graphs presented are grouped in:

---

## 4. Data Transferred {#data-transferred}

This tab presents graphs with the information referring to the volume of data transferred by the domain you selected. This tab presents 4 graphs referring to the volume of data transferred in the domain and in the selected period, as follows:

**Edge Caching:** This graph shows the sum (Saved Data + Missed Data) of the volume of data trafficked in the domain and in the selected period, hover over the graph to see the exact value trafficked in the period.

The values displayed at the bottom of the graph are the sum of the volume in the range.

**Edge Offloaded:** This graph shows the percentage of the volume of data that was delivered by the Azion solution, that is, it is the representation of the Saved Data graph only in percentages, hover over the graph to see the exact percentage in the selected range.

The values displayed at the bottom of the graph are the averages in the range.

**Saved Data:** This graph shows the volume of data that was delivered by Azion's servers, in other words, without searching for content on the origin server, hover over the graph to see the exact value of the period.

The values displayed at the bottom are the sum of the volume of the range.

**Missed Data:** This graph shows the volume of data that was delivered by the origin server, in other words, the request was made to Azion's servers, but the content had not been transferred from the origin to them. In the moment the originating server fulfills the request, it also sends the content to Azion's servers.

The values displayed at the bottom of the graph are the sum of the volume in the range.

**Bandwidth Usage**

**Total Bandwidth Usage:** Number of Mbps used by the band. At the bottom of the graph shows the average of the band used in the interval.

**Bandwidth Offload:** Percentage of bandwidth that was downloaded.

At the bottom of the graph shows the average of the band used in the interval.

**Saved Bandwidth:** Number of Mbps of the band that was delivered by CDN without having to search the content on the origin server.

At the bottom of the graph shows the average of the band used in the interval.

**Missed Bandwidth:** Number of Mbps of the band, up to the origin server of the content.

---

## 5. Requests {#requests}

**Total Requests:** Number of customer requests to the content. At the bottom of the graph shows the sum of requests for the interval.

**Saved Requests:** Number of requests that were delivered by Azion's servers, that is, without searching for content on the origin server. At the bottom of the graph we have the total number of requests delivered in the interval.

**Missed Requests:** Number of requests that were delivered by the origin server, in other words, the request was made to Azion's servers, but the content had not been transferred from the origin to them. At the bottom of the graph we have the total number of requests for the origin in the interval.

**Requests per Second**

**Total Requests per Second:** Number of customer requests to the content per second at the bottom of the graph we have the average number of requests per second in the interval.

**Requests per Second Offloaded:** Percentage per second of requests that were delivered by Azion's servers, that is, without fetching content from the origin server. In the footer we have the average in the interval.

**Saved Requests per Second:** Number of requests per second that were delivered by Azion's servers, that is, without searching for content on the origin server. At the bottom of the graph we have the average number of requests delivered in the interval.

**Missed Requests per Second:** Number of requests per second that were delivered by the origin server, in other words, the request was made to Azion's servers, but the content had not been transferred from the origin to them. At the bottom of the graph the average number of requests per second in the interval is shown.

---

## 6. Status Codes {#status-codes}

This tab presents graphs with information regarding the Content Delivery Status codes. 

Excellent documentation to deepen your knowledge of HTTP Status Codes can be found at this link: [List of HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) . Only available in Metrics Premium.

**HTTP Status Codes 2xx:** This status class indicates that the user's request was received, understood, accepted and processed by the server.

| Code | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 200  | **OK:** Default status of a successful HTTP request. It means that the content was delivered to the user correctly. |
| 204  | **No Content:** It means that the server completed the request but there was no content to be delivered. |
| 206  | **Partial Content:** The server is delivered only part of the content because it had been divided into parts. |
| 2xx  | **Other Status:** Here you can find other types of Status of requests that were also attended but that are not quite common. |

**HTTP Status Codes 3xx**: This status class indicates that the user's request has been redirected and needs one more step to be delivered.

| Code | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 301  | **Moved Permanently**: This and all future requests will be redirected to another URL. |
| 302  | **Found:** This request was temporarily redirected to another URL. |
| 304  | **Not Modified:** It is identified by the Header of the content that it has not yet been modified and does not need to be requested again. It can deliver the existing file in the user’s Browser. |
| 3xx  | **Redirection:** Here you can find other types of Status of requests that were also redirected but that are not quite common. |



**HTTP Status Codes 4xx**: This status class indicates that an error has occurred in the user's request:


| Code | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 400  | **Bad request:** The server cannot process the request, usually due to an error in the request format. |
| 403  | **Forbidden:** The request is valid but not authorized on the server, it means that the user or the IP that is making the request is not authorized to do so. |
| 404  | **Not Found:** The file requested does not exist at the origin. |
| 4xx  | **Client Error:** Here you can find other types of Status of requests that also generated errors but that are not quite common. |



**HTTP Status Codes 5xx**: This status class indicates that the server failed to attempt to deliver an apparently valid request.

| Code | Description                                                  |
| ---- | ------------------------------------------------------------ |
| 500  | **Internal Server Error:** It is a generic message that is given when there is an unexpected error on the server not being able to handle the request. |
| 502  | **Bad Gateway:** When the server is serving as a Gateway or Proxy and receives an invalid response from the origin. Usually occurs when the origin is offline. |
| 503  | **Service Unavailable:** Server is not available. Usually a temporary Status. |
| 5xx  | **Server Error:** Here you can find other types of Status of requests that also generated errors but that are not quite common. |

---

## 7. HTTP Methods {#http-methods}

This graph shows the requests for your site segregated by the HTTP method used. For more in-depth information about HTTP methods you can read through this URL: [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) . Graph available only in the Metrics Premium product.


| Method | Description                                                  |
| ------ | ------------------------------------------------------------ |
| GET    | This request method only receives data from the server.      |
| POST   | This request method sends data to the server.                |
| HEAD   | This request method is the same as GET, but it does not receive the HTML body, only the header. |
| OTHERS | Other request methods which are not so common, are grouped here. |

---

## 8. Web Application Firewall (WAF) {#web-application-firewall-waf}

For customers who have the Web Application Firewall product, there is a specific graphic to show the behavior of requests.

**Threats vs Requests:** This graph shows the average number of attacks blocked in the selected period.

**Cross-Site Scripting (XSS) Threats:** This graph represents the average of Cross-Site Scripting attacks, a type of vulnerability typically found in web applications, which allows an attacker to insert client-side scripts into a web page viewed by other users.

**Remote File Inclusion (RFI) Threats:** This graph represents the average number of Remote File Inclusion attacks, a type of vulnerability typically found on websites. Allows the attacker to include a file on the web server.

**SQL Injection Threats:** This graph represents the average of SQL Injection type attacks, a code insertion technique used to attack data-driven applications.

**Other Threats:** This graph shows the average number of attacks blocked by WAF and which are not separated by the attack classifications above.



## 9. Live Streaming {#connections}

This tab is available when the *Live Streaming* solution is selected. It presents information regarding the number of users connected to your company's streams.

**Average Connected Users:** Average users connected to the selected Stream. At the bottom of the graph, the average number of users connected in the interval is displayed.

**Max Connected Users:** Maximum users connected to the selected Stream. At the bottom of the graph, the maximum number of users connected in the interval is displayed.

---

## 10. Bandwidth Saving {#storage-stored-data}

This tab is available when the customer has the _Image Processor_ solution. It presents the savings that the customer has when traveling images.

At the bottom of the graph we have the total optimized with the image traffic.

---

Didn't find what you were looking for? [Open a support ticket](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/analytics/index.md) on GitHub.
