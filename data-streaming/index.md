# Data **Streaming**

Data Streaming is an Edge Analytics product that allows you to feed your SIEM, big data and stream processing platforms with access to your content and applications data, in real time, adding even more intelligence to your business.

This integration allows you to analyze the behavior of your users and the performance of your content, applications and troubleshooting, in a simple and agile way.


  > 1. [Data Sources](#1-data-sources)
  > 2. [Template](#2-template)
  > 3. [Domains](#3-domains)
  > 4. [Endpoint](#4-endpoint)

---

## 1. Data Sources

The first step is choosing the Data Source, which represents the application at Azion that generated the event logs, for this, you must select where your data will be collected from.


* **Edge Applications**: requests from your users to your Edge Applications at Azion.
* **WAF Events**: if you have contracted the [Web Application Firewall](https://www.azion.com/pt-br/docs/produtos/web-application-firewall/) product, the data source WAF Events will present the requests analyzed by WAF.

---

## 2. Template

The template represents a selection of variables to be collected and a format for transfer. You can select templates created and maintained by Azion or customize your own selection.

When selecting the "Custom Template" option, it is possible to create your own customized Data Set, in JSON format, and select the variables that best suit your needs.

See the documentation that follows for a description of the available variables: [*Fields*](https://www.azion.com/pt-br/docs/produtos/data-streaming/fields/)

Your events will be grouped in blocks of up to 2,000 registrations separated by the character \ n, and sent in the payload to your endpoint. Data Streaming will send your events when the block reaches 2000 records or every 60 seconds, whichever is reached first.

---

## 3. Domains

You can associate Data Streaming with one or more of your domains registered with Azion.

When associating a domain with Data Streaming, the events associated with that domain will be collected and sent to its endpoint.

---

## 4. Endpoint

The Endpoint is the destination where you want to send the data collected by Azion.

The endpoint type represents the method that your endpoint is configured to receive data from the Data Streaming.

**Standard HTTP/HTTPS POST**

The use of this type of endpoint, causes the Data Streaming service to send data in the payload of an HTTP POST, for processing on the platform.

* **Endpoint URL** 

  The URL configured on the platform to receive Data Streaming data. Use the format *scheme://domain/path*.

* **Custom Headers** 

  You can enter one or more custom headers for your HTTP / HTTPS request. For the configuration of the headers, it is necessary to inform the Name and Value for each header.

**Apache Kafka**

The use of this type of endpoint, causes the Data Streaming service to send data to a Kafka endpoint in its infrastructure.

* **Bootstrap Servers** 

  The servers in the Kafka cluster, in the format "host1: port1, host2: port2, ...". The list does not need to contain all the servers in your cluster, just a few servers that will be used for the initial connection. We recommend that you use more than one server to increase redundancy and availability.

* **Topic** 

  You need to define a Topic where you want Data Streaming to post messages to your cluster.

**Simple Storage Service (S3)**

The use of this type of endpoint, makes the Data Streaming service send data directly to any storage that works with the S3 protocol, such as Amazon S3, Cloud Storage, among others.

* **Host URL** 

  The URL of the Host S3. You can connect with any provider that works with the S3 protocol.

* **Bucket Name** 

  The name of the Bucket that the object will be sent to. It is important that the Bucket is already created so that Data Streaming can send the objects.

* **Region** 

  The region in which the Bucket is hosted. For example, "us-east-1".

* **Access Key** 

  The key to access the Bucket.

* **Secret Key** 

  The secret key to access the Bucket.

* **Object Key Prefix** 

  A prefix for the sent files. For example "waf_logs", then all sent objects will be saved with `"waf_logs_ <TIMESTAMP> _ <UUID>"`.

* **Content Type** 

  The format that the object will be created in, in the Bucket. Having "plain/text" and "application/gzip" as options.

---

Didn't find what you were looking for? [Open a support ticket](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/data-streaming/index.md) on GitHub.
