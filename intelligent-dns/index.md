# Intelligent **DNS**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/intelligent-dns/index.md)

Intelligent DNS is a domain hosting service that makes up Azion's traffic routing solution, the Edge Traffic Router. With it, your domains will be hosted on Azion's distributed infrastructure, using the same performance and security solutions built for other Azion products, combining techniques to optimize requests with protection against DDoS attacks.

> 1. [What is a DNS?](#what-is-dns)
> 2. [How does Intelligent DNS work?](#how-it-works)
> 3. [Hands-on](#hands-on)
> 4. [Types of supported entries and recommendations for each](#types-of-entries)
> 5. [Rules for filling in values](#rules-for-filling)
> 6. [How do I use wildcards?](#wildcards)
> 7. [How do I test my zone?](#test-my-zone)
> 8. [How do I configure Intelligent DNS to respond to my domains?](#how-configure-it)

---

## 1. What is a DNS (Domain Name System)? {#what-is-dns}

As the name suggests, it is a system for associating domain names. It manages to translate the name into an IP address so that it can establish a connection with the target that can supply the content for the requested website.

---

## 2. How does Intelligent DNS work? {#how-it-works}

It’s designed for those that want high performance and high availability for their hosting and their domain. Intelligent DNS is an authoritative DNS solution, and allows the client to manage their domains, zones and records through a friendly and intuitive interface. In addition, it is possible to create ANAME type entries, which would allow you to host and use *naked domains* with other Azion products.

---

## 3. Hands-on Configuring Intelligent DNS step by step {#hands-on}

---

## Creating a Hosting Zone

1.  From [Real-Time Manager](https://manager.azion.com/), go to the menu _Routing Services > Intelligent DNS_. This will bring up the main interface where you can create and menage your zones.
2.  Click on the **Add Zone** button and fill in the following fields:  
    **Name for zone**: Identifier for the newly created zone of the domain. This field is free text. You can enter text in whatever form suits you best.
    **Domain**: You can only enter the [Naked Domain](https://en.wikipedia.org/wiki/DNS_zone) in [FQDN](https://pt.wikipedia.org/wiki/FQDN) format, in this field. E.g.: _mydomain.com_.  
    **Active**: This flag indicates whether the zone is active and therefore whether the Intelligent DNS should respond to it or not. Deactivated zones are ignored in DNS responses.
3.  Click on the **Save** button to finish.

---

## Creating Records in your zone

Create and edit entries for your domains as needed.

From [Real-Time Manager](https://manager.azion.com/), go to the menu _Routing Services > Intelligent DNS_. Choose the domain you want to manage. This will bring up the main interface where you can create and edit your zones. On doing so, you will see two tabs:

**Main Settings**

In this tab you can edit the name of the zone, the main domain, the service status of DNS and you will also have access to the addresses of Azion’s authoritative servers (name servers) that will answer the queries for your zone.

**Records**

In this tab you will see a list of all the records that are part of this zone.
Click on the button **Add Record**, to add a new record. The window for adding records will open, with the following fields:

*   **Name**  
    This description is the domain that you want to create. For example: "*help*", in "*help.azion.com*", or then "*manager*" in "*manager.azion.com*". 
*   **Type**  
    This is the type of record that is being added, such as types A, AAAA, MX or CNAME, among other examples.
    [(see section - Types of supported entries and recommendations for each)](#types-of-entries)  

*   **Value**  
    This is the DNS response to the registered record, such as an IPv4 address for example.
    [(see section - Rules for filling in values)](#rules-for-filling)

*   **TTL (Time To Live)**
    This is the time that a response can be cached for on a resolver server.

Click on the **Save** button to finish creating your record. From this moment, this set of information will synchronized with the Intelligent DNS service. Your settings are saved and distributed to the Azion network virtually in real time.

There you have it. Your domain is already set up and ready to be served by Azion´s Intelligent DNS. To make sure everything is working, run some of the tests described in the section - [How do I test my zone?](#test-my-zone)

---

## 4. Types of supported entries and recommendations for each that Intelligent DNS follows {#types-of-entries}

Intelligent DNS supports the following types of entries, for creating records.

| Type | Referência |
|------|------------|
| A | [RFC1035](https://tools.ietf.org/html/rfc1035) |
| AAAA | [RFC3596](https://tools.ietf.org/html/rfc3596) |
| ANAME | [draft-ietf-dnsop-aname-04](https://tools.ietf.org/html/draft-ietf-dnsop-aname-04) |
| CAA | [RFC8659](https://tools.ietf.org/html/rfc8659) |
| CNAME | [RFC1035](https://tools.ietf.org/html/rfc1035) |
| MX | [RFC1035](https://tools.ietf.org/html/rfc1035) e [RFC7505](https://tools.ietf.org/html/rfc7505) |
| NS | [RFC2782](https://tools.ietf.org/html/rfc2782) |
| PTR | [RFC1035](https://tools.ietf.org/html/rfc1035) |
| SRV | [RFC2782](https://tools.ietf.org/html/rfc2782) |
| TXT | [RFC1035](https://tools.ietf.org/html/rfc1035) e [RFC1464](https://tools.ietf.org/html/rfc1464) |


## 5. Rules for filling in values {#rules-for-filling}

| Type | Restriction rule | Example |
|------|--------------------|---------|
| A | [Must be in IPv4 format](https://pt.wikipedia.org/wiki/IPv4) <br><br>Maximum of 10 IP addresses (one per line).<br><br>Only valid IPv4 addresses are accepted as a response. | Name of zone: azion.com<br><br>Name of record: @ (or blank)<br><br>Value(s) of response:<br><br> 192.209.210.67<br><br> 198.199.105.93 |
| AAAA | [Must be in IPv6 format](https://pt.wikipedia.org/wiki/IPv6) <br /><br />Maximum of 10 IP addresses (one per line).<br/><br>Only valid IPv6 addresses are accepted as a response. | Name of zone: azion.com<br><br>Name of record: www<br><br>Value(s) of response:<br><br> 2800:3f0:4001:815::2004 |
| ANAME | [Must be in FQDN format](https://pt.wikipedia.org/wiki/FQDN)<br><br>Only one domain for each ANAME type record.<br><br>Only the domains below from azioncdn.net are accepted.<br><br>Records with the same same, but of different types (MX, TXT etc.) can coexist. | Name of zone: azion.com<br><br>Name of record: @<br><br>Value of response:<br><br> 32082s.ha.azioncdn.net |
| CAA | The value of the response must follow the format [FLAG] [TAG] “[VALUE]”.<br />Example: 0 issue "ca.example.net".<br /><br />It will not be possible to register a CAA type record, when the zone already has a CNAME type record.<br /><br />N.B. the tool [SSL mate](https://sslmate.com/caa/) can help when creating and querying. | Flag: If the flag has a value of 0 (zero), all flags will be switched off. If the flag has a value of 1, the 0 bit (Issuer Critical Flag) is on, i.e. A CA must not send certificates for any FQDN, if the relevant record for that FQDN contains a CAA.<br /><br />Tag: The tags must be in lower case and must follow the naming convention in the RFC, Example: *issue*, *issuewild*, *iodef*.<br />Issue: indicates that the CA of the ACM specified in the *value* field can send a certificate to your domain or sub-domain.<br />Issuewild: indicates that the CA of the ACM specified in the *value* field can send a wildcard certificate to your domain or sub-domain.<br />iodef: indicates that should the CA receive an invalid request for a certificate, it should send a notification to the domain owner. Use url (http/https) or mailto, e.g. “mailto:email@domain.com”, “https://url” and "http://url".<br /><br />Value:<br />The value must always be between inverted commas, e.g. “ca.example.com”, and the content will depend on the tag you use.<br />Issue: url or a sequence, e.g. “ca.example.net; account=123456” or “ca.example.com”<br />Issuewild: must use a domain with a wildcard e.g. “*.example.com”<br />iodef: a url callback or an email address, e.g. “mailto:email@domain”, “https://example.com/callback” and “http://example.com/callback”. |
| CNAME | [Must be in FQDN format](https://pt.wikipedia.org/wiki/FQDN) <br><br>Only point it to another domain name, never an IP address.<br><br>It can’t be added at the level of the root domain.<br><br>Only one domain is allowed for each CNAME type record.<br><br>A defined host name in a CNAME record must not include records from other types of resources (MX, A, etc.)<br><br>CNAME records can point to other CNAME records, but this isn’t considered good practice, as it is inefficient.<br><br>Should a CNAME record be pointing to a record in the same zone, Intelligent DNS will respond to all of them on receiving one query. |  |
| MX | Must be in the format [PRIORITY] [ADDRESS].<br><br>Maximum of 10 IP addresses (one per line). | Name of zone: azion.com<br><br>Name of record: mail<br><br>Value(s) of response:<br><br> 10 mailserver.example.com<br><br> 20 mailserver2.example.com |
| NS | [Must be in FQDN format](https://pt.wikipedia.org/wiki/FQDN) or an IP address.<br><br>Maximum of 10 addresses (one per line).<br><br>An NS cannot be configured by the main domain of the zone (naked domain).<br><br>It must point to the servers that have authority over that record. | Name of zone: azion.com<br><br>Name of records: ns<br><br>Value(s) of response:<br><br> ns1.aziondns.net<br><br> ns2.aziondns.net |
| PTR | [Reverse zones lined to IPv6 addresses follow other rules. See here for more information.](https://pt.wikipedia.org/wiki/Reverse_DNS_lookup) | 1- Create a new zone, add the following information for DOMAIN:<br> 0.168.192.in-addr.arpa<br><br> 2 - After creating the zone, you must create a type PTR record associated with it, with the following settings:<br><br>Name of record: 1<br><br>Value of response: www.exemplo.com |
| SRV | The record name must have the following format: '_service._protocol.name'. Example: "_ldap._tcp.azionsrv".<br><br>The response values must be in the format [priority] [weight] [port] [target].<br><br>Maximum of 10 records (one per line).<br><br>It must point to the host name that has an A or AAAA record.<br><br>N.B. You must pay special attention to this, because Intelligent DNS will not validate this automatically. | Name of zone: azion.com<br><br>Name of record: _ldap._tcp.azionsrv<br><br>Value(s) of response:<br><br> 0 60 5060 bigbox.example.com |
| TXT | Limited to 100 characters.<br><br>Text that is separated by ENTER is considered as differente responses by Intelligent DNS | Name of zone: azion.com<br><br>Name of record: txt<br><br>Value(s) of response:<br><br> This domain name is reserved for use in documentation<br><br> "printer=lpr5"<br><br> "favorite drink=orange juice" |

## 6. How do I use wildcards? {#wildcards}

A wildcard record is a record that responds to DNS requests by domains that you haven’t yet defined. You can create them for any type, inserting an asterisk in the record name. For example, imagine that you have the following configuration for a zone whose domain is “*example.com*”:

| Name | Type | Value |
|------|------|-------|
| www | A | 192.168.0.1<br><br> 192.168.0.2<br><br> 192.168.0.3 |
| * | A | 1.1.1.1 |
| *.wildcard | A | 2.2.2.2  |

This means that:

*   If the query was made by *www.example.com* the response would consist of 3 IP addresses: 192.168.0.1, 192.168.0.2 and 192.168.0. N.B. It isn’t a wildcard, but it is given priority for the response because it correctly meets the record that is queried.
*   If the query was made by *ghost.example.com* the response would be according to the wildcard it found. I.e. The response would be: 1.1.1.1
*   If the query was made for *another.wildcard.example.com* the response be according to the wildcard it found this time, i.e. The response would be: 2.2.2.2
*   If the query was made for *wrong.record.example.com* the response would have no value, because there is nothing that corresponds to this structure.

**Restrictions on the use of wildcards**

It is only read as a wildcard if the leftmost asterisk is followed by a period. Any other asterisks, should there be some, are then considered valid characters.

Any asterisks to the very left, that aren’t followed by a period, will be disregarded as wildcards.

You can’t use wildcard characters in SRV type records because it requires a standard format in its name.

---

## 7. How do I test my zone? {#test-my-zone}

If you have already set up Intelligent DNS as you want and you now want to test it to see if it is processing your information properly, you can test it using the following tools:

### DIG

The “*dig*” (domain information groper) is a network administration command-line tool for querying the Domain Name System (DNS). dig is useful for network troubleshooting and for educational purposes. It is useful for network troubleshooting and for educational purposes. It can operate based on command line option and flag arguments, or in batch mode by reading requests from an operating system file. When a specific name server is not specified in the command invocation, it uses the operating system's default resolver, usually configured in the file resolv.conf. Without any arguments it queries the DNS root zone.

It is a component of the domain name server software suite *BIND* and supersedes in functionality older tools, such as “*nslookup*” and “*host*”. However, the older tools are still used in complementary fashion.

To test Intelligent DNS, you should use one of the nameservers listed on the *Main Settings* tab of your Azion registered zone.

For example, imagine you have the following settings:

| Name | Type | Value | TTL |
|------|------|-------|-----|
| www | A | 192.168.0.1<br><br> 192.168.0.2<br><br> 192.168.0.3 | 3600 |

To check how Intelligent DNS handles a type A query, registered to the “www” record, type the following command:

~~~
  > dig A www.example.com @ns1.aziondns.net 
~~~

The response to this will be:

~~~
 ; <<>> DiG 9.10.6 <<>> A www.example.com @ns1.aziondns.net ;; global options: +cmd ;; Got answer: ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 46329 ;; flags: qr aa rd; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1 ;; WARNING: recursion requested but not available ;; OPT PSEUDOSECTION: ; EDNS: version: 0, flags:; udp: 4096 ;; QUESTION SECTION: ;www.example.com. IN A ;; ANSWER SECTION: www.example.com. 3600 IN A 192.168.0.1 www.example.com. 3600 IN A 192.168.0.2 www.example.com. 3600 IN A 192.168.0.3 ;; Query time: 22 msec ;; SERVER: 179.191.160.2#53(179.191.160.2) ;; WHEN: Thu Sep 12 13:13:14 -03 2019 ;; MSG SIZE rcvd: 137
~~~

### HOST

*Host* queries the DNS, converting domain names into IP addresses and vice-versa. If no argument or option is provided, the host prints a brief summary of the command line options and arguments.

For example, imagine you have the following settings:

| Name | Type | Value | TTL |
|------|------|-------|-----|
| www | A | 192.168.0.1<br><br> 192.168.0.2<br><br> 192.168.0.3 | 3600 |

To check how Intelligent DNS handles a type A query, registered to the “www” record, type the 

~~~
> host www.example.com ns1.aziondns.net
~~~

The response to this will be:

~~~
Using domain server: Name: ns1.aziondns.net Address: 179.191.160.2#53 Aliases: www.example.com has address 192.168.0.1 www.example.com has address 192.168.0.2 www.example.com has address 192.168.0.3
~~~

### NSLOOKUP

*Nslookup* is a tool, common to both Windows and Linux, used to obtain information about DNS records for a particular domain, host or IP.

For example, imagine you have the following settings:

| Name | Type | Value | TTL |
|------|------|-------|-----|
| www | A | 192.168.0.1<br><br> 192.168.0.2<br><br> 192.168.0.3 | 3600 |

To check how Intelligent DNS handles a type A query, registered to the “www” record, type the following command:

~~~
 > nslookup www.example.com ns1.aziondns.net
~~~

The response to this will be:

~~~
 Server: ns1.aziondns.net Address: 179.191.160.2#53 Name: www.example.com Address: 192.168.0.1 Name: www.example.com Address: 192.168.0.2 Name: www.example.com Address: 192.168.0.3
~~~

---

## 8. How do I configure Intelligent DNS to respond to my domains? {#how-configure-it}

So that Intelligent DNS can take over authority for its zones, you must list it in your DNS registry. (registro.br, GoDaddy, AWS Registrar, etc.)

To list it in your DNS registry, use one of the nameservers listed on the Main Settings tab of your Azion registered zones.

It is important to check that all your records are definitely registered and tested in Intelligent DNS before doing this. If you don’t, you run the risk of a loss of service.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
