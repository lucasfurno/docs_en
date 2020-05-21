# Network Layer Protection

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/network-layer-protection/index.md)

Azion's Network Layer Protection allows you to create watch lists based on the network (IP / CIDR), users’ locations or ASNs, or use the automatic lists that are maintained and updated by Azion, such as the address lists of Tor networks. Thanks to this, you can block or monitor suspicious behavior or apply restrictions, e.g. access limits, giving your network layer protection at the edge from all inbound and outbound traffic. If your infrastructure includes a security tool, like SIEM, you can use the Network Lists API to keep you blacklists and whitelists up to date.

> 1. *[How does it work?](#how-does-it-work)*
> 2. *[Network Lists](#network-lists)*
> 3. *[Origin Shield](#origin-shield)*
> 4. *[Support Documents](#support-documents)*

---

## 1. How does it work? {#how-does-ir-work}

When you set up the Network Layer Protection module in the “Main Settings” of a Rule Set in Edge Firewall, the Criteria **“Network”** and the Behaviors **“Deny”**, “Drop” and **“Set Rate Limit”** will be enabled on the “Rules Engine” tab of the Rule Set.

You can use the Criteria **“Network”** to create rules for watch lists based on the network, the user location or ASNs, or even, pre-prepared lists that Azion itself keeps up to date; like, for example, the outbound addresses of the Tor Network: **Azion IP Tor Exit Nodes.** In this way, you can block or monitor suspicious behavior or apply restrictions, such as access limits. 

If you activate other modules through the Rule Set, you can access any number of combinations of criteria and behaviors in the Rules Engine. For example, Network Layer Protection and Web Application Firewall - If: **Network** *matches* My-Country-BlackList *And* **Header User Agent** (an exclusive Criteria from the Web Application Firewall module) *does not match* Googlebot Then: **Deny**. In this case, any requests that originate in countries that are on the blacklist will be blocked, unless the user-agent header contains the term "Googlebot".

Which criteria and behaviors are available in Edge Firewall, depends on which modules have been activated in the Rule Set. If it has been set up in the Edge Firewall Rule Set, the Network Layer Protection module also enables the **Rules Engine Criteria**: Hostname, Request URI, and Scheme.

---

## 2. Network Lists {#network-lists}

Network Lists enables you to create, look up or update Network Lists that are being used in the Rules Engine of Edge Firewall. You can add and maintain your own lists in Network Lists, using the Real-Time Manager or the API. Each Network List can also be linked to more than one Rule or Rule Set in Edge Firewall. Whenever the Network List is updated, the update will be automatically cascaded to all of the Rules that are linked to it. To find out more and learn how to use it, check the [Network Lists](https://www.azion.com/en/documentation/products/edge-firewall/network-lists) support documents.

---

## 3. Origin Shield {#origin-shield}

With this Azion Edge Firewall add-on you can set up a security perimeter around your origin infrastructure, whether that be in the *cloud*, *hosted* or your own *datacenter*. The service enables your origin to be able to restrict access to specific IP addresses from our network and block any other access to your origin.

Our IP address list can be updated regularly, but any updates will only authorize new servers for those who are using the Origin Shield add-on, four days after the list is published. Therefore, we suggest that you automatically check our IP list and update your edge filters whenever it receives any updates, so there is no problem with service availability.

To ensure you are protected from attacks targeting your origin, we suggest you use **Azion’s DDoS Protection - 20Gbps, 50 Gbps or Unlimited,** with the **Infrastructure Protection add-on**, which will safeguard your ASN via BGP, using Azion’s distributed network.

---

## 4. Support Documents {#support-documents}

- [Edge Firewall](https://www.azion.com/en/documentation/products/edge-firewall/)

---

Can't find what you were looking for? [Open a support ticket](https://tickets.azion.com/)
