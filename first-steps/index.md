# First **Steps**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/first-steps/index.md)

Welcome to Azion!

Here you will find information on the first steps you need to take to set up your account. Whenever necessary, consult the detailed documentation of Azion products in the side menu.

> 1. [Activate your account](#active-your-account)
> 2. [Create a new Edge Application](#create-new-edge-application)
> 3. [Create a new Domain associated with your Edge Application](#create-new-domain-associated-edge-application)
> 4. [Change your application's DNS to the Domain created](#change-your-application-dns)

---

## 1. Activate your account {#active-your-account}

When you register with Azion you will receive an email to activate your account. In this email you will find instructions for confirming your email address and generating your password. Your email address will be used as a user name to access Azion's web control panel, the [Real-Time Manager](https://manager.azion.com/), where you will be able to manage your account and product settings.

If you do not receive the email, please check your Spam folder. The email should be sent with the following headers.

>From: noreply@azion.com
>
>Subject: Please Verify Your Azion Account

---

## 2. Create a new Edge Application {#create-new-edge-application}

After activating your account, you must create your first Edge Application. To create a new configuration, perform the following steps:

1. Access [Real-Time Manager](https://manager.azion.com/) using your email and password.
2. Fill in the requested fields and save your first Edge Application.

You need to fill in the following fields.

**Name for Application**

Give your Edge Application a suggestive name. This name will be used to identify your configuration. You can use your web application's own domain as a name.

*E.g.: www.azion.com*

**Main Settings**

In this section, the main fields related to the delivery of your applications are defined.

| Field | Description |
|-------|-----------|
| **Delivery Protocol** | Choose the delivery protocol supported by your web application:<br>**HTTP:** if your application only supports the HTTP protocol.<br><br>**HTTP & HTTPS:** f your application supports both HTTP and HTTPS protocols. To use HTTPS, you will need [Digital Certificates]({% tl documentation_products_edge_applications_digital_certificates %}). |

**Origins**

Origins defines the data from its origin. To understand more about how Edge Applications works, what the origins is for, or how to perform more advanced origin settings, see the product's technical documentation.

| Field | Description |
|-------|-----------|
| **Origin Type** | Choose the type of origin:<br>**Single Origin:** if Azion needs to connect to an external origin to fetch data that is not cached.<br><br>**Media Packager:** if Azion needs to connect to Azion Media Packager to deliver, via HLS, its media (audio and video) stored on Azion.<br><br>The fields that follow refer to the origin of the Single Origin type. |
| **Address** | Define the origin address of your application, in FQDN (Full Qualified Domain Name) format, for example origin.azion.com, or IP address.<br><br>By default, Azion will connect at its origin to port 80, for HTTP, or 443, for HTTPS. If you want to configure a different port to connect to your origin, you can use the host:port notation in this field, for example origin.azion.com:8080. See the field below to understand the connection options with your origin.<br><br>You cannot configure as the origin, the same delivery domain used for your content delivery. The origin must have its own address. |
| **Origin Protocol Policy** | In the reverse proxy architecture adopted by Azion, its users connect to Intelligent Edge over HTTP or HTTPS and you choose how you want Azion to connect at your origin:<br><br>**Preserve HTTP/HTTPS protocol:** will keep the same connection protocol (HTTP or HTTPS) and ports used by your user when accessing your content on Azion to connect to your origin.<br><br>**Enforce HTTP:** the connection between Azion’s Edge Nodes and your origin will be through HTTP, regardless of the connection protocol (HTTP or HTTPS) and ports used by your user to access Azion’s content. With this new option, you may customize a port to your origin in the Address field different from the default port (80 for HTTP) if you wish.<br><br>**Enforce HTTPS:** the connection between Azion’s Edge Nodes and your origin will be through HTTPS, regardless of the connection protocol (HTTP or HTTPS) and ports used by your user to access Azion’s content. With this new option, you may customize a port to your origin in the Address field different from the default port (443 for HTTPS) if you wish. |
| **Host Header** |The Host header is used by your origin to identify the virtualhost and locate your content or application. When setting up an origin in Real-Time Manager, you can customize the value that must be sent by Azion in the Host header.<br><br>Use the value *${host}*, in the Host Header field, if your origin is configured to answer to virtualhost for the same domain that is used by its users to access the content on Azion. This way, you will be instructing Edge Nodes to forward the same Host header that is received from your visitors to their origin.<br><br>If necessary, you can fill in a custom value for Host Header to be sent to your origin. For example, origin.domain.com. You must customize the Host Header if your origin is configured to respond to a virtualhost at a domain different than the one used by its users. |

**Cache Settings**

In this section, the cache options for your content will be defined. There are two types of cache:

* Browser Cache is the cache of your content that is stored in your users' browsers. You can define the time-to-live (TTL) for each content, but you have little autonomy to force the content to expire before the time defined as TTL, in case there is a need to change the content ahead of time.
* CDN Cache is your content cache on Azion's Edge Nodes. In addition to being able to set the TTL for each type of content, you will be able to perform the Purge operation of the content in real time, whenever there is a need to delete the data stored in the cache.

| Field | Description |
|-------|-----------|
| **Browser Cache Settings** | Use the *Honor Origin Cache Headers* option if you want Azion to send its users the same cache control headers received from their origin.<br><br>You can also customize the Browser Cache control by selecting the *Override Cache Settings* option. In this case, you must define a **Maximum TTL**, which is the maximum lifetime (in seconds) that the content can be cached in your users' browser. |
| **CDN Cache Settings** | Use the *Honor Origin Cache Headers* option if you want Azion to respect the cache control headers received from your origin, for managing the cache on Azion's Edge Nodes. You can also customize the CDN Cache control by selecting the *Override Cache Settings* option. In this case, you must define a **Maximum TTL**, which is the maximum lifetime (in seconds) that the content can be cached in Azion’s Edge Nodes. You can, at any time, purge the content in real time. |

Don't forget to save your configuration by clicking the **Save**.

>If desired, you can edit your newly created Edge Application to see the advanced options.

---

## 3. Create a new Domain associated with your Edge Application {#create-new-domain-associated-edge-application}

After creating your first edge application, you must associate one or more domains so that your users can have access:

1. Access [Real-Time Manager](https://manager.azion.com/) using your email and password.
2. Click on the menu > Edge Services > Domains.
3. Click on the Add Domain button.
4. Fill in the requested fields and save your configuration.

You need to fill in the following fields.

**Add Name Configuration**

Give your Edge Application a suggestive name. This name will be used to identify your configuration. You can use your web application's own domain as a name.

*Ex.: www.azion.com*

**Settings**

In this section, the main fields related to the delivery of your applications are defined.

| Field | Description |
|-------|-----------|
| **Digital Certificate** | If you selected *HTTP & HTTPS* during the creation of your edge application, you must select the SSL certificate that will be used to encrypt your HTTPS traffic. Azion provides the certificate *Azion (SAN)* that can be used for the domains below *azioncdn.net.*<br>You can also upload your Custom Certificate at any time. Consult the [technical documents]({% tl documentation_products_edge_applications_digital_certificates %}#custom-certificate) on how to do it. |
| **CNAMEs** | Configure the list of delivery domains (CNAMEs) for your content or application. If necessary, you can use Wildcard Domain (* *.yourdomain.com*).<br>*E.g.: www.azion.com* |
| **CNAME Access Only** | By default, all Domain configurations are automatically assigned a domain name below *azioncdn.net*.<br>By checking this option, you will be configuring the Edge Application to deliver your content or applications only through the domains listed in the CNAME field. |
| **Edge Application** | In this field you select the edge application that you want to associate with this delivery domain. |

## 4. Change your application's DNS to the Domain created {#change-your-application-dns}

After associating a Domain to your Edge Application, you will see a list of existing settings in your account.

For each configuration created, a **Domain Name** is automatically assigned below the * *.ha.azioncdn.net*.

You will need this domain to approve the operation of your new configuration. To put your configuration into production, you will have to make a note of the domain of your content to the Domain Name assigned to your configuration, through a CNAME type record on your DNS server.

>You must carefully approve your content and web application before directing the DNS to Azion's Domain Name.

---

To continue learning about Azion products, consult the navigation menu on the left hand side and in the header, or perform a search using the keywords on the [Azion for Developers]({% tl documentation %})home page.

---

Didn't find what you were looking for? [Open a support ticket](https://tickets.azion.com/).
