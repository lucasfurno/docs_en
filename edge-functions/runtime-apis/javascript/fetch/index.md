# Fetch **API**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-functions/runtime-apis/javascript/fetch/index.md)

### How it works

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provides an interface for fetching resources from the edge network (for exemple, across the network)

Fetch provides a generic definition of objects [`Request`](https://developer.mozilla.org/pt-BR/docs/Web/API/Request) and [`Response`](https://developer.mozilla.org/pt-BR/docs/Web/API/Response). It allows them to manipulate or modify requests and responses or any use case that may require you to generate your responses programmatically.

It also defines related concepts like CORS and the HTTP source header semantics, supplanting its separate definitions elsewhere.

See more about using fetch() on MDN web docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

### Constructor 

`fetch() Promisse<response>`

### Properties

request: `request`|`string`

The Request object or string that represents the URL to fetch.

init: `requestInit`  - The content of the request. 

### Example

~~~javascript
addEventListener("fetch", event => {
  return event.respondWith(
    new Response("Hello world")
  )
})
~~~



---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)

