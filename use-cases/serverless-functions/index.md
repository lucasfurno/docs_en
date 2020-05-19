# Serverless functions running on the **Edge**

With edge computing (or **_Edge Computing_**) and its Serverless functions (Edge Functions), it is now possible to dispense with the configuration of servers and the use of computing clouds (or Cloud Computing). From a simple "Hello World" to complex scenarios, there are many case possibilities that can be built and processed directly in **_Edge Nodes_**.

From serverless functions running on the edge, it is possible to configure automatic responses to requests, create static sites with dynamic navigation and many other options, in a decentralized manner, with high availability, low latency, high transfer capacities and a better user experience as well as devices that trigger them (IoT's for example).

## Hello World! This is an Edge Function

The **_Edge Function Hello World_** is a serverless function on Azion's **_Edge Computing_** platform. Create automated responses for API gateways, FAQs, landing pages, error pages, test pages and many other features that will execute the business rules directly on **_Edge Nodes_**, load client-side scripts and run functions locally, thereby freeing up precious computing resources for essential services for your business. 

The page you are currently viewing is the result of running a **_Hello World_** edge function. Entirely built on Edge, this is an example of how static pages can be configured to respond to API requests, for example, thus reducing queries to the origin. Here we show an example of a query to the website **_httpbin.org_**, showing some information about the origin of the request, such as the origin IP and the user-agent.

Your origin IP:

~~~
{
  "origin": "201.48.49.113, 201.48.49.113"
}
~~~

Your User-agent:

~~~
{
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 
(KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
}
~~~

## How it works

Before you start, make sure that the Edge Functions service is active in your Azion account and that you already have the **_Hello World_** function in your Edge Functions Libraries. If not, contact our sales team to enable the service. The operation is very simple, just instantiate a Hello World function inside your **_Edge Application_** and configure the desired response through the parameters that the function receives (**_Json Args_**).

To configure your Function Hello World, edit the Edge Application to which you want to assign this service, making sure that the **_Edge Function_** option is enabled in the **_Main Settings_** tab. Next, go to the **_Functions_** tab and add a new **_Hello World_** function, providing a meaningful name for your custom function (for example MyHelloWorld), because it is through this name that your Function will be identified later in the configuration of the Rules Engine behavior. Note that the function code will appear in the **_Code_** section, for reading and understanding only. 

In the **_Json Args_** tab, enter the function parameters in JSON format: Return message status (http_status) and message body (body), as in the example below. 

~~~
{
    "param":{
        "http_status": 200,
        "body": "Hello World! It works!"
    }
}
~~~

In the **_Rules Engine_** tab, use the Default Rule or create a new rule with a validation criterion (**_criteria_**) to activate your function, and in the **_Behavior_** section, select Run Function and choose the **_MyHelloWorld Function_** that you created.

---

Didn’t find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/use-cases/serverless-functions/index.md) on GitHub.