---
layout: page-api-md
title:   pages.api_v3_intelligent_dns.title 
description:  pages.api_v3_intelligent_dns.description 
meta_tags:  pages.api_v3_intelligent_dns.meta_tags 

namespace:     api_v3_intelligent_dns

permalink:      /documentation/products/api/v3/intelligent-dns/
permalink_en:   /documentation/products/api/v3/intelligent-dns/
permalink_pt-br:   /documentacao/produtos/api/v3/intelligent-dns/
---
# Intelligent **DNS**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/api/v3/intelligent-dns/index.md)

Use the Intelligent DNS API to create, query and update your Hosted Zones and Records.

> 1. [Consult the list of Hosted Zones](#consultar-lista-hosted-zone)
> 2. [Consult data of a Hosted Zone](#consultar-hosted-zone)
> 3. [Create a new Hosted Zone](#criar-hosted-zone)
> 4. [Consult list of Records per Hosted Zones](#consultar-lista-record)
> 5. [Create a new Record](#criar-record)

---

## 1. Consult the list of Hosted Zones {#consultar-lista-hosted-zone}

Returns the list of Hosted Zones.

#### **GET** */intelligent_dns*

Required permission: ***View Intelligent DNS***

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|--------|--------|--------|--------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept | Information about the return type and version | header | string; <br><br> mandatory: *application/json;version=3* |

**Request Example**

~~~
GET /intelligent_dns 
Accept: application/json; version=3
Authorization: token ec6aabdc0b6bbeed826a36d8731630e36b6e3f22
~~~

**Answer Example**

~~~
{
    "count": 2,
    "total_pages": 1,
    "schema_version": 3,
    "links": {
        "previous": null,
        "next": null
    },
    "results": [
        {
            "is_active": true,
            "domain": "mydomain.com",
            "name": "Domain Criado via API",
            "id": 1
        },
        {
            "is_active": true,
            "domain": "domain.com",
            "name": "Domain Criado via RTM",
            "id": 2
        }
    ]
}
~~~

---

## 2.Consult data of a Hosted Zone {#consultar-hosted-zone}

Returns the details of a Hosted Zone.

#### **GET** */intelligent_dns/:id*

Required permission: ***View Intelligent DNS***

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|--------|--------|--------|--------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept | Information about the return type and version | header | string; <br><br> mandatory: *application/json;version=3* |
| :id *(required)* | The id of the hosted zone to be consulted.   | path | number |

**Request Example**

~~~
GET /intelligent_dns/111
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5942
~~~

**Answer Example**

~~~
{
    "results": {
        "expiry": 1209600,
        "id": 111,
        "is_active": true,
        "domain": "mydomain.com",
        "name": "Hosted Zone criado pela API",
        "nameservers": [
            "ns1.aziondns.net",
            "ns2.aziondns.com"
        ],
        "nx_ttl": 3600,
        "refresh": 43200,
        "retry": 7200,
        "soa_ttl": 3600
    },
    "schema_version": 3
}
~~~

---

## 3.Create a new Hosted Zone {#criar-hosted-zone}

Allows for the creation of a new Hosted Zone.

#### **POST** */intelligent_dns*

Required permission: ***Edit Intelligent DNS***

| Parameter | Description | Type | Type of Data |
|--------|--------|--------|--------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept | Information about the return type and version | header | string; <br><br> mandatory: *application/json;version=3* |
| Content-Type *(required)* | The type of encoding used in Body (application/json). <br><br>e.g.:<br><br>Content-Type: application/json | header | string |

**Request Example**

~~~
POST /intelligent_dns
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
Content-Type: application/json
~~~

~~~
{
    "name": "Hosted Zone criado pela API",
    "domain": "meudomain.com",
    "is_active": true
}
~~~

**Answer Example**

~~~
{
    "results": {
        "domain": "meudomain.com",
        "expiry": 1209600,
        "id": 1,
        "is_active": true,
        "name": "Hosted Zone criado pela API",
        "nameservers": [
            "ns1.aziondns.net",
            "ns2.aziondns.com"
        ],
        "nx_ttl": 3600,
        "refresh": 43200,
        "retry": 7200,
        "soa_ttl": 3600
    },
    "schema_version": 3
}
~~~

---

## 4. Consult list of Records per Hosted Zones {#consultar-lista-record}

Returns the Records’ list of Hosted Zones.

#### **GET** */intelligent_dns/:id/records*

Required permission: ***View Intelligent DNS***

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|--------|--------|--------|--------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept | Information about the return type and version | header | string; <br><br> mandatory: *application/json;version=3* |
| :id *(required)* | The id of the hosted zone to be consulted.   | path | number |

**Request Example**

~~~
GET /intelligent_dns/111/records
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5942
~~~

**Answer Example**

~~~
{
   "count": 1,
   "links": {
       "previous": null,
       "next": null
   },
   "total_pages": 1,
   "schema_version": 3,
   "results": {
       "records": [
           {
               "record_type": "ANAME",
               "ttl": 3600,
               "answers_list": [
                   "123456a.ha.azioncdn.net"
               ],
               "entry": "@"
           }
       ],
       "zone_id": 111,
       "zone_domain": "meudomain.com"
   }
}
~~~

---

## 5. Create a new Record {#criar-record}

Enables the creation of a Record linked to a Hosted Zone.

#### **POST** */intelligent_dns/records*

Required permission: ***Edit Intelligent DNS***

| Parameter | Description | Type | Type of Data |
|--------|--------|--------|--------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept | Information about the return type and version | header | string; <br><br> mandatory: *application/json;version=3* |
| Content-Type *(required)* | The type of encoding used in Body (application/json). <br><br>e.g.:<br><br>Content-Type: application/json | header | string |

**Request Example**

~~~
POST /intelligent_dns/records
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
Content-Type: application/json
~~~

~~~
{
    "zone_id": 1,
    "record_type": "ANAME",
    "entry": "@",
    "answers_list": [
        "123456a.ha.azioncdn.net",
        "245678a.ha.azioncdn.net"
    ],
    "ttl": 3600
}
~~~

**Answer Example**

~~~
{
   "results": {
       "zone_id": 1,
       "record_type": "ANAME",
       "entry": "@"
       "answers_list": [
           "123456a.ha.azioncdn.net",
           "245678a.ha.azioncdn.net",
       ],
       "ttl": 3600,
   },
   "schema_version": 3
}
~~~

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)
