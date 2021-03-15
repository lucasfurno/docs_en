---
layout: page-documentation-md
title: pages.docs_edge_pulse.title
description: pages.docs_edge_pulse.description
meta_tags: pages.docs_edge_pulse.meta_tags

namespace:     documentation_products_edge_pulse

permalink:      /documentation/products/edge-pulse/
permalink_en:   /documentation/products/edge-pulse/
permalink_pt-br:   /documentacao/produtos/edge-pulse/
---
# Edge **Pulse**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-pulse/index.md)

Edge Pulse is a product from Edge Analytics, based on the RUM  market solution, which allows communication between your content and your client, collecting navigation information, availability, latency and band. As well as collecting information, Edge Pulse uses them to enhance the user experience, guaranteeing content delivery in an efficient manner.

> 1. [What is RUM?](#what-is-rum)
> 2. [How does it work?](#how-does-work)
> 3. [How to set up?](#how-to-setup)
> 4. [Collected Data](#collected-data)

---

## 1. What is RUM? {#what-is-rum}

RUM is the abbreviation used for the concept of "_Real User Monitor_". In other words, RUM is a monitoring model which captures data from the final user with the objective of explaining how your users are being impacted by the availability and efficiency of the content delivery

---

## 2. How does it work? {#how-does-work}

Edge Pulse collects browsing data from users and availability, latency and throughput metrics. To monitor the page, it is necessary to insert the Edge Pulse JavaScript tag. This script respects the protocol in use (http/https), is fully asynchronous and does not interfere in the loading process, nor in the internal structure of the delivered content. furthermore, the tests are done only in three of our Edge Network machines Edge Network, at a time, in a 30 minute interval per user, not burdening the client with repetitions.

The tests are done in a continuous and diversified way and cover all possible router which that user has to arrive at the content. After the data collection, the results are sent to the Azion’s processing servers.

Furthermore, the [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier) algorithm is used for a better control over the success and fail cases. To control and handle Edge Pulse data, we use the [local storage of the browser](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage).

The tracking done by Edge Pulse respects the following settings of the user’s browser:

| Value | Behavior of Edge Pulse |
|-------|------------------------|
| navigator.doNotTrack = '1' | If the tracking was never allowed and, as a consequence, Edge Plus never used the local storage, a new identifier code will be generated for each visit the user does to the website.<br>If it is configured as "1", but it has been tracked before, the previous identifier is deleted and a new one is generated.|
| navigator.doNotTrack <> '1' | When a value is not "1", it means that Edge Pulse will track. Thus, the same identifier will be used for each visit of an user; |

---

## 3. How to set up? {#how-to-setup}

To monitor the page, it is necessary to insert the Edge Pulse JavaScript tag.

Edge Pulse is active for all clients, so to start usings it, you must access Real-Time Manager, in the Menu "Data Services" > "Edge Pulse".

In order for Edge Pulse to start your metrics collections, you will need to add the JavaScript tag, available at the product, in each page it wishes to monitor. Execution starts after the user's browser has loaded the page. The tag may be published manually or using tag management systems available on the market.

---

## 4. Collected Data {#collected-data}

Edge Pulse collects the _Resolver_ information used for the DNS resolution, the tested PoP/Edge and the user's anonymous network and this data is used to make decisions regarding user routing.

In addition, we provide user experience and navigation data via [Real-Time Events](https://www.azion.com/en/documentation/products/real-time-events/) and [Data Streaming](https://www.azion.com/en/documentation/products/data-streaming/), as listed in the table below:

| Metric | Description |
|--------|-------------|
| locationHref | Return the complete URL of the current page. |
| platform | Operating system used to load the web page. |
| userAgent | Identify the client UA browser. |
| referrer | Returns the previous url to the current page. That is, the url by which the user arrived at "locationHref". If the access originated directly from the current page (not through a link, but for example, through a bookmark), its value will be an empty string. It does not provide DOM access to the reference page. |
| downlink | Returns the average volume of data received (Mb/s) |
| dns | DNS resolution time |
| effectiveType | Effective type of connection, e.g.: 3G 4G |
| rtt | It is the duration (in milliseconds) required for a network request to go from a start point to the destination and return to the start point. |
| Hostname | Hostname of the current URL. |
| contentDownload | Time used to download the content. |
| networkDuration | Duration without query browser waiting. |
| pageLoadTime | Time from the start of navigation to the full page load. |
| redirectCount | Returns the number of redirects since the last navigation without redirection in the context of the current navigation. |
| renderTime | Time the browser was rendered after browsing. |
| ssl | Standard protocol used to maintain a secure traffic connection. |
| tcp | Internet protocol that returns the data that makes up the page. |
| ttfb | Time until the arrival of the first byte of the requested page. |
| type | Returns the type of navigation without redirection. |
| typebackForward | Type of navigation through the session history. |
| typeNavigate | Returns the type of the last navigation without redirection, e.g.: by clicking on a link, entering the URL in the address bar or submitting a form. |
| typeReload | Type of navigation for the reload operation, that is, when the page was reloaded. |
| typeReserved | Any type of navigation not defined by those previously mentioned (typeNavigate, typeReload). |
| Version | The version of Azion Log used. |

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
