# Network **Lists**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/api/v3/network-lists/index.md)

Through the Network Lists API you can create, consult or update Network Lists used in the Rules Engine of the New Edge Firewall.

> 1. [Check the list of Network Lists](#consultar-lista-network-lists)
> 2. [Consult data of a Network List](#consultar-dados-network-lists)
> 3. [Create a new Network List](#criar-network-lists)
> 4. [Overwrite a Network List](#sobrescrever-network-lists)

---

1. ## Check the list of Network Lists {#consultar-lista-network-lists}

Returns the list of Network Lists.

#### **GET** */network_lists*

Required permission: **View Network Lists**

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|-----------|-------------|------|----------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept *(required)* | Information about the return type and version | header | string;<br> *application/json;version=3* |

**Request Example**

~~~
GET /network_lists 
Accept: application/json; version=3
Authorization: token ec6aabdc0b6bbeed826a36d8731630e36b6e3f22
Content-Type: application/json
~~~

**Answer Example**

~~~

    {
    "count": 3,
    "total_pages": 1,
    "schema_version": 3,
    "links": {
        "previous": null,
        "next": null
    },
    "results": [
        {
            "id": 9,
            "last_editor": "products@azion.com",
            "last_modified": "2019-12-11T18:15:29.073687Z",
            "list_type": "ip_cidr",
            "name": "Azion IP"
        },
        {
            "id": 17,
            "last_editor": "products@azion.com",
            "last_modified": "2019-12-11T18:15:35.124016Z",
            "list_type": "asn",
            "name": "Azion ASN"
        },
        {
            "id": 20,
            "last_editor": "products@azion.com",
            "last_modified": "2019-12-11T18:14:10.514494Z",
            "list_type": "countries",
            "name": "Azion Country"
        }
    ]
}
~~~

---

## 2. Consult data of a Network List {#consultar-dados-network-lists}

Returns the details of a Network List The information that is returned in this call refers to Network Lists that can be linked to one or more Rule Sets from the New Edge Firewall.

#### **GET** */network_lists/:id*

Required permission: **View Network Lists**

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|-----------|-------------|------|----------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept *(required)* | Information about the return type and version | header | string;<br> *application/json;version=3* |
| :id *(required)* | The id of the network list to be consulted. | path | number |

**Request Example**

~~~
GET /network_lists/111
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5942
~~~

**Answer Example**

Response for IP/CIDR type list:

~~~
{
    "results": {
        "last_editor": "products@azion.com",
        "last_modified": "2019-09-12T14:07:26.871995Z",
        "list_type": "ip_cidr",
        "name": "IP Blacklist - Azion Docs",
        "items_values": [
            "10.1.1.10/16",
            "192.168.0.1",
            "192.168.0.2/32"
        ]
    },
    "schema_version": 3
}
~~~

Response for a ASN type list:

~~~
{
    "results": {
        "last_editor": "RTM User Name",
        "last_modified": "2019-09-12T14:07:26.871995Z",
        "list_type": "asn",
        "name": "ASN List",
        "items_values": [
            1234,
            4321
        ]
    },
    "schema_version": 3
}
~~~

Response for a Countries type list:

~~~
{
    "results": {
        "last_editor": "RTM User Name",
        "last_modified": "2019-09-12T14:07:26.871995Z",
        "list_type": "countries",
        "name": "Countries List",
        "items_values": [
            "CN",
            "RU"
        ]
    },
    "schema_version": 3
}
~~~

---

## 3. Create a new Network List {#criar-network-lists}

Allows for the creation of a new Network List.

#### **POST** */network_lists*

Required permission: **Edit Network Lists**

| Parameter | Description | Type | Type of Data |
|-----------|-------------|------|----------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept *(required)* | Information about the return type and version | header | string;<br>*application/json;version=3* |
| Content-Type *(required)* | The type of encoding used in Body (application/json). <br><br>e.g.:<br><br>Content-Type: application/json | header | string |

**Request Example**

~~~
POST /network_lists
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
Content-Type: application/json
~~~

~~~
{
    "name": "Network List criada pela API",
    "items_values": [
    	   "192.168.0.1",
        "192.168.0.2/32",
        "10.1.1.10/16"
    ],
    "list_type": "ip_cidr"
}
~~~

**Answer Example**

~~~
{
    "results": {
        "items_values": [
            "10.1.1.10/16",
            "192.168.0.1",
            "192.168.0.2/32"
        ],
        "name": "Network List criada pela API",
        "last_modified": "2019-12-11T18:28:35.349078Z",
        "list_type": "ip_cidr",
        "last_editor": "products@azion.com",
        "id": 85
    },
    "schema_version": 3
}
~~~

---

## 4. Overwrite a Network List {#sobrescrever-network-lists}

Overwrite all fields of a Network List, while preserving the id. 

#### **PUT** */network_lists/:id*

Required permission: **Edit Network Lists**

| Parameter | Description | Type | Type of Data |
|-----------|-------------|------|----------------|
| Authorization *(required)* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept *(required)* | Information about the return type and version | header | string;<br>*application/json;version=3* |
| Content-Type *(required)* | The type of encoding used in Body (application/json). <br><br>e.g.:<br><br>Content-Type: application/json | header | string |
| :id *(required)* | Id of the Network List to be overwritten. | path | number |

**Request Example**

~~~
PUT /network_lists/85
Accept: application/json; version=3
Authorization: token ec6aabdc0b6bbeed826a36d8731630e36b6e3f22
Content-Type: application/json
~~~

Request for IP/CIDR type list:

~~~
{
    "name": "Network List Modificada pela API",
    "items_values": [
    	"192.168.0.5",
        "192.168.0.2/32",
        "10.1.1.10/16"
    ],
    "list_type": "ip_cidr"
}
~~~

Request for a ASN type list:

~~~
{
    "items_values": [
    	   "1234",
        "4321"
    ],
    "name": "ASN - Azion Docs - Modificada pela API",
    "list_type": "asn"
}
~~~

Request for a Countries type list:

~~~
{
    "items_values": [
    	"BR",
    	"AG",
    	"US"
 ],
    "name": "Country Modificada pela API",
    "list_type": "countries"
}
~~~

**Answer Example**

Response for IP/CIDR type list:

~~~
{
    "results": {
        "items_values": [
            "10.1.1.10/16",
            "192.168.0.2/32",
            "192.168.0.5"
        ],
        "name": "Network List Modificada pela API",
        "last_modified": "2019-12-11T18:31:41.780397Z",
        "list_type": "ip_cidr",
        "last_editor": "products@azion.com",
        "id": 85
    },
    "schema_version": 3
}
~~~

Response for a ASN type list:

~~~
{
    "results": {
        "items_values": [
            1234,
            4321
        ],
        "name": "ASN - Azion Docs - Modificada pela API",
        "last_modified": "2019-12-11T18:36:07.282729Z",
        "list_type": "asn",
        "last_editor": "products@azion.com",
        "id": 17
    },
    "schema_version": 3
}
~~~

Response for a Countries type list:

~~~
{
    "results": {
        "items_values": [
            "BR",
            "US",
            "AG"
        ],
        "name": "Country Modificada pela API",
        "last_modified": "2019-12-11T18:33:51.781496Z",
        "list_type": "countries",
        "last_editor": "products@azion.com",
        "id": 20
    },
    "schema_version": 3
}
~~~

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)
