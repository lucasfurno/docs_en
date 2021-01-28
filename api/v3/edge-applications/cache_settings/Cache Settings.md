#  **Cache Settings**

[Edit on GitHub  <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/api/v3/edge-applications/index.md)

With the API of Cache Settings, you can check, remove or update existing settings, besides creating new ones.

> 1. [Looking up a list of Cache Settings](#looking-up-a-list-of-cache-settings)
> 2. [Looking up details of Cache Settings](#looking-up-details-of-cache-settings)
> 3. [Deleting Cache Settings](#deleting-cache-settings)
> 4. [Creating new Cache Settings](#creating-new-cache-settings)
> 5. [Overwriting Cache Setings](#overwriting-cache-settings)
> 6. [Updating the fields of Cache Settings](#updating-the-fields-of-cache-settings)

---

## 1. Looking up a list of Cache Settings {#looking-up-a-list-of-cache-settings}

This command results in a list of Cahce Settings.

#### **GET** */edge_applications/:edge_application_id:/cache_settings*

Necessary permission: **View Security Settings**

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |



**Request Example**

~~~
GET /edge_applications 
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
~~~

**Response Example**

~~~
{
    "count": 36,
    "total_pages": 18,
    "schema_version": 3,
    "links": {
        "previous": null,
        "next": "https://api.azionapi.net/edge_applications?page=2&page_size=2"
    },
    "results": [
        {
            "id": 1528990724,
            "name": "Edge Cloud Storage Google",
            "active": true,
            "origins": [
                {
                    "name": "Default Origin",
                    "origin_type": "single_origin",
                    "origin_id": "c2434ff9-b9a9-4937-8721-60d58ac54976"
                }
            ]
        },
        {
            "id": 1528990725,
            "name": "Edge Application",
            "active": true,
            "origins": [
                {
                    "name": "Default Origin",
                    "origin_type": "single_origin",
                    "origin_id": "25fe91c0-1a2c-4ce1-9e3f-a109d2cd3204"
                },
                {
                    "name": "Z1",
                    "origin_type": "single_origin",
                    "origin_id": "0924c04d-b00a-4653-8575-92053e0d0e2f"
                }
            ]
        }
    ]
}
~~~

---

## 2. Looking up details of Cache Settings {#looking-up-details-of-cache-settings}

Results in details of Cache Settings. The information resulted by this command refers to the main settings of an Application.

#### **GET** */edge_applications/:edge_application_id:/cache_settings*

Necessary permission: ***View Security Settings***

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| :id *(mandatory)*           | The id of the edge application that you plan to query.       | path   | number                                  |



**Request Example**

~~~
GET /edge_applications/1528990724
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
~~~

**Response Example**

~~~
{
    "results": {
        "id": 1528990724,
        "name": "Edge Application",
        "delivery_protocol": "http",
        "active": true,
        "application_acceleration": false,
        "caching": true,
        "device_detection": false,
        "edge_functions": false,
        "image_optimization": false,
        "load_balancer": false
    },
    "schema_version": 3
}
~~~

---

## 3. Deleting Cache Settings {#deleting-cache-settings}

This request removes a Cache Setting. This operation is final: there is no way to roll back the information after it has been confirmed by the user.

All information associated with this Edge Application will also be removed.

The API does not require confirmation in order to run this instruction.

#### **DELETE** */edge_applications/:edge_application_id:/cache_settings*

Necessary permission: **Edit Security Settings**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| :id *(mandatory)*           | The id of the edge application that you plan to delete.      | path   | number                                  |



**Request Example**

~~~
DELETE /edge_applications/1548170897
Accept: application/json; version=3
Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75
~~~

**Response Example**

~~~
HTTP/2 204
~~~

---

## 4. Creating new Cache Settings {#creating-new-cache-settings}

This order nables the creation of new Cache Settings within an Edge Application.

#### **POST** */edge_applications/:edge_application_id:/cache_settings*

Necessary permission: **Edit Security Settings**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| Content-Type *(mandatory)*  | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string                                  |



**Request Example**

~~~
POST /edge_applications/:edge_application_id:/cache_settings
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
Content-Type: application/json
~~~

~~~
{
    "name": "Test Cache Settings 2",
    "browser_cache_settings": "honor",
    "cdn_cache_settings": "honor",
    "cdn_cache_settings_maximum_ttl": "60",
    "cache_by_query_string": "all",
    "cache_by_cookies": "all",
    "l2_caching_enabled": false,
    "is_slice_configuration_enabled": true,
    "is_slice_edge_caching_enabled": true,
    "is_slice_l2_caching_enabled": false,
    "slice_configuration_range": false
}
~~~

**Response Example **

~~~
{
    "results": {
        "id": 8908,
        "name": "Test Cache Settings 2",
        "browser_cache_settings": "honor",
        "browser_cache_settings_maximum_ttl": 0,
        "cdn_cache_settings": "honor",
        "cdn_cache_settings_maximum_ttl": 60,
        "cache_by_query_string": "all",
        "query_string_fields": null,
        "enable_query_string_sort": false,
        "cache_by_cookies": "all",
        "cookie_names": null,
        "adaptive_delivery_action": "ignore",
        "device_group": [],
        "enable_caching_for_post": false,
        "l2_caching_enabled": false,
        "is_slice_configuration_enabled": true,
        "is_slice_edge_caching_enabled": true,
        "is_slice_l2_caching_enabled": false,
        "slice_configuration_range": null
    },
    "schema_version": 3
}
~~~

---

## 5. Overwriting Cache Settings {#overwriting-cache-settings}

This command overwrites all the fields of a Cache Setting, retaining the id.

If you only want to update some fields, without changing the values of the rest, consider using the PATCH method, instead of PUT.

#### **PUT** */edge_applications/:edge_application_id:/cache_settings*

Necessary Permission: **Edit Security Settings**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| Content-Type *(mandatory)*  | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string                                  |
| :id *(mandatory)*           | The Id of the Edge Application to be overwritten.            | path   | number                                  |



**Request Example**

~~~
PUT /edge_applications/1555421177
Accept: application/json; version=3
Authorization: token ec6aabdc0b6bbeed826a36d8731630e36b6e3f24
Content-Type: application/json
~~~

~~~
{
	"name": "Edge application alterada pela API",
    "delivery_protocol": "http",
    "active": true,
    "application_acceleration": true,
    "caching": true,
    "device_detection": false,
    "edge_functions": false,
    "image_optimization": false,
    "load_balancer": false
}
~~~

**Response Example**

~~~
{
    "results": {
        "id": 1555421177,
        "name": "Edge application alterada pela API",
        "delivery_protocol": "http",
        "active": true,
        "application_acceleration": true,
        "caching": true,
        "device_detection": false,
        "edge_functions": false,
        "image_optimization": false,
        "load_balancer": false
    },
    "schema_version": 3
}
~~~

---

## 6. Updating the fields Cache Settings {#updating-the-fields-of-cache-settings}

This request updates one or more fields of an Edge Application, retaining the value of those fields not included.

#### **PATCH** */edge_applications/:edge_application_id:/cache_settings*

Necessary permission: **Edit Security Settings**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| Content-Type *(mandatory)*  | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string                                  |
| :id *(mandatory)*           | The Id of the Edge Application to be overwritten.            | path   | number                                  |



**Request Example**

~~~
PATCH /edge_applications/1555421177 
Accept: application/json; version=3
Authorization: token ec6aabdc0b6bbeed826a36d8731630e36b6e3f24
Content-Type: application/json
~~~

~~~
{
    "application_acceleration": true,
    "edge_functions": true,
    "image_optimization": false
}
~~~

**Response Example**

~~~
{
    "results": {
        "id": 1555421177,
        "name": "Edge application alterada pela API",
        "delivery_protocol": "http",
        "active": true,
        "application_acceleration": true,
        "caching": true,
        "device_detection": false,
        "edge_functions": true,
        "image_optimization": false,
        "load_balancer": false
    },
    "schema_version": 3
}
~~~

---

Didn't find what you were looking for? [Start a support ticket.](https://tickets.azion.com/)

