# **Domains**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/api/v3/domains/index.md)

Through the Digital Certificates API you can consult, create, remove or update Domains used by Edge Applications

> 1. [Consult list of domains](#consultar-lista-de-domains)
> 2. [Consults data from a domain id](#consult-domains-id)
> 3. [Consults data from a domain name](#consult-domains-name)
> 4. [Delete a domain](#delete-domain)
> 5. [Create a new domain](#create-domain)
> 6. [Overwrite a domain](#overwrite-domain)
> 7. [Update fields in a domain](#update-fields-domain)

---

## 1. Consult list of domains {#consultar-lista-de-domains}

Returns the list of domains of an account.

#### **GET** */domains*

Required permission: ***View Domains***

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}/#criacao-de-token}) endpoint | header | string |
| Accept | Information about the return type and version | header | String;<br><br>mandatory:<br>*application/json;version=3* |

**Request Example**

~~~
GET /domains
Accept: application/json; version=3
Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75
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
            "id": 1536580019,
            "name": "Domain HLS Test",
            "cnames": [
                "www.getthiscname.com"
            ],
            "cname_access_only": false,
            "digital_certificate_id": 14,
            "edge_application_id": 1536580781,
            "is_active": true,
            "domain_name": "101918m.ha.azioncdn.net"
        },
        {
            "id": 1541690041,
            "name": "oh hai",
            "cnames": [
                "test.com"
            ],
            "cname_access_only": false,
            "digital_certificate_id": null,
            "edge_application_id": 1542500853,
            "is_active": true,
            "domain_name": "111918m.ha.azioncdn.net"
        },
    ]
}
~~~

## 2. Consults data from a domain {#consultar-dados-de-um-domains}

Returns details of a domain

#### **GET** */domains/:domain_id*

Required permission: ***View Domains***

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}/#criacao-de-token}) endpoint | header | string |
| Accept | Information about the return type and version | header | String;<br><br>mandatory:<br>*application/json;version=3* |
| :domain_id *(required)* | The id of the domain to be consulted. | URI | Integer |

**Request Example**

~~~
GET /domains/1536580019
Accept: application/json; version=3
Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75
~~~

**Answer Example**

~~~
{
    "results": {
        "id": 1536580019,
        "name": "Domain HLS Test",
        "cnames": [
            "www.getthiscname.com"
        ],
        "cname_access_only": false,
        "digital_certificate_id": null,
        "edge_application_id": 1536580781,
        "is_active": true,
        "domain_name": "101918m.ha.azioncdn.net"
    },
    "schema_version": 3
}
~~~

## 3. Consults data from a domain by name{#consults-data-from-domains-name}

Returns details of a domain using the GET method as a filter through the Domain Name.

> **Attention**, this endpoint uses Filtering logic, so if your query doesn't match, an empty list will be returned.

#### **GET** */domains/?name=DomainName

Required permission: ***View Domains***

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}/#criacao-de-token}) endpoint | header | string |
| Accept | Information about the return type and version | header | String;<br><br>mandatory:<br>*application/json;version=3* |
| :domain_name *(required)* | The name of the domain to be consulted. | URI | Integer |

**Request Example**

~~~
GET /domains/1536580019
Accept: application/json; version=3
Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75
~~~

**Answer Example**

~~~
{
    "results": {
        "id": 1536580019,
        "name": "Domain HLS Test",
        "cnames": [
            "www.getthiscname.com"
        ],
        "cname_access_only": false,
        "digital_certificate_id": null,
        "edge_application_id": 1536580781,
        "is_active": true,
        "domain_name": "101918m.ha.azioncdn.net"
    },
    "schema_version": 3
}
~~~

## 4. Delete a domain {#deletar-um-domains}

Returns details of a domain

#### **DELETE** */domains/:domain_id*

Required permission: ***Edit Domains***

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}/#criacao-de-token}) endpoint | header | string |
| Accept | Information about the return type and version | header | String;<br><br>mandatory:<br>*application/json;version=3* |
| :domain_id *(required)* | The id of the domain to be consulted. | URI | Integer |

**Request Example**

~~~
DELETE /domains/1538600025
Accept: application/json; version=3
Authorization: token 661afbb34e714f657b8a4db7b7a7068a318a65f7
Content-Type: application/json
~~~

**Answer Example**

~~~
HTTP/2 204
~~~

## 5. Create a new domain {#criar-um-novo-domains}

Include a new domain in an account.

#### **POST** */domains*

Required permission: ***Edit Domains***

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}/#criacao-de-token}) endpoint | header | string |
| Accept | Information about the return type and version | header | String;<br><br>mandatory:<br>*application/json;version=3* |
|Content-Type<br>(required) | The type of encoding used in Body (application/json).<br>e.g.:<br>Content-Type: application/json | header | string |

| body | The configuration to be created must be sent encoded in json format with the following fields: <br> **name** (string): the name of the configuration you want to create.<br> **cname** (array of strings): the site domain list (cnames). The default value is empty.<br> **cname_access_only**(boolean): defines whether the delivery of the content should be carried out only by the domains listed in the “cname” field or if the azion domain (azioncdn.net) will also be used. The default value is false.<br> **digital_certificate_id** (number): the SSL certificate id, previously registered on the platform as a [Custom Certificate]({% tl api_v3_digital_certificates %}), which must be used in case of delivery via https. The default value is null, representing that Azion's shared SSL certificate will be used.<br>**edge_application_id** (number): the Edge Application id that should be associated with the domain. Consult the list of [Edge Applications]({% tl api_v3_edge_applications %}).<br>**is_active** (boolean): defines whether the domain should be registered as active (in production) or inactive.| body | json |

**Request Example**

~~~
POST /domains
Accept: application/json; version=3
Authorization: token 661afbb34e714f657b8a4db7b7a7068a318a65f7
Content-Type: application/json
~~~

~~~
{
    "name": "New domain created directly by the API",
    "cnames": ["www.cname1.com", "www.cname2.com"],
    "cname_access_only": false,
    "digital_certificate_id": null,
    "edge_application_id": 1536580781,
    "is_active": true
}
~~~

**Answer Example**

~~~
{
    "results": {
        "id": 1554220280,
        "name": "New domain created directly by the API",
        "cnames": [
            "www.cname1.com",
            "www.cname2.com"
        ],
        "cname_access_only": false,
        "digital_certificate_id": null,
        "edge_application_id": 1536580781,
        "is_active": true,
        "domain_name": "121918m.ha.azioncdn.net"
    },
    "schema_version": 3
}
~~~

## 6. Overwrite a domain {#sobrescrever-um-domains}

Overwrite all fields of a domain, while preserving the id. Optional fields not filled in will be replaced by the default values. 

To update only some fields in a domain, consider using the PATCH method instead of PUT.

#### **PUT** */domains/:domain_id*

Required permission: ***Edit Domains***

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}/#criacao-de-token}) endpoint | header | string |
| Accept | Information about the return type and version | header | String;<br><br>mandatory:<br>*application/json;version=3* |
|Content-Type<br>(required) | The type of encoding used in Body (application/json).<br>e.g.:<br>Content-Type: application/json | header | string |
| body | The configuration to be overwritten must be sent encoded in json format with the following fields:  <br> **name** (string): the name of the configuration you want to create.<br> **cname** (array of strings): the site domain list (cnames). The default value is empty.<br> **cname_access_only**(boolean): defines whether the delivery of the content should be carried out only by the domains listed in the “cname” field or if the azion domain (azioncdn.net) will also be used. The default value is false.<br> **digital_certificate_id** (number): the SSL certificate id, previously registered on the platform as a [Custom Certificate]({% tl api_v3_digital_certificates %}), which must be used in case of delivery via https. The default value is null, representing that Azion's shared SSL certificate will be used.<br>**edge_application_id** (number): the Edge Application id that should be associated with the domain. Consult the list of [Edge Applications]({% tl api_v3_edge_applications %}).<br>**is_active** (boolean): defines whether the domain should be registered as active (in production) or inactive.| body | json |

**Request Example**

~~~
PUT /domains/1554220280
Accept: application/json; version=3
Authorization: token 661afbb34e714f657b8a4db7b7a7068a318a65f7
Content-Type: application/json
~~~

~~~
{
    "name": "New name for the domain",
    "cnames": ["www.cname1.com", "www.cname2.com"],
    "cname_access_only": false,
    "digital_certificate_id": null,
    "edge_application_id": 1536580781,
    "is_active": true
}
~~~

**Answer Example**

~~~
{
    "results": {
        "id": 1554220280,
        "name": "New name for the domain",
        "cnames": [
            "www.cname1.com",
            "www.cname2.com"
        ],
        "cname_access_only": false,
        "digital_certificate_id": null,
        "edge_application_id": 1536580781,
        "is_active": true,
        "domain_name": "131918m.ha.azioncdn.net"
    },
    "schema_version": 3
}
~~~

## 7. Update fields in a domain {#atualizar-campos-de-um-domains}

Update one or more fields in a Domain, preserving the value of the fields not informed. 

#### **PATCH** */domains/:domain_id*

Required permission: ***Edit Domains***

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}/#criacao-de-token}) endpoint | header | string |
| Accept | Information about the return type and version | header | String;<br><br>mandatory:<br>*application/json;version=3* |
|Content-Type<br>(required) | The type of encoding used in Body (application/json).<br>e.g.:<br>Content-Type: application/json | header | string |
| body | Here the fields you want to update must pass on the new values: <br> **name** (string): the name of the configuration you want to create.<br> **cname** (array of strings): the site domain list (cnames). The default value is empty.<br> **cname_access_only**(boolean): defines whether the delivery of the content should be carried out only by the domains listed in the “cname” field or if the azion domain (azioncdn.net) will also be used. The default value is false.<br> **digital_certificate_id** (number): the SSL certificate id, previously registered on the platform as a [Custom Certificate]({% tl api_v3_digital_certificates %}), which must be used in case of delivery via https. The default value is null, representing that Azion's shared SSL certificate will be used.<br>**edge_application_id** (number): the Edge Application id that should be associated with the domain. Consult the list of [Edge Applications]({% tl api_v3_edge_applications %}).<br>**is_active** (boolean): defines whether the domain should be registered as active (in production) or inactive.| body | json |

**Request Example**

~~~
PATCH /domains/1536580019
Accept: application/json; version=3
Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75
Content-Type: application/json  
~~~

~~~
{
	"name": "Name changed by API"
}
~~~

**Answer Example**

~~~
{
    "results": {
        "id": 1536580019,
        "name": "Name changed by API",
        "cnames": [
            "www.getthiscname.com"
        ],
        "cname_access_only": false,
        "digital_certificate_id": null,
        "edge_application_id": 1536580781,
        "is_active": true,
        "domain_name": "101918m.ha.azioncdn.net"
    },
    "schema_version": 3
}
~~~

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)
