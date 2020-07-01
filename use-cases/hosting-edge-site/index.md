# Hosting an Edge Site

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/use-cases/hosting-edge-site/index.md)

For a web page to be available on the internet, some type of hosting service is required, be it local or in the cloud. Through the *Edge Computing* serverless functions, it is possible to process and deliver sites directly at the edge of the network (edge sites), without the need to use a source infrastructure to store these files.

Error pages or status pages are some examples of pages that can be built on the edge, to be able to, for example, inform in real time the situation of a given service, thus freeing up infrastructure resources, in addition to acting in a decentralized manner, with high availability and low latency.

## Hosting an Edge Site with the Azion platform

Azion's edge computing platform offers serverless functions that allow for the creation and processing of edge sites directly on our edge nodes, without having to access any source infrastructure.

Through our edge function Hello World, you can create error or status pages, with low latency while meeting hundreds of thousands of simultaneous requests.

It is also possible to combine edge sites with Azion edge services. Thus, you can implement security logics for the availability, authentication and mitigation of bots, in addition to allowing for the consultation of real time events (*Real Time Events*), among other possibilities. With *Data Streaming* services, it is possible to send access logs to the Edge Site for SIEM and Big Data systems, including log servers (Kafka, Logstash for example), on a local infrastructure or cloud storage service (for example Amazon S3 , Google Cloud).

## How it works

To describe the creation of an edge site in Azion, we will illustrate a case in which you want to present a status page with a temporary service unavailability notice (www.myapplication.com/api_service, for example), by configuring the function *Hello World*. Before you start, make sure that the Edge Functions service is active in your Azion account and that you already have the Hello World function in your Edge Functions Libraries. If not, contact our sales team to enable the service. 

**Understanding the process**

The operation is very simple, just instantiate a *Hello World* function inside your *Edge Application* and configure the desired response through the parameters that the function receives (*Json Args*). When a request arrives at the edge, the validation criteria are evaluated, and if all requirements are met the function will be executed.

**Configuring the function Hello World**

To configure your Function Hello World, edit the Edge Application to which you want to assign this service, making sure that the Edge Function option is enabled in the *Main Settings* tab. Next, go to the *Functions* tab and add a new *Hello World* function, providing a meaningful name for your custom function (for example MyHelloWorld), because it is through this name that your Function will be identified later in the configuration of the Rules Engine behavior. Note that the function code will appear in the *Code* section, for reading and understanding only. 

In the *Json Args* tab, enter the function parameters in JSON format: status of the return message (http_status) and message body (body), as in the example below.

~~~
{
    "param":{
        "http_status": 503,
        "body": "We are working hard to serve you better!"
    }
}
~~~

In the *Rules Engine* tab, we will define the function's activation criteria, creating a new rule with a validation criterion (criteria) to activate your function. 

The criterion to be used will select the accesses to the service address that will be unavailable, in our example “www.myapplication.com/api_service”. Select the "*starts with*" option in the options box in the center and fill in the field to the right with the expression "/ api_service". 

In the *Behavior* section, select Run Function and choose the *Function MyHelloWorld* that you created, as it is the one that will present the desired response. Click Save, and the configuration of the status page in Edge is ready. To disable the created status page, simply disable the rule engine created within the Edge Application.

---

Didn’t find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)