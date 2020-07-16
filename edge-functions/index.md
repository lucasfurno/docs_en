# Edge **Functions**

[Edite no GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-functions/index.md)

Azion Edge Functions allows you to create serverless applications to event-oriented, at the edge of the network, closer to users.

With Edge Functions, you can perform serverless functions in response to events on Edge Nodes of our network. Without having to provision or manage servers. 

You can use functions to handle HTTP in the following Request and Response phases:

- As soon as a user's requests are received in the Edge Node (Viewer Request)
- Before Azion Edge Node forwards the Request to Origin (Origin Request)
- As soon as Edge Node gets the response from Origin (Origin Response)
- Before Azion Edge Node forwards the response to the user (Viewer Response)

You can also generate Responses without necessarily having to forward the request to the origin.

Using Edge Functions written in **Lua** and **JavaScript** on Azion's Edge Computing platform, you can create a variety of solutions, for example:

- Inspect cookies to rewrite URLs to different versions of a site for A/B testing.
- Send different objects to your users based on the User-Agent header, which contains information about the device that submitted the request. For example, you can send images in different resolutions to users based on their devices.
- Inspect headers or authorized tokens, inserting a corresponding header and allowing access control before forwarding a request to the origin.
- Add, delete, and modify headers and rewrite the URL path to direct users to different cache objects.
- Generate new HTTP responses to do things like redirect unauthenticated users to login pages, or create and deliver static webpages right from the edge.

See more ways to use Edge Functions in [Use Cases](https://www.azion.com/en/documentation/use-cases/).

> 1. [How does it work?](#how-does-it-work)
> 2. [How to use?](#how-to-use)
> 3. [Hands-on](#hands-on)
> 4. [Support Documentation](#support-documentation)

---

## 1. How does it work? {#how-does-it-work}

Create your custom functions or use any of the existing ones provided by azion, both for Edge Application or Edge Firewall. The languages currently supported by the platform are **Lua and JavaScript**.

Edge Functions run in the treatment of the request, and the Azion Edge Computing Platform provides a Rules Engine model that can trigger the execution of the Edge Functions code according to the treatment phases. 

The language-specific Runtime provides a programming interface for interacting and manipulating Request and Response objects to implement the necessary logic.

When instantiating an Edge Function, you can enter parameters that will be passed to the function, in [JSON](https://www.json.org/) format, through arguments. You can also define and run tests online to validate its construction.

Edge Functions are performed directly on Azion Edges infrastructure. To use them, just be associated with a Behavior in the Rules Engine. Thus, when a request meets the criteria defined in the Rule Engine rules, the trigger to run the Edge Function will be triggered.

---

## 2. How to use? {#how-to-use}

Write your custom functions or use any of the ready-to-use provided by Azion or Independent Software Vendors. Through Real-Time Manager, in Libraries. You can create Edge Functions and maintain a repository of functions that can be used at the Edge Application or Edge Firewall. Consult the Runtime API according to the Runtime chosen for writing the Edge Function.

### Create Edge Functions

Use the Runtime API of your preferred language to write Edge Functions.

Using the Runtime Environment JavaScript, Edge Functions written by the user go directly into production without undergoing an internal review because code runs on limited to isolated resources.

The Edge Functions code written in Lua undergoes a thorough review by our software engineers before going into production. Our goal is to ensure the security and correct use of the Edge Computing platform. We review your code according to the following criteria:

- Use of global variables that are not allowed. Due to the multi-tenant environment, the Edge Function Lua code should avoid using global variables and shared memory
- blocking HTTP calls. Every call to an external service must use the HTTP protocol through asynchronous APIs so that the process is not blocked
- The Code or Lib must also pass the luacheck tests.

For more details of each Runtime API and code samples, see the documentation for [Runtime APIs](https://www.azion.com/en/documentation/products/edge-functions/runtime-apis/).

### Edge Functions Instances

According to its initiator type, before associating an execution trigger with Edge Function, it must be instantiated in Edge Application or Edge Firewall. With the Edge Functions module enabled, through the **Functions** tab, you can instantiate your Edge Functions for later use in a Rules Engine Rule.

To learn more about Edge Functions Instances, access the [Edge Application](https://www.azion.com/en/documentation/products/edge-application/edge-functions-instances/) and [Edge Firewall](https://www.azion.com/en/documentation/products/edge-firewall/edge-functions-instances/) documentation.

### Edge Functions Metrics

Through Real-Time Metrics, we provide real-time information about the performance of your Edge Functions.

To access the graphs, follow these steps:

1. Access the [Real-Time Manager](https://manager.azion.com/) and enter the **Data Services** menu and select **Real-Time Metrics**, then click **Edge Functions**.
2. View information such as the number of invocations per instance of Edge Function.

Read more about [Real-Time Metrics](https://www.azion.com/en/documentation/products/real-time-metrics/).

---

## 4. Hands-On Step by step to create an Edge Function{# hands-on}

To see your Edge Function  effectively in production you just need to write, instantiate and associate it with a Behavior _Run Function_, in a Rule in Rules Engine:

1. Access the [Real-Time Manager](https://manager.azion.com/) and enter the Libraries menu, select Edge Functions.


2. Add a new _edge function_ by clicking the _Add Function_ button.


3. In Language, select ***JavaScript***.

   ~~~
    let a = Math.floor(Math.random() * 10);
    if (a > 5) {
        let coin = JSON.parse('{ "flip a coin": "heads"}');
        AzionSetResponse(JSON.stringify(coin));
    } else {
        let coin = JSON.parse('{ "flip a coin": "tails" }');
        AzionSetResponse(JSON.stringify(coin));
    }
   ~~~


4. Access an Edge Application and Enable the Edge Functions Module, 


5. On the ***Rules Engine*** tab, create or edit a Rule and in the ***Behavior*** section, in the **field *Then***, select "Run Function" and associate the desired **Edge Function**. 


6. Example of response when running the Behavior Run Function:

   ~~~
   {"flip a coin":"heads"}
   ~~~


7. Use ***Real-Time Metrics*** to track metrics such as, for example, the number of invocations of Edge Functions instances.

---

## 4. Support Documentation{#documentacao-de-suporte}

- Edge Application - Edge Functions Instances
- [Edge Application Rules Engine](https://www.azion.com/en/documentation/products/edge-application/rules-engine/)
- Edge Firewall - Edge Functions Instances
- [Edge Firewall Rules Engine](https://www.azion.com/en/documentation/products/edge-firewall/rules-engine/)

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
