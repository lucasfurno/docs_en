# Edge **Firewall - Edge Functions Instances**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-firewall/edge-functions-instances/index.md)

By activating the Edge *Functions module*, you can instantiate serverless functions in your *Edge Firewall* at Azion, as well as set up the conditions for its execution. Available for *Edge Application* and *Edge Firewall* products, its use allows you to run serveless functions in our robust distributed network of *Edge Nodes*, responding to events closer to the end user, ensuring greater scalability and availability.

> 1. [How it works](#how-it-works)
> 2. [How to set up](#how-to-set-up)
> 3. [Support Documents](#support-documents)

---

## 1. How it works {#how-it-works}

In *Edge Firewall*, you will have to activate the *Edge Functions* module, so it is possible to use existing functions provided by Azion. For example:

* Shieldsquare Bot Manager
* Secure Token
* Function JWT

When instantiating an *Edge Function*, it is not possible to change its source code, just inform the arguments that will be passed to the context of the function's execution, in JSON, through the Args tab.

> The *Args* field in *Edge Functions Instance* supports a maximum of 100KB of arguments.

To associate an execution trigger, you simply need to associate the instance with a *Behavior* of a *Rules Engine* Rule, in *Request*. Thus, when a request meets the criteria defined in the *Rules Engine* rules, *Edge Function* will be invoked and executed directly on Azion's Edges Nodes.

To learn more about how they work and how to apply some of these Edge Functions, visit our [Use Cases](https://www.azion.com/en/documentation/use-cases/).

---

## 2. How to set up {#how-to-set-up}

#### Instantiate and run the functions in your Edge Firewall according to the following steps:

1.  Go to [Real-Time Manager](https://manager.azion.com/) and access the products menu *Edge Computing > Edge  Firewall*;
2.  Select an *Edge Firewall*;
3.  Activate the *Edge Functions* module in *Main Settings*;
4.  In the *Functions* tab, click  on *Add function* to instantiate the function among the options.
5.  Select the *Args* tab, still in *Functions*, and fill in the necessary information.
6.  Click the *Save* button and you will have instantiated the function.
7.  Select the *Rules Engine* tab and click on *New Rule* to add a rule;
8.  Fill in the fields in *Criteria* to condition your rule.
9.  Set, in your rule, in the *Then* field in *Behavior* the option *Run Function* and select the desired option.
10.  Click on  the *Save* button to save you rule and its function will run when there is a HTTP request.

> To follow the invocations of your functions, access *Real-Time Metrics*, we provide real-time information about the performance of your edge Functions there.

---

## 3. Support Documents {#support-documents}

* [Edge Functions](https://www.azion.com/en/documentation/products/edge-functions/)
* [Rules Engine](https://www.azion.com/en/documentation/products/edge-application/rules-engine/)
* [Edge Firewall](https://www.azion.com/en/documentation/products/edge-firewall/)

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)
