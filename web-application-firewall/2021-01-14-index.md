---
layout: page-documentation-md
title: pages.docs_web_application_firewall.title
description: pages.docs_web_application_firewall.description
meta_tags: pages.docs_web_application_firewall.meta_tags

namespace:     documentation_products_web_application_firewall

permalink:      /documentation/products/web-application-firewall/
permalink_en:   /documentation/products/web-application-firewall/
permalink_pt-br:   /documentacao/produtos/web-application-firewall/
---
# Web Application Firewall

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/web-application-firewall/index.md)

Web Application Firewall protects your applications against threats such as SQL Injections, Remote File Inclusion (RFI), Cross-Site Scripting (XSS) and more. WAF analyzes HTTP and HTTPS requests, detects and blocks malicious acts before they reach your infrastructure and without impacting the performance of your applications.

> 1. *[How it works](#how-it-works)*
> 2. *[Support Documents](#support-documents)*

---

## 1. How it works {#howitworks}

Web Application Firewall is an Azion Edge Firewall’s module, based on the request scoring methodology. Each *http/https* request is compared to a set of extremely restrictive blocking rules and receives a score for each family of threat.

According to the received score by the request, it can be freed or blocked directly in Azion’s Edge Nodes, before the threat reaches its origin. You define the desired sensitivity level to block each family of threat.

To avoid licit requests and malefaction of your application, you must run a learning stage, in which the WAF Rule Set identified legitimate behaviors in your application, inserting them into a *whitelist*.

You can also monitor the behavior and effectiveness of your **Web Application Firewall** settings. Through our **Real-Time Events** and **Data Streaming** tools, Azion offers dashboards and reports for online and real-time event log checks. Furthermore, you may import Azion’s record logs and manipulate them within your own analysis tools.

~~~
To use your WAF Rule Sets resources you need to enable the Web Application Firewall module in the Edge Firewall Rule Set.
~~~

**Operation Modes**

In order to maximize the product’s performance and precision you need the learning stage. You count on two operation modules to help you in this stage:

*   **Counting Mode:** used to specify that the WAF shall not block any request. Your applications’ traffic will be analyzed and the threats found will only be accounted for. Use this mode of operation during the first learning stage.
*   **Blocking Mode:** used to analyze and block found threats, protecting your applications from malicious users. You may run the learning stage every time you deem necessary, even during Blocking Mode.

**Families of Threats**

The threats are categorized in families according to the object of the attack. You can activate or deactivate protection for each family of threat individually according to the protections required by the family of your application and the features it presents.


| Threat Type                  | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| SQL Injections               | Prevents attack attempts by injecting SQL code into the application. |
| Remote File Inclusions (RFI) | Prevents attempts to include files, usually through scripts, on the web server. |
| Directory Traversal          | Prevents exploitation of vulnerability regarding insufficient sanitization of file name fields provided by users, so that characters representing shortcuts to the parent directory are passed through the file API. |
| Cross-Site Scripting (XSS)   | Prevents the injection of client-side scripts into pages viewed by your visitors. |
| File Upload                  | Prevents attempting to upload files to the web server.       |
| Evading Tricks               | Prevents some coding tricks used to try to escape the protection mechanisms. |
| Unwanted Access              | Prevents attempts to access administrative or vulnerable pages, bots and security scanning tools. |
| Identified Attacks           | Prevents several types of common attacks and known vulnerabilities that are certain to be blocked. |

**Sensitivity**

Sensitivity defines the rigor with which the WAF will consider a request as a threat:

- **Lowest**: is a lower level of sensitivity, the request will be considered a threat if it presents very strong evidence and receives a high score. This sensitivity has a lower level of protection for your applications, but it will also avoid blocking requests with less chance of representing threats (false positives).

- **Low**: is a lower level of sensitivity, the request will be considered a threat if it presents very strong evidence and receives a high score. This sensitivity has a lower level of protection for your applications, but it will also avoid blocking requests with less chance of representing threats (false positives).

- **Medium**: is the level of sensitivity recommended by Azion. The request will be considered a threat if it presents sufficient evidence and receives an intermediate score.

- **High**: is the highest level of protection for your application. At the slightest indication of a threat, the request can be blocked, even when it presents a relatively low score. This level of sensitivity may show more false positives, if the learning stage does not have sufficient coverage on the variability of scenarios and uses of its application.

- **Highest**: is the highest level of protection for your application. At the slightest indication of a threat, the request can be blocked, even when it has a very low score. This level of sensitivity may show many false positives, if the learning stage does not have sufficient coverage on the variability of scenarios and uses of its application.

**Rules**

The set of rules which increase the score of a request. The bigger the score, the higher probability of a request to be considered an attack by WAF.

Azion works with an extremely restrictive set of rules to ensure the security of your application. Each rule consists of the following fields.

| Campo            | Descrição                                                    |
| ---------------- | ------------------------------------------------------------ |
| Rule Id          | Unique numeric ID for each rule of the WAF.                  |
| Rule Description | A textual description of what the rule does.                 |
| Match Pattern    | Comparison condition, string or regex, which will be sought in the request. |
| Path             | When specified, restrict the application of the *Match Zone* to the defined *path* only. *Path* delimits the scope of the rule. |
| Match Zones      | Parts or fields of the requisition that will be compared to the *Match Pattern*. These can be:<br/>**Path:** *match pattern* will be compared to the *path* of the request.<br/>**Query String:** *match pattern* will be compared to the *query string*, also called GET *arguments*.<br/>**Request Header:** *match pattern* will be compared to the HTTP headers of the request.<br/>**Request Body:** *match pattern* will be compared to the *body* of a POST, also called POST *arguments*.<br/>**File Name (Multipart Body)**: *match pattern* will be compared to the file names in *multipart POSTs*.<br/>**Raw Body:** *match pattern* will be compared to *body* that was not interpreted from a request, also called *unparsed body*. |
| Attack Family    | The attack family(s) for which the rule increases the score. |

**Whitelist**

It is the list of legitimate behaviors of your application, which should not increase the *score* of requests. It can be generated automatically during the learning stage or manually entered through custom rules.

Each blocking rule has *match zones*, as explained in the Rules section. *Whitelist* aims to disable certain *Match Zones* from a blocking rule.

| Campo                | Descrição                                                    |
| -------------------- | ------------------------------------------------------------ |
| Rule Id              | Unique numeric ID for the blocking rule for which the whitelist was generated. |
| Rule Description     | A textual description of what makes the blocking rule for which the whitelist was generated. |
| Path                 | When specified, restrict the application of the *Whitelist* to the defined *path* only. Path delimits the scope of the whitelist. |
| Whitelist Match Zone | It is the whitelist itself. Defines the part or field of the request for which the blocking rule is to be disabled. <br>**Path:** the rule id will not be applied to the request path.<br/>**Query String:** the rule id will not be applied to the query string, also called GET arguments. It can be restricted to both the name and the value of the arguments. It is possible to limit the scope of the whitelist to a single GET argument using Conditional Query String.<br/>**Request Header:** the rule id will not be applied to the HTTP headers of the request. It can be restricted to both the name and the value of the headers. It is possible to limit the scope of the whitelist to a single HTTP header using Conditional Request Header.<br/>**Request Body:** the rule id will not be applied to the body of a POST, also called POST arguments. It can be restricted to both the name and the value of the arguments. It is possible to limit the scope of the whitelist to a single POST argument using Conditional Request Body.<br/>**File Name** (Multipart Body): the rule id will not be applied to the file name in a multipart POST.<br/>**Raw Body:** the rule id will not be applied to the body that was not interpreted from a request, also called an unparsed body. |
| Status               | The activation status of the rule in the whitelist.          |

---

## 2. Support Documents {#support-documents}

- [Edge Firewall](https://www.azion.com/en/documentation/products/edge-firewall/)

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
