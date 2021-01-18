# Edge **Caching**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-caching/index.md)

Speed up the delivery by keeping your content cached at the edge of the network, closer to your users.

[Edge Caching](https://www.azion.com/pt-br/produtos/edge-caching/) is a standard module for all of your edge applications at Azion. This product reduces the latency and has a high rate of transfer through the *edge network global* and highly distributed of Azion.

> 1. [How Does it Work?](#how-does-it-work)
> 2. [Cache Settings](#cache-settings)
> 3. [Browser Cache Settings](#browser-cache-settings)
> 4. [CDN Cache Settings](#cdn-cache-settings)
> 5. [L2 Caching](#l2-caching)
> 6. [Slice Settings](#slice-settings)
> 7. [Advanced Cache Key](#advanced-cache-key)

---

## 1. How does it work?  {#how-does-it-work}

Azion's Edge Caching is a standard feature available for all Edge Applications at Azion, which guarantees performance and low latency.

Edge Caching is composed of a reverse proxy architecture, through which its users connect to the Edge Nodes of our highly distributed global network, which will be able to cache their content with Edge Caching and further expand its versatility with the L2 Caching add-on.

When a user requests content on the internet, their browser or application starts with DNS resolution to translate the requested domain to an IP address. When using Azion, you will set up the DNS for your web application to point to a generated address when creating a Domain at Azion.

Azion selects, through your SDN Router, the Edge Node closest to the user, reducing latency and increasing the speed of content transfer.

In this architecture, your content or web application needs to be made available from a origin, which can be one or more web servers in your infrastructure, a cloud service or a Cloud Storage of your desire.

---

## 2. Cache Settings {#cache-settings}

It is the service responsible for creating Cache configurations, containing several functionalities that expand the way the content is delivered. Cache Settings works with two versions, the first version that focuses on static content, that is, without the need for the enabled Application Acceleration service, and the second version that, through Application Acceleration, extends numerous options to configure the interface Settings Cache.

To find this service:

1. Access [Real-Time Manager](https://manager.azion.com/) and click the menu **Edge Services** and select **Edge Applications**.
2. Add or edit one **Edge Application**.
3. Access the tab **Cache Settings**.
4. Edit or create one **Cache Settings** setting.

---

## 3. Browser Cache Settings {#browser-cache-settings}

Browser Cache Settings is the amount of time which the content stays in *cache* on the browser. It is possible to set up Edge Applications to:

**Honor Origin Cache Headers** is the functionality that sends through the origin servers through *HTTP* headers (Cache-Control and Expires) sending the same headers to the browser.

**Override Cache Settings** is the functionality that overrides the cache of the origin server by configuring the *TTL* (*Time to Live*) manually.

---

## 4. CDN Cache Settings {#cdn-cache-settings}

CDN Cache Settings is the amount of time the Azion’s Edge Applications take to *Cache* the content. 

**Honor Origin Cache Headers** is the functionality that sends through the origin servers through *HTTP* headers (Cache-Control and Expires) sending the same headers to the browser.

**Override Cache Settings** is the functionality that overrides the cache of the origin server by configuring the *TTL* (*Time to Live*) manually.

---

## 5. L2 Caching {#l2-caching}

L2 Caching is an additional layer of cache between the Azion Edge and its origin that helps to further reduce the load on your infrastructure. When accessing your applications on Azion, your user accesses our highly distributed network capable of performing edge caching. When you activate L2 Caching in your edge applications, you have a second layer of cache that will be responsible for feeding the edge, keeping your content in the cache for as long as you determine.

L2 Caching was designed principally for objects that can be cached for a long time. So, you can only activate it in cache policies with time-to-live (TTL) equal to or greater than 30 days (2592000 seconds).

Whenever necessary, you can use Real-Time Purge to expire your L2 Caching content before the estimated TTL time. Remember to expire first on L2 Caching and then later on Edge Caching, to avoid edge feedback with outdated L2 content.

> Attention, the L2 Caching module works with a minimum “TTL” of 2592000 seconds.

To use the L2 Caching module, follow these steps:

1. Access [Real-Time Manager](https://manager.azion.com/) and click the menu **Edge Services** and select **Edge Applications**.
2. Edit the **Edge Application** that wishes to use the module.
3. To enable the **L2 Caching** module, continue in the tab **Main Settings** and select the option **L2 Caching** in the section Edge Application Modules.
4. After enabling the module, access the tab **Cache Settings**.
5. Add or edit the **Cache Settings** settings which will work with the **L2 Caching** layer.
6. Set up the field ******Default TTL (seconds)** to the value bigger or equal to **2592000 seconds**
7. .Following, enable the option **L2 Caching** and save the settings.
8. That’s it, the **L2 Caching** module is enabled.

---

## 6. Slice Settings {#slice-settings}

Slice is an Edge Application feature that allows the processing of large amounts of data in a more effective way, reducing latency and saving bandwidth. By activating this feature, the file or media itself is reduced to small pieces. Such fragments are gradually delivered to the end-user according to the data consumption, avoiding a transfer rush that might not be finalized by the end-user. The data is cached on demand whenever the user requires it.

Slice is not only restricted to Azion's Edge Nodes. It is possible to apply the feature on L2 modules, which allows content to be cached longer, delivering on-demand content to the end-user, increasing performance and availability.

> *By definition, Slice operates with the Edge Caching Layer. However, it is also possible to activate an extra layer of caching by enabling the [L2 Caching](https://www.azion.com/en/documentation/products/edge-caching/#l2-caching).*

This feature is activated in the Edge Application section of the Real-Time Manager menu:

1. Access [Real-Time Manager](https://manager.azion.com/) with your login information.
2. Within the **Edge Computing** section of the Menu, select **Edge Application**.
3. Click on the desired existing Edge Application or [create one](https://www.azion.com/en/documentation/products/first-steps/#create-new-edge-application).
4. Select the **Cache Settings** tab and click on the determined Cache Settings list.
5. On that page, look for the **Slice Settings** section. Once you've located it, **enable it**. The Edge Caching box will be automatically ticked.
6. In case you'd like to enable **L2 Caching**, tick the box.

---

## 7. Advanced Cache Key {#advanced-cache-key}

You can use Azion to deliver your dynamic or static content. Even the dynamic part of a website can often be cached for a user profile, grouped according to the specific needs of your application, whether by city, browsing profile, or shopping profile. If you want your dynamic content to be cached on Azion's Edge Nodes, you can define advanced cache key rules based on Cookies or Query String.

As a standard, Azion considers each URL as a different object in cache. Through the Advanced Cache Key, you can configure a custom cache key rule based on Cookies or Query String and, with that, define the segmentation of your content in your application.

To find this functionality:

1. Access [Real-Time Manager](https://manager.azion.com/) and click the menu **Edge Services** and select **Edge Applications**.
2. Edit the **Edge Application** that wishes to use the module.
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
