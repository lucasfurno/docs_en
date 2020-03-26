# Edge Caching

Speed up the delivery by keeping your content cached at the edge of the network, closer to your users.

[Edge Caching](https://www.azion.com/pt-br/produtos/edge-caching/) is a standard module for all of your edge applications at Azion. This product reduces the latency and has a high rate of transfer through the *edge network global* and highly distributed of Azion.



> 1. [How Does it Work?](#1-how-does-it-work?)
>
> 2. [Cache Settings](#2-cache-settings)
> 3. [Browser Cache Settings](#3-browser-cache-settings)
> 4. [CDN Cache Settings](#4-cdn-cache-settings)
> 5. [L2 Caching](#5-l2-caching)
> 6. [Advanced Cache Key](#6-advanced-cache-key)



---



## **1. How does it work?**

Azion's Edge Caching is a standard feature available for all Edge Applications at Azion, which guarantees performance and low latency.

Edge Caching is composed of a reverse proxy architecture, through which its users connect to the Edge Nodes of our highly distributed global network, which will be able to cache their content with Edge Caching and further expand its versatility with the L2 Caching add-on.

When a user requests content on the internet, their browser or application starts with DNS resolution to translate the requested domain to an IP address. When using Azion, you will set up the DNS for your web application to point to a generated address when creating a Domain at Azion.

Azion selects, through your SDN Router, the Edge Node closest to the user, reducing latency and increasing the speed of content transfer.

In this architecture, your content or web application needs to be made available from a origin, which can be one or more web servers in your infrastructure, a cloud service or a Cloud Storage of your desire.



---



## **2. Cache Settings**

It is the service responsible for creating Cache configurations, containing several functionalities that expand the way the content is delivered. Cache Settings works with two versions, the first version that focuses on static content, that is, without the need for the enabled Application Acceleration service, and the second version that, through Application Acceleration, extends numerous options to configure the interface Settings Cache.



**To find this service:**

1. Access [Real-Time Manager](https://manager.azion.com/) and click the menu **“Edge Services”** and select **“Edge Applications”**.
2. Add or edit one **“Edge Application”**.
3. Access the tab **“Cache Settings”**.
4. Edit or create one **“Cache Settings”** setting.



---



### **3. Browser Cache Settings**

Browser Cache Settings is the amount of time which the content stays in *cache* on the browser. It is possible to set up Edge Applications to:

**Honor Origin Cache Headers** is the functionality that sends through the origin servers through *HTTP* headers (Cache-Control and Expires) sending the same headers to the browser.

**Override Cache Settings** is the functionality that overrides the cache of the origin server by configuring the *TTL* (*Time to Live*) manually.



---



## **4. CDN Cache Settings**

CDN Cache Settings is the amount of time the Azion’s Edge Applications take to *Cache* the content. 

**Honor Origin Cache Headers** is the functionality that sends through the origin servers through *HTTP* headers (Cache-Control and Expires) sending the same headers to the browser.

**Override Cache Settings** is the functionality that overrides the cache of the origin server by configuring the *TTL* (*Time to Live*) manually.



---



## 5. L2 Caching

L2 Caching is the module that performs the role of intermediary between Azion's global network of Edge Nodes and their Origin. 

An additional layer of cache that reduces traffic to its origin, while increasing performance, availability and decreasing the number of requests at the origin.

<p style="background-color:#ddeef8; color:#1574ba">Attention, the L2 Caching module works with a minimum “TTL” of 2592000 seconds.</p>

To use the L2 Caching module, follow these steps:

1. Access [Real-Time Manager](https://manager.azion.com/) and click the menu **“Edge Services”** and select **“Edge Applications”**.
2. Edit the **“Edge Application”** that wishes to use the module.
3. To enable the **“L2 Caching”** module, continue in the tab **“Main Settings”** and select the option **“L2 Caching”** in the section Edge Application Modules.
4. After enabling the module, access the tab **“Cache Settings”**.
5. Add or edit the **“Cache Settings”** settings which will work with the **“L2 Caching”** layer.
6. Set up the field **“****Default TTL (seconds)”** to the value bigger or equal to **“2592000 seconds”**
7. .Following, enable the option **“L2 Caching”** and save the settings.
8. That’s it, the **“L2 Caching”** module is enabled.



---



## 6. Advanced Cache Key

You can use Azion to deliver your dynamic or static content. Even the dynamic part of a website can often be cached for a user profile, grouped according to the specific needs of your application, whether by city, browsing profile, or shopping profile. If you want your dynamic content to be cached on Azion's Edge Nodes, you can define advanced cache key rules based on Cookies or Query String.

As a standard, Azion considers each URL as a different object in cache. Through the Advanced Cache Key, you can configure a custom cache key rule based on Cookies or Query String and, with that, define the segmentation of your content in your application.

To find this functionality:

1. Access [Real-Time Manager](https://manager.azion.com/) and click the menu **“Edge Services”** and select **“Edge Applications”**.
2. Edit the **“Edge Application”** that wishes to use the module.
3. In the tab Cache Settings, add or edit a custom cache setting.
4. In the Advanced Cache Key section, define your custom Cache by Query String and Cache by Cookie setting.

**Cache by Query String**

At Azion you define how you want the content to be cached according to variations of Query String in your URLs:

* **Content does not vary by Query String (Improves Caching):** defines that the cache key must ignore the Query String, that is, two distinct URLs just by varying the Query String will be considered as the same cached object, for example http://yourdomain.com/path?queryA and http://yourdomain.com/path?queryB will deliver the same cache content to your users.
* **Content varies by some Query String fields (Whitelist):** you can list which Query String fields should be considered to differentiate between objects in the Azion cache. All other fields will be ignored. For example, if you list the field “city”, the URLs http://seudominio.com/path?cidade=A&nome=X and http://seudominio.com/path?cidade=A&nome=Y will be considered as a single object in cache, while URLs http://seudominio.com/path?cidade=A&nome=X and http://seudominio.com/path?cidade=B&nome=X will be considered as different objects.
* **Content varies by Query String, except for some fields (Blacklist):** you can list which fields in the Query String should be ignored when differentiating cached objects. All other fields will be considered. For example, if you list the field “random”, the URLs http://seudominio.com/path?cidade=A&random=123 and http://seudominio.com/path?cidade=B&random=123 will be considered different object in cache, while http://seudominio.com/path?cidade=A&random=123 and http://seudominio.com/path?cidade=A&random=456 will be considered as the same object in cache.
* **Content varies by all Query String fields:** defines that the cache key must consider all Query String fields, that is, two different URLs by the variation of the Query String will be considered as two different cached objects, for example http://yourdomain. com/path?queryA and http://yourdomain.com/path?queryB will be stored as separate objects in the Azion cache.

In addition, to increase the efficiency of the cache, you can activate the Query String Sort functionality. With the Query String Sort functionality enabled, all fields in the query string will be sorted, making the position of the fields irrelevant in the definition of the cache key. If the position of the fields is relevant to differentiate their content, you must leave the functionality disabled.

**Cache by Cookie**

You can also distinguish objects in the Azion cache by name/value of cookies.

* **Content does not vary by Cookies (Improves Caching):** defines that cookies will not be taken into account to differentiate objects in the Azion cache. Only the URL will be considered for differentiating the objects.
* **Content varies by some Cookies (Whitelist):** you can list the name of the cookies that your application uses to differentiate cached objects. All other cookies will be ignored. As a result, you can segment your content by user profiles and more. This is the most recommended option if you use cookies to manage user sessions.
* **Content varies by Cookies, with the exception of a few (Blacklist):** you can list the name of the cookies you want to ignore in the definition of the cache key and, thus, all cookies will be considered, except for those listed.
* **Content varies by all Cookies:** defines that in addition to the URL, all cookies must be considered to differentiate objects in the Azion cache.

Use this functionality to segment your content by user profile, browsing session, access region or according to your content targeting needs.



---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/edge-caching/index.md) on GitHub.