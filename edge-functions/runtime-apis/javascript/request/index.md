# **Request**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-functions/runtime-apis/javascript/request/index.md)

The `Request` interface represents an HTTP request and integrates the [Fetch API](https://www.azion.com/pt-br/documentacao/produtos/edge-functions/runtime-apis/javascript/fetch/).

### How it works

The Request object can be built and also seen as the property of a [fetchevent](https://www.azion.com/pt-br/documentacao/produtos/edge-functions/runtime-apis/javascript/fetch-event /) received by Edge Function.

```javascript
addEventListener("fetch", event => {
  const request = event.request
  const url = "https://example.com"

  const myRequest = new Request(url, {
    body: request.body,
    headers: request.headers,
    method: request.method,
    redirect: request.redirect
  })

  //...
})
```



```javascript
addEventListener("fetch", event => {
  let request = event.request
})
```

### Constructor

`let request = new Request(input [, init])`

### Parameters

`Input`: `string | Request` - Defines the resource you want to search for using a URL or Request object.

`Init`: `RequestInit` - optional

### Properties

All properties of an initial Request object in event.request are read-only. To modify a request, you must create a new _Request_ object and pass builder options.

Todas as propriedades de um objeto Request inicial em event.request são somente leitura. Para modificar uma solicitação, você deve criar um novo objeto Request e passar as opções para o construtor.

`headers` - Contains an [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object.

`method` - Contains the request method (GET, POST, etc.)

`url` - Contains the request URL.

`body` - A simple" getter "to read the body's contents through the ReadableStream interface.

`bodyUsed` - Stores a Boolean that declares whether the request's body has already used on a response.

`redirect` - Contains the redirection mode to use: follow, error, or manual.

`event.type`: `string`

`event.request`: `request` 



---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)