# Edge **Pulse**

Edge Pulse is a product from Edge Analytics, based on the RUM market solution, which allows communication between your content and your client, collecting navigation information, availability, latency and band. As well as collecting information, Edge Pulse uses them to enhance the user experience, guaranteeing content delivery in an efficient manner.

> 1. [What is RUM?](#what-is-rum)
> 2. [How does it work?](#how-does-work)
> 3. [How to use](#how-to-use)
> 4. [Collected Data](#collected-data)

---

## 1. What is RUM? {#what-is-rum}

RUM is the abbreviation used for the concept of "_Real User Monitor_". In other words, RUM is a monitoring model which captures data from the final user with the objective of explaining how your users are being impacted by the availability and efficiency of the content delivery.

---

## 2. How does it work? {#how-does-work}

Edge Pulse collects browsing data from users and availability, latency and throughput metrics. To monitor the page, it is necessary to insert the Edge Pulse JavaScript tag. This script respects the protocol in use (http/https), is fully asynchronous and does not interfere in the loading process, nor in the internal structure of the delivered content. furthermore, the tests are done only in three of our Edge Network machines, at a time, in a 30 minute interval per user, not burdening the client with repetitions.

The tests are done in a continuous and diversified way and cover all possible router which that user has to arrive at the content. After the data collection, the results are sent to the Azion’s processing servers.

Furthermore, the [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier) algorithm is used for a better control over the success and fail cases. To control and handle Edge Pulse data, we use the [local storage of the browser](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage).

The tracking done by Edge Pulse respects the following settings of the user’s browser:

| Value | Behavior of Edge Pulse |
|-------|-----------------------------|
| navigator.doNotTrack = '1' | If the tracking was never allowed and, as a consequence, Edge Pulse never used the local storage, a new identifier code will be generated for each visit the user does to the website.<br>If it is configured as "1", but it has been tracked before, the previous identifier is deleted and a new one is generated.|
| navigator.doNotTrack <> '1' | When the value is not "1", it means that Edge Pulse will track. Thus, the same identifier will be used for each visit of an user; |

---

## 3. How to set up? {#how-to-use}

To monitor the page, it is necessary to insert the Edge Pulse JavaScript tag. 

Edge Pulse is active for all clients, so to start using it, you must access Real-Time Manager, in the Menu "Data Services" > "Edge Pulse".

In order to Edge Pulse to start the metrics gathering, you will need to add the JavaScript tag, available at the product, in each page it wishes to monitor. Execution starts after the user's browser has loaded the page. The tag may be published manually or using tag management systems available on the market.

---

## 4. Collected Data {#collected-data}

The collected metrics will be used for decision making regarding user routing and are divided into two main groups:

**User Experience (Browsing)**

It is information about the page load time, time between request and response, total time until the first byte is received, user-agent, etc.

| Metric | Description |
|---------|-----------|
| locationHref | Return the complete URL of the current page. |
| platform | Operating system used to load the web page. |
| userAgent | Identify the client UA browser. |
| referrer | The value is an empty string if the user navigated to the page directly (not through a link, but, for example, via a bookmark). Since this property returns only a string, it does not give you DOM access to the referring page. [MDN Referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) |
| downlink | |
| downlinkMax | |
| effectiveType | |
| rtt | |
| saveData | |

In addition to this data, information from the Resolver used for DNS resolution, tested PoP/Edge and anonymous user network is collected.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/edge-pulse/index.md) on GitHub.