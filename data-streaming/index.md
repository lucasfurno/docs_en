# Data **Streaming**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/data-streaming/index.md)

Data Streaming is an Edge Analytics product that allows you to feed your SIEM, big data and stream processing platforms with access to your content and applications data, in real time, adding even more intelligence to your business. 

This integration allows you to analyze the behavior of your users and the performance of your content, applications and troubleshooting, in a simple and agile way.


  > 1. [Accessing Data Streaming](#AccessingDataStreaming)
  > 2. [Selecting Data Sources](#SelectingDataSources)
  > 3. [Using a Template](#UsingaTemplate)
  > 4. [Associating Domains](#AssociatingDomains)
  > 5. [Setting the Endpoint](#Settingtheendpoint)
  > 6. [Activating your Settings](#ActivatingyourSettings)

---

## 1. Accessing Data Streaming{#Accessing-data-streaming}

Enter [Real-Time Manager](https://manager.azion.com/). Click on *Data Streaming* either under Edge Analytics or through the top left menu. 

Now enjoy real-time data integration. Configure your Data Streaming according to the following possibilities. 

> Fields marked with an asterisk are mandatory. 



## 2. Selecting Data Sources {#selecting-data-sources}

The first step is choosing the Data Source, which represents the application at Azion that generated the event logs. By doing so, you must select where your data will be collected from. You have the following options:


* **Edge Applications**: requests from your users to your Edge Applications at Azion.
* **WAF Events**: if you have contracted the [Web Application Firewall](https://www.azion.com/en/documentation/products/web-application-firewall/) product, the data source WAF Events will present the requests analysed by WAF.

---

## 3. Using a Template {#using-a-template}

The template represents a selection of variables to be collected and a format for transfer. You can select templates created and maintained by Azion or customize your own selection.

* **Custom Template:** Choose the *Custom Template* option to create your own customized Data Set, in JSON format, and select the variables that best suit your needs. 

  **Learn more:** In **[Fields](https://www.azion.com/en/documentation/products/data-streaming/fields/)** you'll find a description of all the available variables. Give it a try.

Your events will be grouped in blocks of up to 2,000 registrations separated by the character \ n, and sent in the payload to your endpoint. Data Streaming will send your events when the block reaches 2000 records or every 60 seconds, whichever occurs first.

---

## 4. Associating Domains {#Associating-domains}

You can associate Data Streaming with one or more of your domains registered with Azion.

When associating a domain with Data Streaming, the events associated with that domain will be collected and sent to its endpoint.

To streamline your analysis, you can even filter by *Sampling*. Ideal for companies with a large number of domains.

* **Sampling:** Set the percentage of requests you want to receive from the total of your domains.

  Select the *All Domains* option. In the *Sampling* field, enter an integer to obtain the desired percentage.

---

## 5. Setting the Endpoint {#Settingtheendpoint}

The Endpoint is the destination where you want to send the data collected by Azion.

The endpoint type represents the method that your endpoint is configured to receive data from the Data Streaming. Get to know each of them as follows: Standard HTTP/HTTPS POST; Simple Storage Service - S3; and Apache Kafka.

### **Standard HTTP/HTTPS POST**

By using this type of endpoint, the Data Streaming service sends data in an HTTP POST payload to be  processed on your platform.

* **Endpoint URL:** Refers to the URL configured on the platform to receive Data Streaming data.

   Use the format *scheme://domain/path*.

* **Custom Headers:**  You can enter one or more custom headers for your HTTP / HTTPS request. 

  For the headers configuration, you have to inform the *Name* and *Value* for each header.

### **Simple Storage Service (S3)**

By using this type of endpoint, the Data Streaming service sends data directly to any storage that works with the S3 protocol, such as Amazon S3, Cloud Storage, among others.

* **Host URL:** Refers to the URL of the Host S3.

  You can connect with any provider that works with the S3 protocol.

* **Bucket Name:** Refers to the name of the Bucket that the object will be sent to.

  It is important that the Bucket is already created so that Data Streaming can send the objects.

* **Region:**  Refers to the region in which the Bucket is hosted. 

  For example, "us-east-1".

* **Access Key:** Refers to the key to access the Bucket.

* **Secret Key:** Refers to the secret key to access the Bucket.

* **Object Key Prefix:**  Refers to a prefix for the sent files. 

  For example "waf_logs", then all sent objects will be saved with `"waf_logs_ <TIMESTAMP> _ <UUID>"`.

* **Content Type:** It's the format that the object will be created in the Bucket. 

  You count on the *plain/text* and *application/gzip* options.

### **Apache Kafka**

By using this type of endpoint, the Data Streaming service sends data to a Kafka endpoint in your infrastructure.

* **Bootstrap Servers:**  Refers to the servers in the Kafka cluster, in the format "host1: port1, host2: port2, ...". 

  The list should have just a few servers that will be used for the initial connection. There is no need to include all the servers in your cluster.  

  We recommend that you use more than one server to increase redundancy and availability.

* **Kafka Topic:**  You have to define a Topic where you want Data Streaming to post messages to your cluster.

## 6. Activating your Settings{#Activatingyoursettings}

You will find the following buttons at the bottom of the screen:

* **Active:** Turn on the *Active* button to enable your settings on the system. 

* **Cancel:** With this option, you return to the Data Streaming home page, discarding your edits. 

* **Save:** Once your selections are complete, save your settings by clicking the *Save* button. 

> Attention! **Save** your changes before leaving the page. 
>
> The system does not automatically save your changes. 

Harness all of your potential through the resources designed by Azion for your business.



---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)