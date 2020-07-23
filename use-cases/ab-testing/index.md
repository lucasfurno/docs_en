# Conduct A/B testing using Edge Computing logic

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/use-cases/ab-testing/index.md)

A/B Testing is a widely used tool to assist decision-making on a service, with respect to different versions of applications, interfaces or locations. You can use Edge Computing’s logic systems to set up testing, which will give you a range of benefits, such as using more than one variant of the test on the same URL, while maintaining your SEO ranking.

As well as this, you can control the distribution of access to the different scenarios, more assertively, through serverless functions executed on the Edge, during the test execution, and identify the variants that present the best results: enabling you, among other things, to direct the public to the preferred versions.

## A/B Testing with Azion’s Edge Functions

**A/B Testing** is a serverless function available on Azion’s Edge Computing platform. With it, you can quickly and simply set up your A/B tests, combining both business and testing rules directly at the Edge and control and direct traffic on your site, however your test evolves.	

Set up logic processes on the Edge, giving your more options on how to apply your tests and many other benefits:

* Easy to configure. In a few steps, you can generate a round of testing, all managed by Azion’s Edge;
* Test a new version or installation of your platform/service, gradually, mitigating the impact on your customers, controlling the access flow to just a few;
* Vary the traffic flow. Define different incident percentages for each version, according to your test’s requirements, and have greater assertiveness in distributing access with our processing algorithms in Edge; 
* A better user experience. A/B testing does not affect the time a page takes to load, and is significantly faster, compared to solutions that use javascript to carry out the A/B test.

## How does Azion’s A/B Testing work?

Before you begin, check that the Edge Functions service is active in your Azion account and that you already have the function in your Edge Functions Libraries. If not, please get in contact with our commercial team to access the service.

**Understand the process**

When the request arrives at the Edge, the algorithm distributes it, according to a defined probability. Then a cookie is set with the expiration time and the values specified for A or B. From that moment on, all traffic from the client that originated the request will be directed to the defined version.  

**Configuring a Test**

In order to demonstrate the practical application of configuring an A/B test, we will use the example of a new version of the application server, running from a different port within the same infrastructure. In this case, we want to conduct a graduated test of the access flow to the site, checking the performance of the application’s new configuration and so, therefore, we can take rapid action to correct any issues that it causes.

To configure your test through Edge Function A/B Testing edit the Edge Application to which you want to apply the test, checking that the option Edge Function is available in the *Main Settings* tab. Next, go to the *Functions* tab and add a new function A/B Testing. Make sure you give it an appropriate identifiable name (for example MyABTest), as you will need to be able to identify it later when configuring it in the Rule Engine. Note that the function code that appears in the *Code* field, will be read only and just for information and the parameters for the test to be run against will be in the *Json Args* tab. Below is a description of each of the *Json Args* parameter fields:  

~~~
{
"param": {
	"cookie": {
		"name": Name of the cookie,
		"expiration": Cookie expiry date,
		"max_age": Time in seconds, for when the cookie will be deleted,
		"domain": domain,
		"path": Validity subdomain of the cookie (“/” indicates that it is valid for every domain)
		},
	"a": {
		"cookie_value": Value of the cookie for test A,
		"prob": Probability of selection,
		"addresses_list": Address for test A,
		"originid": identification number of the origin,
		"live_ingest": Indicator as to whether the origin of the test is live for streaming,
		"protocol_policy": protocol policy (force http or https, or “preserve” to keep the request),
		"path": Validity subdomain of the cookie (“/” indicates that it is valid for every domain)i,
		"cache_key": Cache key in Edge, specify for this variant (cannot repeat),
		"host": Name of the host that must be included in the request (HTTP HEADER "Host", and which will overwrite what was given by the registered origin)
		},
	"b": {
		"cookie_value": Value of the cookie for test B,
		"prob": Probability of selection,
		"addresses_list": Address for test B,
		"originid": identification number of the origin,
		"live_ingest": Indicator as to whether the origin of the test is live for streaming,
		"protocol_policy": protocol policy (force http or https, or “preserve” to keep the request),
		"path": Validity subdomain of the cookie (“/” indicates that it is valid for every domain)i,
		"cache_key":  Cache key in Edge, specify for this variant (cannot repeat),
		"host": Name of the host that must be included in the request (HTTP HEADER "Host", and which will overwrite what was given by the registered origin) 
		}
	}
}
~~~

Next is an example of the configuration of a basic function, assigning a 90 percent (0.9) probability for the first variant of the test and 10 percent (0.1) for the second, not forgetting that the sum must always be 1, which represents the application running on a new infrastructure.

~~~
{
"param": {
	"cookie": {
		"name": "MYABTEST_NAME__",
		"expiration": "Wed, 04 May 2021 10:16:00 GMT",
		"max_age": 600,
		"domain": "localhost",
		"path": "/"
		},
	"a": {
		"cookie_value": "A_VARIANT",
		"prob": 0.9,
		"addresses_list": "www.mytest_ab_of_my_site.com:443",
		"originid": “uuid1”
		"live_ingest": false,
		"protocol_policy" "https",
		"path": "",
		"cache_key": "test_a",
		"host": "localhost"
		},
	"b": {
		"cookie_value": "B_VARIANT",
		"prob": 0.1,
		"addresses_list": "www.mytest_ab_of_my_site.com:2010",
		"originid": “uuid2”
		"live_ingest": false,
		"protocol_policy" "https",
		"path": "",
		"cache_key": "test_b",
		"host": "localhost"
		}
	}
}
~~~

Edit the parameters and click on ***Save*** to save. On the *Rules Engine* tab, use the Default Rule or create a new rule with the validation criteria (criteria) to activate your function. In the *Behavior* section, select Run Function and choose the MyABTest Function that you created and click on ***Save*** to finish.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
