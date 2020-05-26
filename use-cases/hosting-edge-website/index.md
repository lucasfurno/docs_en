# Hosting an Edge **website**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/use-cases/hosting-edge-website/index.md)

Landing page, error page, test page, institutional and campaign sites, are some examples of pages that can be built directly in ***Edge Computing*** architecture, the so-called ***Edge Sites***, thereby dispensing with processing at the origin by applications, such as Wix or Wordpress, as a Service or hosted on clouds like Amazon EC2, Azure, etc. 

***Edge sites***, because they are built and processed using serverless functions (***Edge Functions***), offer a series of benefits, such as freeing up infrastructure resources, decentralized operations, high availability, low latency, high transfer capacities, all this to provide the best user experience.

## Edge Sites in the Azion platform

Through Azion's ***Edge Computing*** platform and its serverless functions, you can create ***Edge Sites*** that will be processed and delivered directly to our ***Edge Nodes***. It is also possible to create push scripts (JSON, XML or configurations) for remote devices (IoT Devices), all with low latency and attending to hundreds of thousands of simultaneous requests.

It is also possible, when combining Azion's ***Edge Sites*** with ***Edge Services***, to implement security logics for availability, bot mitigation and authentication, in addition to allowing real time events to be consulted (***Real Time Events***), among other possibilities. With ***Data Streaming*** services, it is possible to send access logs to the ***Edge Site*** for SIEM and Big Data systems, including log servers (Kafka, Logstash for example), on a local infrastructure or cloud storage service (for example Amazon S3, Google Cloud).

## How it works

For the creation of an ***Edge Site*** in Azion, it is necessary to define a repository (Origin) through the ***Edge Application***, as well as the business rules of the application. From there, Azion takes care of processing the business rules defined in the ***Edge Application*** (Cookies, Redirects, Match groups, A/B Test, Multi language, etc.), security (Geo Block, CORS, Network lists, WAF, Captcha, Bot mitigation, etc.) and delivering your website. For a better understanding, we will explain how the Azion website you are now viewing is published.

Our portal (https://www.azion.com) is published from an automated process of integration with GitHub, basically composed of three elements: a repository on GitHub to control the version of the site, a repository (bucket) in a Cloud Storage and an ***Edge Application*** at Azion which is executing all the business and security rules, originating from that bucket.

The contents of the website are published via automation with GitHub, which in turn propagates changes to the file bucket, which is configured within an Azion ***Edge Application***. Thus, when any portal page is accessed, it is the ***Edge Application*** that handles the request and delivers the requested content.

## Setting up the configurations of your Edge Site on Azion

To configure your ***Edge Site***, you will first need to create a new ***Edge Application***. Access the ***Edge Application*** menu in the ***Real-Time Manager*** (RTM), click the ***Add Application*** button and enter a name of your choice. In the ***Main Settings*** section, under ***Origins***, enter the address of your repository in the Address field and in the Host Header field, type the variable ${host} to inform the host header that should be passed to the repository. Fill in the other information and click on **Save**. If the repository requires authentication, access the ***Origins*** tab, click on "*Default Origin*", select the "*HMAC*" option and fill in the Region name, Access key and Secret key fields with the data provided by your service provider.

Now, we will add a rule so that addresses that do not contain a specific page (such as https://www.azion.com/) are directed to a pre-established page in the repository, without changing the user's browsing address. To perform this configuration, it will be necessary first to enable the "*Application Acceleration*" module in the ***Main Settings*** tab and save this change (thus making, among others, the ***Behavior*** option "*Rewrite Request*” available). Once enabled, access the ***Rules Engine*** tab and click on "*New Rule*", using the option "*Request Phase*". The criterion to be used is to select the accesses to addresses ending in "/" and, for that, select the option "***matches***" in the options box in the center and fill in the field on the right with the expression "\/$". Below, add a ***Behavior*** with the option *Rewrite Request* and fill in, on the right, the expression "*${uri}index.html*". Click on ***Save***. 

Finally, so that the ***Edge Site*** can be accessed by the users, it is also necessary to configure a ***Domain*** which is linked to the **Edge Application** within the ***Real-Time Manager*** (RTM). Access the ***Domain*** menu, click on the ***Add Domain*** button and enter a name of your choice, just used for identification. By default, an Azion certificate is pre-selected, which we will use in our test. Leave the ***CNAMEs*** field blank, select the ***Edge Application*** created previously to connect it with the domain and then click ***Save***. Note that a list of registered domains will appear on the screen below. The information contained in the ***Domain Name*** column is the name of the domain created by Azion (something similar to 12345t.ha.azioncdn.net) and it is through this that the test ***Edge Site*** will be accessed.

---

Didn’t find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
