# DDoS **Protection**

Azion DDoS Protection protects your content and applications from Distributed Denial of Service (DDoS) attacks.

Through a modern approach to detect and mitigate attacks from the network, transport and application layers, we reduce downtime without impacting the performance of your service.


> 1. [DDoS Protection Plans](#1-ddos-protection-plans)
> 2. [Standard DDoS Protection](#2-standard-ddos-protection) 
> 3. [Managed DDoS Protection](#3-managed-ddos-protection)
> 4. [Modalities Comparison](#4-modalities-comparison)

---

## 1. DDoS Protection Plans

The service is offered in Standard and Managed modalities. All Azion customers benefit from protection against DDoS attacks in the Standard modality, without the need to hire our [Support](documentation_products_support) service and without any additional costs.

| Developers  | Mission critical business |
|------------------|----------------------------|
| Developers and small businesses, whose online presence and availability is not critical to business results. | Companies that use Azion in a production and mission critical environment and need a resilient and highly available service. |
| Recommended plan: Standard | Recommended plan: Managed |

---

## 2. Standard DDoS Protection

The Azion Standard DDoS Protection protects your content, web applications and APIs, when delivered over the Azion network, from the most common DDoS attacks in the network and transport layers (layers 3 and 4), such as volumetric attacks, Slow Reads and SYN/ACK flood.

Your traffic is monitored in real time using anomaly analysis algorithms and traffic signatures to quickly detect and protect the availability of your content, with automatic attack mitigation, without impacting delivery latency.

**Cost and benefit**

When using Azion, you benefit from Standard DDoS Protection, our always-on protection against DDoS attacks, at no additional cost and without the need for any configuration or parameterization of the service. Your service will be protected against the most frequent DDoS attacks on the network and transport layers, up to a limit of 5Gbps. To protect against attacks of any other volume and to protect your infrastructure, see Managed DDoS Protection.

**Integration and simplicity**

All attack mitigation techniques are automated and built across Azion's content delivery network, offering you the necessary protection against the most common attacks, without you having to configure or parameterize anything. Our distributed POPs and our global attack mitigation centers are prepared for large-scale global attacks, without you having to do anything.

**Always-on mitigation**

Azion’s always-on Standard DDoS Protection continuously monitors network flow by inspecting incoming traffic and using Deep Packet Inspection (DPI), in addition to advanced traffic analysis and signature algorithms, to detect and block malicious traffic in time without any impact to your applications.

You can also mitigate DDoS attacks on the application layer (layer 7) by contracting [Azion WAF]({% tl documentation_products_web_application_firewall %}) and [Azion Edge Firewall]({% tl documentation_products_edge_firewall %}), services, which you pay according to your usage or contracted modality.

---

## 3. Managed DDoS Protection

For a higher level of protection, in addition to all the features of the Standard modality, Managed DDoS Protection has extra features for detection against more sophisticated and large-scale attacks and is integrated with Azion Edge Firewall and Azion WAF. In addition, through the Infrastructure Protection add-on, you can protect your entire infrastructure (ASN), and through the DNS Protection add-on, you can protect your DNS service.

Managed DDoS Protection allows for 24×7 access to Azion's Security Response Team (SRT), upon contracting Mission Critical Support, in addition to providing cost protection during attacks.

**Flexible and customizable protection**

With Managed DDoS Protection, Azion will be able to apply customized rules to mitigate sophisticated attacks from the network, transport and application layers. These rules can be applied instantly, allowing quick and efficient protection of your content or application.

With the support of our SRT, you can proactively write attack mitigation rules using Azion WAF and Edge Firewall, and apply them via Real-Time Manager or API whenever necessary.

**Protection tailored to your needs**

The Managed DDoS Protection modality can be contracted for plans with an attack volume of 20 Gbps, 50 Gbps or Unlimited in addition to available add-ons.

| 20 Gbps  | 50 Gbps  | Unlimited\* |
|----------|----------|-------------|
| Suitable for medium sized companies, it offers protection against DDoS attacks of up to 20 Gbps. | Suitable for medium and large companies, it offers protection against DDoS attacks of up to 50 Gbps. | Indicated for companies that use Azion in mission critical systems, with a direct impact on the business results, and who want protection against any attack volume for their content and applications. |


> \* * Limited to the 4 Tbps the capacity currently available on Azion.

**Advanced detection**

Azion Managed DDoS Protection offers advanced detection, inspecting network flows, as well as monitoring each application layer for its resources delivered by Azion using Azion WAF and Azion Edge Firewall. It uses advanced algorithms and SDN to allow granular detection and mitigation of DDoS attacks. Azion Managed DDos Protection detects attacks such as HTTP floods, HTTP Slow Reads, DNS query floods, SYN/ACK Flood and many others.

**Mitigation of complex attacks**

In addition to the benefits of the Standard modality, Azion Managed DDoS Protection offers more sophisticated algorithms for automated attack mitigation. Using advanced routing techniques, Managed DDoS Protection offers an additional level of automated protection against higher volume DDoS attacks.

For application layer attacks, you will need Azion WAF to create advanced rules to automatically block malicious requests and Azion Edge Firewall to configure proactive blacklist or network whitelist rules, geolocation or rate limit, or create standby rules to be used in response to incidents as they happen.

**Protection of your infrastructure**

The Infrastructure Protection add-on allows you to protect your own infrastructure (ASN) from DDoS attacks. The mitigation of DDoS attacks against your infrastructure is performed using BGP and can be activated during an attack or it can always remain on (always-on). To ensure security against application layer attacks, in addition to Azion WAF we also suggest the use of Azion Origin Shield to ensure that access to your infrastructure is always done through Azion.

**Protection for your DNS**

The DNS Protection add-on allows you to protect your DNS service from DDoS attacks. By keeping your DNS Master server hidden and disseminating Azion's DNS servers to the internet, you will rely on Azion to ensure the continuity of your services. The Azion DNS service is distributed in different geographic regions and has protection against DDoS attacks. Azion's DNS servers obtain the configuration of the client's Master server, whether it is inside their infrastructure or in the cloud. If your infrastructure already uses the DNSSEC extension, you can count on DDoS protection without giving up the guarantee of integrity and authenticity of your records, thus providing security and availability for address resolution for your business.

**Attack visibility**

Azion Managed DDoS Protection offers complete visibility of application attacks through the Real-Time Manager or API to be able to view the volume of attacks. In conjunction with the SRT you will have access to post-event analysis and investigations.

**Security Response Team (SRT)**

If you choose the Mission Critical support plan in conjunction with Managed DDoS Protection Unlimited, you will have 24×7 access to Azion's Security Response Team (SRT), which can be triggered during or after an attack, or even earlier for support in building proactive rules.

Whenever triggered, the SRT will assist you in tracing incidents, identifying the root cause and applying the necessary mitigations on your behalf.

**Cost protection**

Managed DDoS Protection includes Cost Protection for its Azion services, a measure to guarantee against the increase in your costs with Azion resulting from a volumetric attack.

If the use of any of your Azion services expands in response to a DDoS attack, Azion will provide service credits to avoid surplus charges for peak usage.

---

## 4. Modalities Comparison

| Functionalities | Standard | Managed |
|------------|----------|--------------|
| Network flow analysis (layers 3 and 4) | Yes | Yes |
| Always-on detection of attacks           | Yes | Yes |
| Mitigation of most the common DDoS attacks (layers 3 and 4) | Yes | Yes |
| Attack volume (layers 3 and 4) | Up to 5 Gbps | Up to 20 Gbps |
| | | Up to 50 Gbps |
| | | Unlimited   |
| Customization of rules for more sophisticated attacks (layers 3 and 4) | - | Yes |
| Cost protection to avoid excess traffic charges in case of volumetric attacks  | - | Yes |
| Protection against layer 7 attacks, such as SQL Injection, XSS, RFI, Resource Exhaustion and others | Yes * | Yes * |
| Customization of rules to mitigate attacks from the application layer (layer 7) | Self-service * | Self-service or with SRT support * |
| Notification of network and transport layer attacks (layers 3 and 4) | - | Yes |
| Post-event analysis of network and transport layer attacks (layers 3 and 4) | - | Yes, upon contracting Mission Critical Support |
| 24×7 access to the SRT  | - | Yes, upon contracting the Unlimited and Mission Critical Support attack volume |
| Protection for your infrastructure (BGP) | - | Yes, upon contracting the Infrastructure Protection add-on |
| Protection for your DNS (Slave DNS/DNSSEC) | - | Yes, upon contracting the DNS Protection add-on |
| Contracting model | Included | Reserved Capacity (minimum of 12 months) |



> \* Requires Azion WAF and Edge Firewall

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)

[Edit this page](#) on GitHub.