# Edge **Firewall**

[Edit on GitHub  <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/api/v3/edge-firewall/index.md)

The API of Edge Firewall allows you to check, remove or update your existing settings, as well as creating new ones.

> 1. [Look up a list of Edge Firewall](#look-up-a-list-edge-firewall)
> 2. [Look up details of an Edge Firewall](#consultar-dados-de-um-edge-firewall)
> 3. [Delete an Edge Firewall](#delete-an-edge-firewall)
> 4. [Create a new Edge Firewall](#create-a-new-edge-firewall)
> 5. [Overwrite an Edge Firewall](#overwrite-an-edge-firewall)

---

## 1. Look up a list of Edge Firewall {#look-up-a-list-edge-firewall}

Returns a list of Edge Firewall.

#### **GET** */edge_firewall*

Permission necessary: **View Edge Firewall

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string |
| Accept *(mandatory)* | Details about the type of return and version | header | string;<br>*application/json;version=3* |

**Example Request**

~~~
GET /edge_firewall 
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
~~~

**Example Response**

~~~
{
    "count": 36,
    "total_pages": 18,
    "schema_version": 3,
    "links": {
        "previous": null,
        "next": "https://api.azionapi.net/edge_firewall?page=2&page_size=2"
    },
    "results": [
         {
              "id": 200,
              "last_editor": "azion@azion.com",
              "last_modified": "2020-10-27T10:59:35.906016Z",
              "name": "Edge Firewall",
              "is_active": true,
              "edge_functions_enabled": false,
              "network_protection_enabled": true,
              "waf_enabled": true,
              "domains": [
                  160128906,
                  112788979,
                  120379900
              ]
          },
          {
              "id": 201,
              "last_editor": "azion@azion.com.br",
              "last_modified": "2020-10-07T13:30:49.406607Z",
              "name": "Edge Firewall - Rate Limit",
              "is_active": true,
              "edge_functions_enabled": true,
              "network_protection_enabled": true,
              "waf_enabled": true,
              "domains": []
               }
            ]
        }
    ]
}
~~~

---

## 2. Look up the details of an Edge Firewall {#lookup-detail-of-an-edge-firewall}

Returns details of an Edge Firewall.

#### **GET** */edge_firewall/:id*

Permission necessary: **View Edge Firewall

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string |
| Accept *(mandatory)* | Details about the type of return and version | header | string;<br>*application/json;version=3* |
| :id *(mandatory)* | The id of the edge application that you plan to query. | path | number |

**Example Request**

~~~
GET /edge_firewall/200
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
~~~

**Example Response**

~~~
{
    "results": {
            "id": 200,
            "last_editor": "azion@azion.com",
            "last_modified": "2020-10-27T10:59:35.906016Z",
            "name": "Edge Firewall",
            "is_active": true,
            "edge_functions_enabled": false,
            "network_protection_enabled": true,
            "waf_enabled": true,
            "domains": [
                160128906,
                112788979,
                120379900
            ]
       },
    "schema_version": 3
}
~~~

---

## 3. Delete an Edge Firewall {#delete-an-edge-firewall}

Remove an Edge Firewall. This operation is final, i.e. there is no way to roll back the information after it has been confirmed by the user.

All information associated with this edge firewall will also be removed.

The API does not require confirmation in order to run this instruction.

#### **DELETE** */edge_firewall/:id*

Permission necessary: **Edit Edge Firewall**

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string |
| Accept *(mandatory)* | Details about the type of return and version | header | string;<br>*application/json;version=3* |
| :id *(mandatory)* | The id of the edge firewall that you plan to delete. | path | integer |

**Example Request**

~~~
DELETE /edge_firewall/200
Accept: application/json; version=3
Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75
~~~

**Example Response**

~~~
HTTP/2 204
~~~

---

## 4. Create a new Edge Firewall {#create-a-new-edge-firewall}

Enables a new Edge Firewall to be created.

If you want to link your domains when creating your Edge Firewall, consider the *domains* field by filling in the list format, the respective domains id's.

#### **POST** */edge_firewall*

Permission necessary: **Edit Edge Firewall**

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string |
| Accept *(mandatory)* | Details about the type of return and version | header | string;<br>*application/json;version=3* |
| Content-Type *(mandatory)* | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string |

**Example Request**

~~~
POST /edge_firewall
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
Content-Type: application/json
~~~

~~~
{
    "name": "Edge Firewall",
    "domains": [ ],
    "is_active": true,
    "edge_functions_enabled": true,
    "network_protection_enabled": true,
    "waf_enabled": false
}
~~~

**Example Response**

~~~
{
    "results": {
        "name": "Edge Firewall",
        "waf_enabled": false,
        "is_active": true,
        "edge_functions_enabled": true,
        "last_modified": "2020-10-27T14:31:23.508950Z",
        "domains": [],
        "last_editor": "azion@azion.com.br",
        "network_protection_enabled": true,
        "id": 299
    },
    "schema_version": 3
}
~~~

---

## 5. Overwrite an Edge Firewall {#overwrite-an-edge-firewall}

Overwrite all the fields of an Edge Firewall, retaining the id.

#### **PUT** */edge_firewall/:id*

Permission necessary: **Edit Edge Firewall**

| Parameter | Description | Type | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string |
| Accept *(mandatory)* | Details about the type of return and version | header | string;<br>*application/json;version=3* |
| Content-Type *(mandatory)* | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string |
| :id *(mandatory)* | The Id of the Edge Firewall to be overwritten. | path | number |

**Example Request**

~~~
PUT /edge_firewall/1555421177
Accept: application/json; version=3
Authorization: token ec6aabdc0b6bbeed826a36d8731630e36b6e3f24
Content-Type: application/json
~~~

~~~
{
    "name": "Edge Firewall changed by API",
    "domains": [
        12312312,
        12321323
    ],
    "is_active": true,
    "edge_functions_enabled": true,
    "network_protection_enabled": true,
    "waf_enabled": true
}
~~~

**Example Response**

~~~
{
    "results": {
        "name": "Edge Firewall changed by API",
        "waf_enabled": true,
        "is_active": true,
        "edge_functions_enabled": true,
        "last_modified": "2020-10-27T14:33:49.191317Z",
        "domains": [
            12312312,
            12321323
        ],
        "last_editor": "azion@azion.com.br",
        "network_protection_enabled": true,
        "id": 155
    },
    "schema_version": 3
}
~~~

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)