# Load **Balancer**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/load-balancer/index.md)

To achieve high levels of fault tolerance and performance, it is necessary to guarantee the availability of your content and applications even in the event of incidents with your original servers. Azion Load Balancer allows balancing traffic to your origins, data centers or cloud providers, avoids network congestion and overloading your servers. In addition, it detects failures and provides multiple algorithms that allow you to distribute the load to the available infrastructures, ensuring the best experience for your users and results for your company.

> 1. [Load Balancer Features](#FuncionalidadesLoadBalancer)
> 2. [How to set up Load Balancer](#ComoConfigurarLoadBalancer)

---

## 1. Load Balancer Features {#FuncionalidadesLoadBalancer}

With Azion Load Balancer you add multiple origins to your content, select the load balancing method that best suits your needs and customize timeouts and error handling.

**Balancing Method**

You can select the balancing method that defines how the load will be distributed among its origins:

* Round-Robin: defines the balancing algorithm in rotation. It takes into account the volume of requests and not the time that each source takes to respond. Each origin will receive a load in proportion to its weight in the round robin. Slower origins may accumulate more connections in parallel.
* Least connections: keeps track of the number of active connections with each origin and always sends the next request to the origin with the fewest connections. Thus, slower origins will receive fewer requests, while faster origins will be able to attend more requests sequentially.
* IP Hash: maintains a control by the user's IP address and tries, whenever possible, to associate the same origin for each IP.

**Host Header**

The Host header is used by your origin to identify the *virtualhost* and locate your content or application. When setting up an origin in Real-Time Manager, you can customize the value that must be sent by Azion in the Host header.

If this field is left blank, Azion will use, by default, the same address defined in the Address field. Leave the Host Header field blank if your origin is configured to respond to *virtualhost* by the same address that is configured in DNS.

You can fill in a custom value for Host Header to be sent to your origin. For example, *www.azion.com*. You must customize the Host Header if your origin is configured to respond to a *virtualhost* at an address other than the one configured in DNS.

Or, you can use the variable *$host* in the Host Header field, to instruct the Edge Nodes to pass on to the origin the same Host header received from your visitors. Use this set up if you multiple *virtualhosts* being replied by the same origin.

**Origin Path**

If you need that the Edge Nodes of Azion request the content of your origin in a different URL path, you may define an Origin Path. Azion will concatenate the Origin Path with the URI requested by the user.

The definition of the Origin Path is optional. If it is not defined, it will only consider the URI.

For example, if in your origin the whole content is under the path */secure*, though this path is not shown in the URL for your users, you may define the */secure* as the Origin Path in your origin settings. The rest of the path will be preserved, in accordance with the user’s request.

**Origin Protocol Policy**

Azion’s delivery architecture allows you to customize the desired type of connection of the Edge Nodes to your origin:

* **Preserve HTTP/HTTPS protocol:** will keep the same connection protocol (HTTP or HTTPS) and ports used by your user when accessing your content on Azion to connect to your origin.
* **Enforce HTTP:** the connection between Azion’s Edge Nodes and your origin will be through HTTP, regardless of the connection protocol (HTTP or HTTPS) and ports used by your user to access Azion’s content. With this new option, you may customize a port to your origin in the Address field different from the default port (80 for HTTP) if you wish.
* Enforce HTTPS: the connection between Azion’s Edge Nodes and your origin will be through HTTPS, regardless of the connection protocol (HTTP or HTTPS) and ports used by your user to access Azion’s content. With this new option, you may customize a port to your origin in the Address field different from the default port (443 for HTTPS) if you wish.

**Multiple Origins**

You must add multiple origins to achieve high levels of availability and prevent an incident from impacting the availability of your content and applications.

* **Address:** IP address or hostname of your origin. You may customize your origin, if you defined the Origin Protocol Policy in Enforce HTTP or Enforce HTTPS, using the notation *host:port*.
* **Weight:** you may define a weight for each origin. This weight defines the proportion of load that the origin will receive. If you set the weight of an origin to 3, for example, it will receive 3 times more load than an origin with a weight set to 1.
* **Server Role:** if the balancing method you select is Round-Robin or Least connections, you can define Server Role for each origin: Primary or Backup. The Backup origins will act and *standby* origins and only receive the load if all Primary origins fails.
* **Active:** to remove a server from balance temporarily for maintenance, you can disable it by clearing the Active checkbox. At least one active origin is required for the content to be available.

**Variation by *Errors* and *Timeouts***

Azion Load Balancer will verify the origins respecting the balancing and weight methods attributed by you. If any origin returns a 404 error (Not Found), a 5xx error or takes longer than the timeouts pre-defined by Azion to respond, the other origins will be consulted before returning any error to its users.

The default values for Azion Load Balancer timeouts are:

* Connection: 60 seconds timeout in the connection establishments with the origin.
* Between Bytes: 120 seconds timeout between bytes in a connection already established.

---

## 2. How to set up Load Balancer {#ComoConfigurarLoadBalancer}

To set up Azion Load Balancer:

1.  Access [Real-Time Manager](https://manager.azion.com/) and click the menu Edge Application.
2.  Edit the desired Edge Application.
3.  At the tab Origins, add or edit an origin to your content.
4.  Select Load Balancer as Origin Type and set up Method and add addresses.
5.  After saving, access the tab Rules Engine to edit or add rules for one of more *paths*
6.  In the Behavior section, select Set Origin and use the origin you created in steps 3 and 4

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
