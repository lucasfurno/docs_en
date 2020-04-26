# WAF Rule Sets

The WAF Rule Set protects your applications against threats such as SQL Injections, Remote File Inclusion (RFI), Cross-Site Scripting (XSS) and more. WAF analyzes HTTP and HTTPS requests, detects and blocks malicious acts before they reach your infrastructure and without impacting the performance of your applications.

> 1. *[Hands-on](#hands-on)*
> 3. *[Monitoring threat detection](#monitoring-threat-detection)*
> 4. *[Approve the desired whitelist](#approve-whitelist)*
> 5. *[Enable threat blocking in the rule set](#enable-threat-blocking)*

---

## 1. Hands-on. **Creating a WAF Rule Set for your applications** {#hands-on}

WAF Rule Set is the set of rules that protects against the most varied types of attacks. It defines the protections you want to activate, the detection sensitivity level and the *whitelist*.

To create a *rule set*:

1.  Access [Real-Time Manager](https://manager.azion.com/) and enter the *Edge Services> WAF* menu.
2.  Add a new *rule set* by clicking the *Add* button.
3.  In the Main Settings tab, activate the desired protections and sensitivity level.
4.  Save your *rule set* with a descriptive name. You will need it to perform the *rule set* association later through the Rules Engine.

We recommend that you activate the rule in _Counting Mode _ at the first moment, to follow the sample of threats detected in the learning stage, before effectively blocking requests. That way you can also adjust the detection sensitivity, according to your application.

During Counting Mode, it is recommended that you leave all protections enabled so that you can monitor the threats detected by WAF.

If false positives are detected, some rules can be added to the *whitelist* by Azion Support, without the need to disable the full protection for a family of threats. Contact us if you wish to assess the need to include *whitelist* rules before disabling your protection.

Finally, the *rule set* must be active for WAF to analyze your requests. The Active checkbox serves to allow you to enable and disable WAF quickly for all *paths* that are associated with the rule set.

---

## 2. **Monitoring threat detection** {#monitoring-threat-detection}

Leave the WAF rule set in **Counting Mode** for as long as you deem necessary so that most of your application's functionality is covered. You should follow the graphics on the WAF tab by Real-Time Metrics or the WAF logs through the **Real-Time Events** and **Data Streaming** products.

In Real-Time Metrics, the first chart on the WAF tab (Threats vs Requests) presents three time series:

*   **Regular Requests:** all HTTP and HTTPS requests analyzed by WAF and are considered secure.
*   **Threats:** the volume of threats detected by WAF and accounted for, when in *Counting* mode. These threats are not being blocked at the moment.
*   **Threats Blocked:** threats effectively blocked by WAF. To start blocking the threats found, the rule set must be in *Blocking Mode*.

If you also have the **Data Streaming** service, you can track more detailed information about IP, date and time of access, status code, detected attack family and the configured mode of action.

~~~
$time-iso8601 $azion-client-id $azion-virtualhost-id $azion-configuration-id $azion-solution $azion-solution-id $host $conn-request-time $req-method $resp-status $req-uri $waf-threat-family $waf-threat-action $client-geoip-country-name $client-geoip-region-name $client-addr $client-port $req-header(User-Agent) $req-header(Referer) 2017-01-04T17:00:19+00:00 1234a 10203b 1020304050 ha 1441740010 www.yoursite.com 0.129 GET 200 /request-uri?key=value $XSS $LEARNING-BLOCK Brazil Sao Paulo 1.2.3.4 61511 Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36 https://www.yoursite.com/referrer 2017-01-04T17:00:19+00:00 1234a 10203b 1020304050 ha 1441740010 www.yoursite.com 0.025 POST 200 /request-uri $SQL $LEARNING-BLOCK Brazil Santa Catarina 2.3.4.5 61513 Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36 https://www.yoursite.com/referrer 2017-01-04T17:00:40+00:00 1234a 10203b 1020304050 ha 1441740010 www.yoursite.com 0.026 GET 301 /request-uri?key=value $RFI $LEARNING-BLOCK Brazil Rio de Janeiro 5.6.7.8 26102 Mozilla/5.0 (Linux; Android 5.1.1; SM-G800H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36 https://www.yoursite.com/referrer 2017-01-04T17:00:41+00:00 1234a 10203b 1020304050 ha 1441740010 www.yoursite.com 0.391 POST 200 /request-uri $UWA $LEARNING-BLOCK Brazil Rio Grande do Sul 9.10.11.12 26102 Mozilla/5.0 (Linux; Android 5.1.1; SM-G800H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36 https://www.yoursite.com/referrer
~~~

Based on this information, you can adjust the sensitivity of the WAF *rule* set, until no more false positives occur. You can also ask Azion to generate a *whitelist* for your application.



---

## 3. **Approve the desired whitelist** {#approve-whitelist}

Ask Azion Support to generate the whitelist proposal, based on the learning stage of your application.

The whitelist proposal generated by Azion will be inserted in the platform and will be available for your approval:

1.  Access the Edge Services > WAF menu, or access the “Manage WAF” shortcut on the home screen.
2.  Edit the *rule set* you want to use to evaluate the *whitelist*.
3.  In the *Whitelist* tab, enable any rules you wish to approve.
4.  Save your *rule set*.

---

## 4. **Activate threat blocking in the rule set** {#enable-threat-blocking}

After monitoring the behavior of your application and the threats detected after the learning period and approval of the *whitelist*, you must change the *rule set* to Blocking:

1.  Access the **Edge Services** menu > **WAF**.
2.  Edit the desired **WAF *rule set***.
3.  Change the mode from **Counting** to Blocking.

From that moment on, your application will be protected and the detected threats will be effectively blocked.

~~~
Remember: WAF only blocks threats if it is configured in Blocking Mode.
~~~

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/edge-firewall/waf-rule-sets/index.md) on GitHub.
