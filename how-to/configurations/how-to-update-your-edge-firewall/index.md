# **How to update your Edge Firewall**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/how-to/configurations/how-to-update-your-edge-firewall/index.md)

In this document, we will indicate the features used in the deprecated versions, showing how to bring them to the latest version. To learn more about new features, and how to use them, see the [product page](https://www.azion.com/en/products/) and [documentation](https://www.azion.com/en/documentation/products/edge-firewall/).

Rule Sets deprecated from Edge Firewall show the following banner:  *"**This Edge Firewall rule set is deprecated. Please upgrade to the new version.**"*.

[![banner]({{ site.url }}/static/images/docs/update-edge-firewall/banner.jpg)]({{ site.url }}/static/images/docs/update-edge-firewall/banner.jpg)

> 1. [What has changed?](#what-has-changed?)
> 2. [Assigning your Rule Sets to the latest version of Edge Firewall](#assigning-rule-sets)
> 3. [Support Documents](#support-documentation)

---

## 1. What has changed? {#what-has-changed?}

Until now, the use of a Rule Set from Edge Firewall or WAF was through activation of Edge Firewall and Web Application Firewall modules in the Main Settings tab of each Edge Application and subsequent use of Behaviors **Set Edge Firewall Rule Set** and **Set WAF Rule Set** in the Edge Application Rules Engine.

Edge Firewall has become an independent product that concentrates all security features: **DDoS Protection**,  **Network Layer Protection**, **Web Application Firewall**, and **Edge Functions**.

> Before update your version of the **Edge Firewall** it is necessary to have the latest version of the **Edge Application** product.

---

## 2. Assigning your Rule Sets to the latest version of Edge Firewall {#assigning-rule-sets}

To use the latest Azion Edge Firewall, follow the steps below, each section describes how each feature works on the new modules, Network Lists, and Rules Engine.

### Step 1 - Creating new rule sets in Edge Firewall

First, you need to create a Rule Set and new rules based on pre-existing rules. Through the process, we will explain how each feature works on the latest version:

#### Create Edge Firewall Rule Set:

1. Access [Real-Time Manager](https://manager.azion.com/) and enter the **Edge Services** > **Edge Firewall** menu. 
2. You will see the main interface where you can create and manage your **Edge Firewall** rule sets.
3. Siga os passos abaixo de acordo com a funcionalidade:


#### Referrer Blocking

[![referer-blocking]({{ site.url }}/static/images/docs/update-edge-firewall/referer-blocking.jpg)]({{ site.url }}/static/images/docs/update-edge-firewall/referer-blocking.jpg)

If you used **Referer Block** in your deprecated rule set, in the new rule set:

1. Enable the module **Web Application Firewall**.
2. Then, follow the tab **Rules Engine** in **Criteria**, and select **Header Referer**.
3. Add the domain of the old Rule Set with the condition **Header Referer**, using the comparator **does not match**.
4. For each domain in **Accepted Domains** of the old Rule Set, add an **AND** rule by repeating step 3.
5. In **Behavior**, select the Behavior **Deny 403**.

#### Geo-Blocking

[![geo-blocking]({{ site.url }}/static/images/docs/update-edge-firewall/geo-blocking.jpg)]({{ site.url }}/static/images/docs/update-edge-firewall/geo-blocking.jpg)

If you used **Geo-Blocking** in your deprecated rule set, in the new rule set:

1. Access the [Real-Time Manager](https://manager.azion.com/) and enter the **Libraries** > **Network Lists** menu.
2. Add or edit a **Network List**.
3. In the **Type** option, select **Countries**.
4. Copy the list of countries from the deprecated rule set to **Network Lists**.
5. In the **Edge Firewall**, enable the **Network Layer Protection** module.
6. On the **Rules Engine** tab, create a new **Rule** and select **Criteria: Network**.
7. Choose a logical operator where **Match** means Blacklist and **Does not Match** means Whitelist.
8. Then, select the **Country** type of **Network List** created in steps 3 and 4.
9. In **Behavior**, select the Behavior **Deny 403**.

#### Secure Token

[![secure-token]({{ site.url }}/static/images/docs/update-edge-firewall/secure-token.jpg)]({{ site.url }}/static/images/docs/update-edge-firewall/secure-token.jpg)

If you used **Secure Token** in your deprecated rule set, in the new rule set:

1. Enable the module **Edge Functions**.
2. In the **Functions** tab, select **Add function** to instantiate a **Secure Token** Edge Function.
3. Fill in the information and use the editor to customize Function **Args** to define the secret that composes the hash.
4. On the **Rules Engine** tab, define a **Criteria** that will be used on **Edge Function**.
5. In **Behavior** select **Run Function**, then select **Secure Token** function, created in steps 2 and 4.

#### IP Blocking

[![ip-blocking]({{ site.url }}/static/images/docs/update-edge-firewall/ip-blocking.jpg)]({{ site.url }}/static/images/docs/update-edge-firewall/ip-blocking.jpg)

If you used **IP Blocking** in your deprecated rule set, in the new rule set:

1. Access the [Real-Time Manager](https://manager.azion.com/) and enter the **Libraries** > **Network Lists** menu.
2. Add or edit a **Network List**.
3. In the **Type** option, select **IP/CIDR**.
4. Copy the list of IP`s from the deprecated rule set to **Network Lists**.
5. In the **Edge Firewall**, enable the **Network Layer Protection** module.
6. On the **Rules Engine** tab, create a new **Rule** and select **Criteria: Network**.
7. Choose a logical operator where **Match** means Blacklist and **Does not Match** means Whitelist.
8. Then, select the **IP/CIDR** type of **Network List** created in steps 3 and 4.
9. In **Behavior**, select the Behavior **Deny 403**.

#### Rate Limiting

[![rate-limiting]({{ site.url }}/static/images/docs/update-edge-firewall/rate-limiting.jpg)]({{ site.url }}/static/images/docs/update-edge-firewall/rate-limiting.jpg)

If you used **Rate Limiting** in your deprecated rule set, in the new rule set:

1. Select the **Rules Engine** tab.
1. Then, define the **Criteria** for your Rule Set.
2. In **Behavior**, select **Set Rate Limit**.
3. Set the number of requests per second in the **Average Rate Limit**.
4. Set to **Client IP** Address or **Global**.
5. After, set the **Maximum burst size**.

#### Association of Domains to the new Rule Set

After making the settings associate one or more domains to the new **Rule Set**:

1. Edit the new **Rule Set** of the **Edge Firewall**.
2. In the **Domains** section, select domains that will be associated with the **Rule Set** in Main Settings.
3. **Save** to apply the configuration.

#### WAF Rule Set Association

After making the settings associate your **WAF Rule Set** to the new Rule Set. You can use the WAF Rule Sets the same way. However, they pass from the **Edge Application** to the **Edge Firewall** Rules Engine:

1. Edit the new **Rule Set** of the **Edge Firewall**.
2. Enable the module **Web Application Firewall**.
3. On the **Rules Engine** tab, add or edit a Rule.
4. Set the **Criteria** to condition the use of the **WAF Rule Set**.
5. In **Behavior** select **Set WAF Rule Set** and choose a WAF Rule Set.
6. **Save** to apply the settings.

### Step 2 - Removing the Edge Firewall rules in the Edge Application

After creating and applying the Rule Sets for the latest version of Edge Firewall for your domain, remove the Rules in Edge Application:

1. Access the [Real-Time Manager](https://manager.azion.com/) and enter the **Edge Services** > **Edge Application** menu. .
2. Edit an **Edge Application** with the **Edge Firewall** configuration.
3. On the **Rules Engine** tab, identify the **Behaviors Set Edge Firewall** with **Rule Sets** or **Set WAF Rule Set**.
4. Then, remove the **Behavior** from **Edge Application**.

---

## 3. Support Documentation {#support-documentation}

- [Edge Firewall](https://www.azion.com/pt-br/documentacao/produtos/edge-firewall/)

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
