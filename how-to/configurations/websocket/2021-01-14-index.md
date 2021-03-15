---
layout: page-documentation-md
title:   pages.docs_websocket.title 
description:  pages.docs_websocket.description 
meta_tags:  pages.docs_websocket.meta_tags 

namespace:     documentation_how_to_configurations_websocket

permalink:      /documentation/products/how-to/configurations/websocket/
permalink_en:   /documentation/products/how-to/configurations/websocket/
permalink_pt-br:   /documentacao/produtos/how-to/configuracoes/websocket/
---
# WebSocket

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/how-to/configurations/websocket/index.md)

The WebSocket protocol provides a way to create web applications that support bidirectional communication, in real time, between the customer and the server.

Azion supports the WebSocket protocol, through the [Application Acceleration]({% tl documentation_products_application_acceleration %}) product.

To use Webscoket support in a configuration:

1. Go to the Content Delivery menu of [Real-Time Manager](https://manager.azion.com/).
2. Edit the required Content Delivery configuration.
3. In the Main Settings tab, start up Application Acceleration and save the setting.
4. In the Rules Engine tab, create a new rule in Response Phase. Here’s an example.

| **Name:** | WebSocket |
|-----------|-----------|
| **Criteria:** | **if** ${*http_upgrade*} **is equal** *websocket*<br> **and** ${*http_connection*} **is equal** *Upgrade* |
| **Behavior:** | **then** Bypass Cache Phase<br> **and** Add Request Header *Upgrade: websocket*<br> **and** Add Request *Header Connection: Upgrade*<br>

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)   
