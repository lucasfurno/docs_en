---
layout: page-api-md
title:   pages.api_v3_edge_applications.title 
description:  pages.api_v3_edge_applications.description 
meta_tags:  pages.api_v3_edge_applications.meta_tags 

namespace:     api_v3_edge_applications_cache_settings

permalink:      /documentation/products/api/v3/edge-applications/cache-settings/
permalink_en:   /documentation/products/api/v3/edge-applications/cache-settings/
permalink_pt-br:   /documentacao/produtos/api/v3/edge-applications/cache-settings/
---
#  **Cache Settings**

[Edit on GitHub  <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/api/v3/edge-applications/cache_settings/index.md)

With the API of Cache Settings, you can check, remove or update existing settings, besides creating new ones.

> 1. [Looking up a list of Cache Settings](#looking-up-a-list-of-cache-settings)
> 2. [Looking up details of Cache Settings](#looking-up-details-of-cache-settings)
> 3. [Deleting Cache Settings](#deleting-cache-settings)
> 4. [Creating new Cache Settings](#creating-new-cache-settings)
> 5. [Overwriting Cache Setings](#overwriting-cache-settings)
> 6. [Updating the fields of Cache Settings](#updating-the-fields-of-cache-settings)

---

## 1. Looking up a list of Cache Settings {#looking-up-a-list-of-cache-settings}

This return results in a list of Cache Settings.

#### **GET** */edge_applications/:edge_application_id:/cache_settings*

Necessary permission: **View Edge Application**

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |



**Request Example**

~~~
GET /edge_applications/3790128/cache_settings 
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
~~~

**Response Example**

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
            "id": 6734,
            "name": "Default Cache Settings",
            "browser_cache_settings": "honor",
            "browser_cache_settings_maximum_ttl": 0,
            "cdn_cache_settings": "honor",
            "cdn_cache_settings_maximum_ttl": 0,
            "cache_by_query_string": "all",
            "query_string_fields": null,
            "enable_query_string_sort": false,
            "cache_by_cookies": "all",
            "cookie_names": [""],
            "adaptive_delivery_action": "ignore",
            "device_group": [],
            "enable_caching_for_post": false,
            "l2_caching_enabled": false,
            "is_slice_configuration_enabled": false,
            "is_slice_edge_caching_enabled": false,
            "is_slice_l2_caching_enabled": false,
            "slice_configuration_range": 1024
        }
    ]
}
~~~

---

## 2. Looking up details of Cache Settings {#looking-up-details-of-cache-settings}

Results in details of Cache Settings. The information resulted by this return refers to the cache setting of an Edge Application.

#### **GET** */edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:*

Necessary permission: **View Edge Application**

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| :id *(mandatory)*           | The id of the cache settings that you plan to query.       | path   | number                                  |



**Request Example**

~~~
GET /edge_applications/3790128/cache_settings/1528990724
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
~~~

**Response Example**

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
            "id": 6734,
            "name": "Default Cache Settings",
            "browser_cache_settings": "honor",
            "browser_cache_settings_maximum_ttl": 0,
            "cdn_cache_settings": "honor",
            "cdn_cache_settings_maximum_ttl": 0,
            "cache_by_query_string": "all",
            "query_string_fields": null,
            "enable_query_string_sort": false,
            "cache_by_cookies": "all",
            "cookie_names": [""],
            "adaptive_delivery_action": "ignore",
            "device_group": [],
            "enable_caching_for_post": false,
            "l2_caching_enabled": false,
            "is_slice_configuration_enabled": false,
            "is_slice_edge_caching_enabled": false,
            "is_slice_l2_caching_enabled": false,
            "slice_configuration_range": 1024
        }
    ]
}
~~~

---

## 3. Deleting Cache Settings {#deleting-cache-settings}

This return removes a Cache Setting. This operation is final: there is no way to roll back the information after it has been confirmed by the user.

All information associated with this cache setting will also be removed.

The API does not require confirmation in order to run this instruction.

#### **DELETE** */edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:*

Necessary permission: **Edit Edge Application**

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| :id *(mandatory)*           | The id of the Edge Application that you plan to delete.      | path   | number                                  |



**Request Example**

~~~
DELETE /edge_applications/3790128/cache_settings/1528990724
Accept: application/json; version=3
Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75
~~~

**Response Example**

~~~
HTTP/2 204
~~~

---

## 4. Creating new Cache Settings {#creating-new-cache-settings}

This return enables the creation of new Cache Settings within an Edge Application.

#### **POST** */edge_applications/:edge_application_id:/cache_settings*

Necessary permission: **Edit Security Settings**

**Mandatory parameters**

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
        "name": "Cache Settings",
        "browser_cache_settings": "honor",
        "browser_cache_settings_maximum_ttl": 0,
        "cdn_cache_settings": "honor",
        "cdn_cache_settings_maximum_ttl": 60,
        "cache_by_query_string": "all",
        "query_string_fields": null,
        "enable_query_string_sort": false,
        "cache_by_cookies": "all",
        "cookie_names": null,
        "device_group": [],
        "enable_caching_for_post": false,
        "l2_caching_enabled": false,
        "is_slice_configuration_enabled": true,
        "is_slice_edge_caching_enabled": true,
        "is_slice_l2_caching_enabled": false,
        "slice_configuration_range": null
}
~~~

**Response Example**

~~~
{
    "results": {
        "id": 8908,
        "name": "Cache Settings",
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

This return overwrites all the fields of a Cache Setting, retaining the id.

If you only want to update some fields, without changing the values of the rest, consider using the PATCH method, instead of PUT.

#### **PUT** */edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:*

Necessary Permission: **Edit Edge Application**

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| Content-Type *(mandatory)*  | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string                                  |
| :id *(mandatory)*           | The Id of the Cache Settings to be overwritten.            | path   | number                                  |



**Request Example**

~~~
PUT /edge_applications/3790128/cache_settings/1528990724
Accept: application/json; version=3
Authorization: token ec6aabdc0b6bbeed826a36d8731630e36b6e3f24
Content-Type: application/json
~~~

~~~
{
        "name": "Cache Settings - Overwrite",
        "browser_cache_settings": "honor",
        "browser_cache_settings_maximum_ttl": 0,
        "cdn_cache_settings": "honor",
        "cdn_cache_settings_maximum_ttl": 60,
        "cache_by_query_string": "all",
        "query_string_fields": null,
        "enable_query_string_sort": false,
        "cache_by_cookies": "all",
        "cookie_names": null,
        "device_group": [],
        "enable_caching_for_post": false,
        "l2_caching_enabled": false,
        "is_slice_configuration_enabled": true,
        "is_slice_edge_caching_enabled": true,
        "is_slice_l2_caching_enabled": false,
        "slice_configuration_range": null
}
~~~

**Response Example**

~~~
{
    "results": {
        "id": 8907,
        "name": "Cache Settings - Overwrite",
        "browser_cache_settings": "honor",
        "browser_cache_settings_maximum_ttl": 0,
        "cdn_cache_settings": "honor",
        "cdn_cache_settings_maximum_ttl": 60,
        "cache_by_query_string": "all",
        "query_string_fields": null,
        "enable_query_string_sort": false,
        "cache_by_cookies": "all",
        "cookie_names": null,
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

## 6. Updating the fields of Cache Settings {#updating-the-fields-of-cache-settings}

This return updates one or more fields of a cache setting, retaining the value of those fields not included.

#### **PATCH** */edge_applications/:edge_application_id:/cache_settings/:cache_settings_id:*

Necessary permission: **Edit Edge Application**

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| Content-Type *(mandatory)*  | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string                                  |
| :id *(mandatory)*           | The Id of the Cache Settings to be overwritten.            | path   | number                                  |



**Request Example**

~~~
PATCH /edge_applications/3790128/cache_settings/1528990724
Accept: application/json; version=3
Authorization: token ec6aabdc0b6bbeed826a36d8731630e36b6e3f24
Content-Type: application/json
~~~

~~~
{
        "browser_cache_settings_maximum_ttl": 0,
        "cdn_cache_settings": "honor",
        "cdn_cache_settings_maximum_ttl": 60,
        "cache_by_query_string": "all",
        "query_string_fields": null
}
~~~

**Response Example**

~~~
{
    "results": {
        "id": 8907,
        "name": "Cache Settings - Update",
        "browser_cache_settings": "honor",
        "browser_cache_settings_maximum_ttl": 0,
        "cdn_cache_settings": "honor",
        "cdn_cache_settings_maximum_ttl": 60,
        "cache_by_query_string": "all",
        "query_string_fields": null,
        "enable_query_string_sort": false,
        "cache_by_cookies": "all",
        "cookie_names": null,
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

Didn't find what you were looking for? [Start a support ticket.](https://tickets.azion.com/)
