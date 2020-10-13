# **Response**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-functions/runtime-apis/javascript/response/index.md)

The `Response` interface represents an HTTP response and integrates the [Fetch API](https://www.azion.com/pt-br/documentacao/produtos/edge-functions/runtime-apis/javascript/fetch/).

### Constructor

`let response = new Response(input [, init])`

### Parameters

`body` optional - Object that defines the response body. It can be `null` (default value) or one of the following:

- [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
- [`BufferSource`](https://developer.mozilla.org/en-US/docs/Web/API/BufferSource)
- [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
- [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [`USVString`](https://developer.mozilla.org/en-US/docs/Web/API/USVString)

 `init` optional - Options object contains customized options for building the response, or an empty object (default value). The options are:

- `status` int - Contains the status code of the response (eg 200 for a success).

- `statusText` - Contains the" status "message corresponding to the" status "code (eg, OK for 200).

- `headers `- Contains the [`Headers`](https://developer.mozilla.org/pt-BR/docs/Web/API/Headers) object  associated with the response.

- `url` - Contains the response URL.

### Properties

`headers` - Contains the Headers object that is associated with the response.

`ok` - Contains a Boolean value indicating whether the response was successful ("status" in the range 200-299) or not.

`redirected` - Indicates whether the response is the result of a redirect or not; that is, your URL list has more than one entry.

`status` - Contains the response's status code (e.g., 200 for a success).

`statusText` - Contains the" status "message corresponding to the" status "code (eg, OK for 200).

`type` - Contains the type of response (e.g., basic, cors).

`url` - Contains the response URL.

`useFinalURL` - Contains a Boolean value indicating whether this is the final URL of the response.

Response implements Body, so it also has the following properties available:

`body` - A simple" getter "to read body content via the ReadableStream interface.
`bodyUsed` Stores a Boolean that indicates whether the body has already used on a response.

### Methods

`clone() `- Creates a copy of the `Response` object.

`redirect() `- Create a new response with a different URL.



---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)

