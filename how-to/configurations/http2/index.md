# HTTP2

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/how-to/configurations/http2/index.md)

The HTTP/2 standard was approved in February 2015 and is considered the biggest upgrade of the HTTP protocol in 15 years. It can bring innumerable benefits for improving your sites’ performance.

Azion has supported the HTTP/2 standard since it was first adopted by the main browsers on the market and, from Jun 04, 2018, the new protocol has been used for all sites and applications that are accelerated through Azion. Have a look at some of the subjects on this we have for you:

> 1. [The Benefits of HTTP/2](#beneficios-do-http-2)
> 2. [Undoing the “best practices” of HTTP/1.x](#desfazendo-as-melhores-praticas-do-http-1-x)

---

## 1. The Benefits of HTTP/2 {#beneficios-do-http-2}

The main benefits of the HTTP/2 standard are:

* Significantly better performance, without the need for complicated optimizations in front-end web development.
* Compatible with current html/css/js code.
* HTTP header compression.
* Server Push, that makes it possible to send resources to the user, even before they are requested.
* Multiplexing requests over the same TCP connection.
* Prioritizing resources.

---

## 2. Undoing the “best practices” of HTTP/1.x {#desfazendo-as-melhores-praticas-do-http-1-x}

Many of the “best practices” used to optimize web sites to date in HTTP/1.x, are unnecessary or sub-optimal with the new standard.

* Resource in-lining
* Resource concatenation
* Image sprinting
* Domain sharding

You should consider which of these techniques to remove from your website, for the best use of HTTP/2.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)  