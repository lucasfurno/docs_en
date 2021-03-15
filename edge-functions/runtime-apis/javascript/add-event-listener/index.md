---
layout: page-documentation-md
title: pages.docs_products_edge_functions_runtime_apis_javascript_event_listener.title
description: pages.docs_products_edge_functions_runtime_apis_javascript_event_listener.description
meta_tags: pages.docs_products_edge_functions_runtime_apis_javascript_event_listener.meta_tags

namespace:     documentation_products_edge_functions_runtime_apis_javascript_event_listener

permalink:      /documentation/products/edge-functions/runtime-apis/javascript/add-event-listener/
permalink_en:   /documentation/products/edge-functions/runtime-apis/javascript/add-event-listener/
permalink_pt-br:   /documentacao/produtos/edge-functions/runtime-apis/javascript/add-event-listener/
---
# add**EventListerner**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-functions/runtime-apis/javascript/add-event-listener/index.md)

### How it works

The _addEventListener_ function defines the trigger for the execution of JavaScript code, receiving the request data. The event listener type is `fetch` and gets the [fetchevent](https://www.azion.com/en/documentation/products/edge-functions/runtime-apis/javascript/fetch-event/).

### Sintax

`addEventListener(type, listener)`

### Properties

type: `string` - the supported type is `fetch`.

listener: `function` - The function that handles incoming Azion Cells events. 

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
