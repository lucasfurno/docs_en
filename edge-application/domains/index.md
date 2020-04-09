# *Domains*

Speed up the delivery by keeping your content cached at the edge of the network, closer to your users.

When using Azion Domains you have our SSL certificate for HTTPS traffic, at no additional cost, when using Azion's shared domain.

Automate Domain creation and the set-up processes using our API: [API Azion Domains]({% tl api_v3_domains %})

> 1. [How Does it Work?](#how-does-it-work)
> 2. [CNAME](#cname)
> 3. [Digital Certificates](#digital-certificates)
> 3. [How to set up Azion Domains](#how-to-set-up-azion-domains)

---

## 1. Como funciona? {#how-does-it-work}

Azion Domains is a standard functionality available for all Edge Applications at Azion. When you create an Edge Application set-up at Real-Time Manager you are attributed automatically as domain at "**azioncdn.net**". If you wish, you may use to deliver your static content over HTTPS, avoiding the costs of issuing SSL certificates for approval environments or URLs whose domain can be shared with other Azion customers.

---

## 2. CNAME {#cname}

It is the standard service that is responsible for creating CNAME settings, making it possible to replace the domains at Azion. This configuration is located within the functionality of Azion Domains.

---

## 3. Digital Certificates {#digital-certificates}

To use your domain in HTTPS you will need your own SSL Certificate (X.509). You may, without additional costs, include your SSL Certificates in the Real-Time Manager, on [Digital Certificates] ({% tl documentation_products_edge_applications_digital_certificates %}). 

---

## 4. Como configurar o Azion Domains {#how-to-set-up-azion-domains}

To set up the Azion Domains:

1. Access  [Real-Time Manager](https://manager.azion.com/) and click the menu  **Edge Services** and select **Domains**.
2. After, click on **Add Domain**.
3. A domain at **azioncdn.net** will be generated.
4. Fill the **SSL Certificate** of the domain.
5. Fill the **CNAME** field with the domains, if you wish.
6. Select the **Edge Application** which will receive the domain.

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/edge-application/domains/index.md) on GitHub.