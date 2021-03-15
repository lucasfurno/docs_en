---
layout: page-documentation-md
title: pages.docs_use_case_serverless_functions.title
description: pages.docs_use_case_serverless_functions.description
meta_tags: pages.docs_use_case_serverless_functions.meta_tags

namespace:     docs_use_case_serverless_functions

permalink:      /documentation/use-cases/serverless-functions/
permalink_en:   /documentation/use-cases/serverless-functions/
permalink_pt-br:   /documentacao/casos-de-uso/funcoes-serverless/
---
# Running Serverless Functions in **Edge**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/use-cases/serverless-functions/index.md)

Edge Functions is a service of Azion's Edge Computing platform that allows you to program and execute serverless functions, without the need to provision or manage servers.

With the Hello World Edge Function, for example, you can create a specific function to create a display for any page, for example, displaying an error or status, or even to deliver HTML containing a JSON object, that enables you to monitor the status of a particular service in real time.

Here are some other uses for Edge Functions: 

* Inspect Headers and Authorized Tokens, enabling Access Control before forwarding requests to the origin;
* Manipulating cookies;
* Sending different objects to your users based on the User-Agent header;
* Generating responses without having to necessarily forward the request to the origin, and so on.

## How it works

You can create your own functions or use any of those already available from the [Azion Marketplace](http://marketplace.azion.com/). To demonstrate how it works, we will explain the steps for creating a Hello World function. 

First install the Hello World function within your Edge Application and configure the desired response through the parameters of the relevant function (*Args*). When a request reaches the Edge, the validation criteria are assessed, and, if all requirements are met, the function will be run.

Next, we are going to show you an example where we want to display a status page with a service temporarily unavailable notice (www.myapplication.com/api_service, for example), created by using the Hello World Edge Function. 

## Configuring the Hello World function

Edge Function Hello World is available from the function library of Azion's Edge Computing platform and can be accessed through Real-Time Manager (RTM), from the *Libraries* menu.

To run the function, it must be installed in the relevant **Edge Application** and its activation criteria and behaviors must be defined within the **Rules Engine**.

## Creating an Instance

**Path:** Real-Time Manager > Edge Computing > Edge Applications > Sua Edge Application (Your Edge Application) > Functions.

From the RTM, go to the Edge Application that will run your function and, within the Functions tab, add a new function and give it a distinctive name (MyHelloWorld, to illustrate our example). 

**Parameters:** it is necessary to select which function to use for your instance; in this case, choose the Hello World option, in the "Edge Function" field. Note that the function code that appears in the Code field, is just for information. On the Args tab, enter the HTTP code and the desired response message - see example below - and save the function. 

~~~
{
    "param":{
        "http_status": 503,
        "body": "We are working hard to serve you better!"
    }
}
~~~
Example of the configuration of JSON Args parameters

## Defining the Execution criteria (Rules Engine)

**Path:** Real-Time Manager > Edge Computing > Edge Applications > Sua Edge Application (Your Edge Application) > Rules Engine.

The rules (as defined in the Rules Engine) determine the set of conditions that need to be met for Behaviors to be executed. You can either use the Default Rule or create a new rule after setting the validation parameters and the behaviors that the Edge Application will execute.

**Defining validation Criteria:** choose the variables, comparison operators and strings to create your business rule, as in the following example:

* **If**: _${uri}_ **starts with** ***/api_service***
(In order: logical operator, variable, comparison operator, string)

Here, the rule is executed if the URL accessed starts with the string “/api_service”.

**Defining Behaviors:** add the behaviors you want to be carried out when the rule's conditions are met. For Example:

* **Then**: ***Run Function*** **MyHelloWorld**
(In order: logical operator, action, function)

In this example, if the conditions defined in the rules are satisfied, then the function MyHelloWorld will be executed. Therefore, when the user accesses the URL "www.myapplication.com/api_service", the function will run, and the message will be displayed as set.

Finally, save your Edge Application and the new function will be ready.

---

Didn’t find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
