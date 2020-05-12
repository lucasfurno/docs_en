# Azion Edge Firewall: multi-layered security in **Edge**
[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/use-cases/edge-firewall/index.md)

For online service providers like e-commerce, internet banking and media businesses, investing in security is as important as investing in the development of new applications, websites or integrating APIs. Every day, new threats are discovered and, in order to protect yourself from the activities of cybercriminals, it is necessary to constantly update security policies and adopt internet security tools, such as firewalls.

The high cost of maintaining an environment, that can both support a large number of requests and, at the same time, be protected from external threats, can make business expansion unfeasible. What’s more, they may be essential, but traditional security solutions can use up a lot of your infrastructure’s important resources, which can result in a loss of performance. Edge computing solutions, with their real-time processing, are a way you can both guarantee your applications’ security and maintain performance, at an affordable cost.

## Real-time Security with Edge Computing 

The Azion Edge Firewall is a multi-layered security platform that provides Edge Computing solutions to keep your applications, APIs and websites safer. By running directly at the edge of the network, our solutions are highly scalable and capable of dealing in real time with the OWASP Top 10 Vulnerabilities, mass attacks (DoS and DDoS) and even “zero-day” vulnerabilities, without any drop in performance by your services.

See how the Azion Edge Firewall can help you:

* **Network Layer Protection**: constructs a security wall around your content, web applications and the source infrastructure. Protect yourself form the sort of data theft that can cause huge financial and reputational harm to your company, blocking malicious attacks through smart rules that include network blocking (black and white lists of IP addresses, ASN numbers, countries or regions), limiting transfer rates, and more.
* **Web Application Firewall** (WAF): create highly customizable rules, with real-time configuration updates, to protect any type of web application, including e-commerce, CMS or internet banking, against OWASP's Top 10 vulnerabilities, including critical attacks on the application layer, such as **SQL Injection**, or new and evolving threats;
* Azion's **DDoS Protection** is the result of our globally distributed network and expertise in security, providing you with the skills and capacity you need to mitigate the risk from even the biggest and most complex of attacks, both at the network and the application layers;
* **Edge Functions: create and configure security functions, such as ReCaptcha, JWT, Web Token and Bot Protection among others, and protect the information that is important to your competitive strategy, such as price and content, from malicious attacks that consume bandwidth, increase traffic and compromise applications, as well as damaging your SEO ranking.

## How it works 

Before you begin, make sure that the **_Edge Firewall_** service and its modules are active on your Azion account. If not, please get in contact with our commercial team to access the service.

To show how it works, we will configure **_Edge Firewall+** for an e-commerce store (domain name - www.myecommerce.com, which must be pre-configured within **_Edge Application_**), as an example, and demonstrate how we will prevent a particular malicious website from redirecting traffic from our store. For this, we will configure a rule within **_Edge Firewall_** to block _Header HTTP Referer_.

From **_Real-Time Manager_**, create a new configuration of **_Edge Firewall_** or edit an existing one. We will need to include our domain, www.myecommerce.com on the **_Main Settings_** tab, so that it can be protected by the rule. Save your rule set and next add a **_New Rule_** on the **_Rules Engine_** tab. Choose a name in the **_Rule Engine_** and define the activation criteria (Criteria). In our example we are going to use the variable **_Header Referer_**, the operator **_matches_** and, for the string comparison, a fictitious address for a malicious site http://www.malicioussite.com.

Next, we simply configure a task in **_Behavior_** for our rule, in this case we use the option **_Deny (403 Forbidden)_**. With this, we have established a rule by which every request to our shop, that originates from the site http://www.malicioussite.com will be blocked and will return the status code HTTP 403.

To take advantage of everything that Azion **_Edge Firewall_** has available, make sure you activate all the modules within **_Edge Firewall_**, on the **_Main Setting_**s tab, through **_Real-Time Manager_**. Contact our Solutions team for more details.


---

Didn’t find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
