# Edge **Firewall**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-firewall/index.md)

Azion Edge Firewall is a security product that gives protection from the network layer to the application layer. Your Azion security team presents you with the most advanced resources for protecting your applications against all types of attack, all in one place.

With Edge Firewall, you can extend your security perimeter to the edge of the network, as your access control rules are processed directly through the Azion Edge Network, closer to users, which helps prevent undesirable requests from reaching your origin or getting access to your applications.

Because it is a programmable, modular and extendible firewall, it allows you to choose the modules that suit your needs.

With this you can: 

- Create *whitelists*, *blacklists* and *greylists* based on either the IP/CIDR address or the ASN or location of the user;
- Protect your applications from the *Tor* network; 
- Limit the access rate to an application to avoid *brute force* attacks;
- Mitigate Denial of Service attacks (*DDoS*);
- Protect applications from *OWASP* Top 10 threats;
- Add your own source code protection or content access controls, to be run from Edge Firewall;
- Integrate third party software, for running in Edge Firewall. For example, market leading solutions to combat *credential stuffing*, *account takeover attempts*, *price* and *contact scraping* etc.

> 1. [How does it work?](#how-does-it-work)
> 2. [Edge Firewall Modules](#edge-firewall-modules)
> 3. [Support Documents](#support-documents)

---

## 1. How does it work? {#how-does-it-work}

When you use Azion as your edge computing platform, you can set up security settings in Edge Firewall to protect your applications.

These settings in Edge Firewall, called Rule Sets, are sets of security rules that will be applied to a group of domains. You can use the same Rule Set on all your applications that have the same security policy.

An Edge Firewall Rule Set consists of a series of domains that are subject to it, modules that must be applied and security rules configured in the Rules Engine.

The Edge Firewall modules provide the tools that you use: Network Layer Protection, Web Application Firewall and Edge Functions. You need to have at least one active module to use this product and, to be certain that your applications are protected at every layer, we recommend that you activate them all.

After you have activated the modules you want, you need to configure your security rules in the Rules Engine. The rules that you configure will be run in sequence until the request is blocked or restricted, or until all your rules have been executed, which will release the request. The request's data stream is only passed to your edge application if none of your Edge Firewall rules block or reject the request, ensuring that malicious requests don't reach your application.

Each rule is made up of Criteria and Behaviors. The Behaviors are only executed if the Criteria are met. For example, you can set up rules to block requests that come from IPs that are on a Blacklist, or even make up rules to exclude IPs that are on a Whitelist. In this example, “block” is the Behavior, while the Criteria is that the IP of the request is on the Blacklist and not on the Whitelist.

Which criteria and behaviors are available in Edge Firewall, depends on which modules have been activated in the Rule Set.

---

## 2. Edge Firewall Modules {#edge-firewall-modules}

The Azion Edge Firewall has the following modules, so that you can build high performance, scalable, safe edge applications, much more simply and without heavy maintenance.

### [DDoS Protection](https://www.azion.com/en/documentation/products/ddos-protection/) 

The DDoS Protection module secures your content and applications against *Distributed Denial of Service* (*DDoS*) type attacks. By using a modern approach to detect and mitigate attacks on the network, transport and application layers, we reduce the downtime without affecting your service’s performance.

---

### Edge Functions

Edge Functions are components of Azion’s Edge Computing Platform, which enable serverless functions to be added to your applications, relieving your infrastructure, performing functions closer to the user, ensuring the necessary agility and scalability to meet your business objectives.

You benefit from having a microservice-based architecture, which easily allows functions to be created that can run close to the users.

You can still use *third-party* security solutions to protect sensitive data and applications against attacks at the edge of the network.

---

### [Network Layer Protection](https://www.azion.com/en/documentation/products/network-layer-protection/)

This module gives you the option to create filters for IP/CIDR addresses, ASNs or countries (*geolocation*), by configuring Network Lists and setting up business rules to check criteria and block or release, as needed, which are specified in the Rules Engine of Edge Firewall.

Network Layer Protection works within layers 3 and 4 of the OSI model and it is a powerful tool that is a secure and efficient option when it comes to protecting your business against attacks and undesirable user access.

####  **Origin Shield Add-on**

With this Azion Edge Firewall add-on you can set up a security perimeter around your origin infrastructure, whether that be in the cloud, hosted or your own datacenter. The service enables your origin to be able to restrict access to specific IP addresses from our network and block any other access to your origin.

---

### [Web Application Firewall](https://www.azion.com/en/documentation/products/web-application-firewall/)

Web Application Firewall (WAF) protects your applications against threats such as SQL Injections, Remote File Inclusion (RFI), Cross-Site Scripting (XSS) and many others. The WAF analyses HTTP and HTTPS requests, detects and blocks threats before they can reach your infrastructure and affect your applications performance.

---

## 3. Support Documentation {#support-documentation}

- [Edge Firewall Rules Engine](https://www.azion.com/en/documentation/products/edge-firewall/rules-engine/)
- [Network Lists](https://www.azion.com/en/documentation/products/edge-firewall/network-lists/)
- [WAF Rule Sets](https://www.azion.com/en/documentation/products/edge-firewall/waf-rule-sets/)
- [Access Permissions](https://www.azion.com/en/documentation/products/edge-firewall/access-permissions/)

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
