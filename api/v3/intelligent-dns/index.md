

# Intelligent **DNS**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/api/v3/intelligent-dns/index.md)

Use the Intelligent DNS API to create, query, update and delete your Hosted Zones and Records.

> 1. [Retrieve the list of Hosted Zones](#retrieve-list-hosted-zone)
> 2. [Retrieve data of a Hosted Zone](#retrieve-hosted-zone)
> 3. [Create a new Hosted Zone](#create-hosted-zone)
> 4. [Edit a Hosted Zone](#edit-hosted-zone)
> 5. [Delete a Hosted Zone](#delete-hosted-zone)
> 6. [Retrieve list of Records per Hosted Zones](#retrieve-list-record)
> 7. [Create a new Record](#create-record)
> 8. [Edit a Record](#edit-record)
> 9. [Delete a Record](#delete-record)

---

## 1. Retrieve the list of Hosted Zones {#retrieve-list-hosted-zone}

It returns the list of Hosted Zones.

#### **GET** */intelligent_dns*

Required permission: ***View Intelligent DNS***

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|--------|--------|--------|--------|
| Authorization **required* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept **required* | Information about the return type and version | header | string; <br><br> mandatory: *application/json;version=3* |

**Request Example**

~~~
GET /intelligent_dns 
Accept: application/json; version=3
Authorization: token ec6aabdc0b6bbeed826a36d8731630e36b6e3f22
~~~

**Response Example**

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

## 2. Retrieve data of a Hosted Zone {#retrieve-hosted-zone}

It returns the details of a Hosted Zone.

#### **GET** */intelligent_dns/:id*

Required permission: ***View Intelligent DNS***

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|--------|--------|--------|--------|
| Authorization **required* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept **required* | Information about the return type and version | header | string; <br><br> mandatory: *application/json;version=3* |
| :id <br>**required* | ID of the hosted zone to be queried. | path | number |

**Request Example**

~~~
GET /intelligent_dns/111
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5942
~~~

**Response Example**

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

## 3. Create a new Hosted Zone {#create-hosted-zone}

It enables you to create a new Hosted Zone.

#### **POST** */intelligent_dns*

Required permission: ***Edit Intelligent DNS***

| Parameter | Description | Type | Type of Data |
|--------|--------|--------|--------|
| Authorization **required* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept **required* | Information about the return type and version | header | string; <br><br> mandatory: *application/json;version=3* |
| Content-Type **required* | The type of encoding used in Body (application/json). <br><br>Example: <br>Content-Type: application/json | header | string |

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

**Response Example**

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

## 4. Edit a Hosted Zone {#edit-hosted-zone}

It enables you to modify a Hosted Zone that has already been created.

#### **PUT** */intelligent_dns/:zone_id* 

Required permission: ***Edit Intelligent DNS***

| Parameter                 | Description                                                  | Type   | Type of Data                                             |
| ------------------------- | ------------------------------------------------------------ | ------ | -------------------------------------------------------- |
| Authorization **required* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string                                                   |
| Accept **required*        | Information about the return type and version                | header | string; <br><br> mandatory: *application/json;version=3* |
| Content-Type **required*  | The type of encoding used in Body (application/json). <br><br>Example:<br>Content-Type: application/json | header | string                                                   |
| :zone_id **required*      | ID of a previously created Hosted Zone.                      | path   | number                                                   |

**Request Example**

```
PUT /intelligent_dns/111
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
Content-Type: application/json
```

```
{
    "name": "Hosted Zone Editada pela API",
    "domain": "mydomain.com",
    "is_active": true
}
```

**Response Example**

```
{
    "results": {
        "domain": "mydomain.com",
        "expiry": 1209600,
        "id": 111,
        "is_active": true,
        "name": "Hosted Zone Editada pela API",
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
```

## 5. Delete a Hosted Zone {#delete-hosted-zone}

It enables you to delete a Hosted Zone that has already been created.

#### **DELETE** */intelligent_dns/:zone_id*

Required permission: ***Edit Intelligent DNS***

| Parameter                 | Description                                                  | Type   | Type of Data                                             |
| ------------------------- | ------------------------------------------------------------ | ------ | -------------------------------------------------------- |
| Authorization **required* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string                                                   |
| Accept **required*        | Information about the return type and version                | header | string; <br><br> mandatory: *application/json;version=3* |
| :zone_id **required*      | ID of a previously created Hosted Zone.                      | path   | number                                                   |

**Request Example**

```
DELETE /intelligent_dns/111/records/333
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
```

**Response Example**

```
HTTP/2 204
```

## 6. Retrieve list of Records per Hosted Zones {#retrieve-list-record} 

It returns the Records’ list of Hosted Zones.

#### **GET** */intelligent_dns/:id/records*

Required permission: ***View Intelligent DNS***

**Mandatory parameters**

| Parameter | Description | Type | Type of Data |
|--------|--------|--------|--------|
| Authorization **required* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept **required* | Information about the return type and version | header | string; <br><br> mandatory: *application/json;version=3* |
| :id <br>**required* | ID of the hosted zone to be queried. | path | number |

**Request Example**

~~~
GET /intelligent_dns/111/records
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5942
~~~

**Response Example**

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

## 7. Create a new Record {#create-record}

It enables the creation of a Record linked to a Hosted Zone.

#### **POST** */intelligent_dns/:zone_id/records*

Required permission: ***Edit Intelligent DNS***

| Parameter | Description | Type | Type of Data |
|--------|--------|--------|--------|
| Authorization **required* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string |
| Accept **required* | Information about the return type and version | header | string; <br><br> mandatory: *application/json;version=3* |
| Content-Type **required* | The type of encoding used in Body (application/json). <br><br>Example:<br>Content-Type: application/json | header | string |
| :zone_id **required* | ID of the hosted zone to be queried. | path | number |

**Request Example**

~~~
POST /intelligent_dns/111/records
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
Content-Type: application/json
{
    "record_type": "ANAME",
    "entry": "@",
    "answers_list": [
        "123456a.ha.azioncdn.net"
    ],
    "ttl": 20
}
~~~

**Response Example**

```
{
   "results": {
       "zone_id": 111,
       "id": 333,
       "record_type": "ANAME",
       "entry": "@"
       "answers_list": [
           "123456a.ha.azioncdn.net"
       ],
       "ttl": 20,
   },
   "schema_version": 3
}
```

## 8 - Edit a Record {#edit-record}

It enables you to modify a Record that has already been created.

#### **PUT** */intelligent_dns/:zone_id/records/:record_id*

Required permission: ***Edit Intelligent DNS***

| Parameter                 | Description                                                  | Type   | Type of Data                                             |
| ------------------------- | ------------------------------------------------------------ | ------ | -------------------------------------------------------- |
| Authorization **required* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string                                                   |
| Accept **required*        | Information about the return type and version                | header | string; <br><br> mandatory: *application/json;version=3* |
| Content-Type **required*  | The type of encoding used in Body (application/json). <br><br>Example:<br>Content-Type: application/json | header | string                                                   |
| :zone_id **required*      | ID of the hosted zone to be queried.                         | path   | number                                                   |
| :record_id **required*    | ID of a previously created Record.                           | path   | number                                                   |

**Request Example**

```
PUT /intelligent_dns/111/records/333
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
Content-Type: application/json
```

```
{
    "record_type": "CNAME",
    "entry": "www",
    "answers_list": [
        "123456a.ha.azioncdn.net"
    ],
    "ttl": 3600
}
```

**Response Example**

```
{
   "results": {
       "zone_id": 111,
       "id": 333,       
       "record_type": "CNAME",
       "entry": "www"
       "answers_list": [
           "123456a.ha.azioncdn.net"
       ],
       "ttl": 3600,
   },
   "schema_version": 3
}
```

## 9. Delete a Record {#delete-record}

It enables you to delete a Record linked to a Hosted Zone already created.

#### **DELETE** */intelligent_dns/:zone_id/records/:record_id*

Required permission: ***Edit Intelligent DNS***

| Parameter                 | Description                                                  | Type   | Type of Data                                             |
| ------------------------- | ------------------------------------------------------------ | ------ | -------------------------------------------------------- |
| Authorization **required* | Token authentication previously created through the [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) endpoint | header | string                                                   |
| Accept **required*        | Information about the return type and version                | header | string; <br><br> mandatory: *application/json;version=3* |
| Content-Type **required*  | The type of encoding used in Body (application/json). <br><br>Example:<br>Content-Type: application/json | header | string                                                   |
| :zone_id **required*      | ID of the hosted zone to be queried.                         | path   | number                                                   |
| :record_id **required*    | ID of a previously created Record.                           | path   | number                                                   |

**Request Example**

```
DELETE /intelligent_dns/111/records/333
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
```

**Response Example**

```
HTTP/2 204
```

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)

