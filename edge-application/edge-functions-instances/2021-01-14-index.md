---
layout: page-documentation-md
title: pages.docs_edge_applications_edge_functions_instances.title
description: pages.docs_edge_applications_edge_functions_instances.description
meta_tags: pages.docs_edge_applications_edge_functions_instances.meta_tags

namespace:     documentation_products_edge_applications_edge_functions_instances

permalink:      /documentation/products/edge-application/edge-functions-instances/
permalink_en:   /documentation/products/edge-application/edge-functions-instances/
permalink_pt-br:   /documentacao/produtos/edge-application/edge-functions-instances/
---
# Edge **Application - Edge Functions Instances**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-application/edge-functions-instances/index.md)

By activating the Edge Functions module, you can instantiate serverless functions in your Edge Application at Azion, as well as set up the conditions for its execution. Available for Edge Application and Edge Firewall products, its use allows you to run serveless functions in our robust distributed network of Edge Nodes, responding to events closer to the end user, ensuring greater scalability and availability

> 1. [How does it work?](#how-does-it-work)
> 2. [How to set up?](#how-to-set-up)
> 3. [Support Documents](#support-documents)

---

## 1. How does it work? {#how-does-it-work}

In Edge Application, you will have to activate the Edge Functions module, so it is possible to use existing functions provided by Azion. For example:

* A/B Testing
* Massive Redirect
* Hello World
* Cookie Targeting

When instantiating an Edge Function, it is not possible to change its source code, just inform the arguments that will be passed to the context of the function's execution, in JSON, through the Args tab.

> Attention, the Args field in Edge Functions Instance supports a maximum of 100KB of arguments.

To associate an execution trigger, you simply need for the instance to be associated with a Behavior of a Rules Engine Rule, in Request or Response Phase. Thus, when a request meets the criteria defined in the Rules Engine rules, Edge Function will be invoked and executed directly on Azion's Edges Nodes.

To learn more about how they work and how to apply some of these Edge Functions, visit our [Use Cases](https://www.azion.com/en/documentation/use-cases/).

---

## 2. How to set up? {#how-to-set-up}

To instantiate and execute the functions in your Edge Application:

1. From the Real-Time Manager, access the menu **Edge Applications**.
2. Select one **Edge Application**.
3. In Main Settings, activate the **Edge Functions** module.
4. In the **Functions** tab, click **Add function** to instantiate the function between the options.
5. Still in **Functions**, select the **Args** tab, and fill in the necessary information.
6. Click save and you will have instantiated the function.
7. Then select the **Rules Engine** tab and add a rule in the **Request** or **Response Phase**.
8. Within your rule, define the Behavior **Run Function**.
9. Click on Save and its function will be executed when there is an HTTP request.

To follow the invocations of your functions, access Real-Time Metrics, there we provide real-time information about the performance of your Edge Functions.

---

## 3. Support Documents {#support-documents}

- [Edge Functions](https://www.azion.com/en/documentation/products/edge-functions/)
- [Rules Engine](https://www.azion.com/en/documentation/products/edge-application/rules-engine/)
- [Edge Application](https://www.azion.com/en/documentation/products/edge-application/)

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)
