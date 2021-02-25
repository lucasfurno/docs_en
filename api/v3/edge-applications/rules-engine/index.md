#  **Rules Engine**

[Edit on GitHub  <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/api/v3/edge-applications/rules-engine/index.md)

With the API of Rules Engine, you can check, remove or update existing settings, besides creating new ones.

> 1. [Looking up a list of Rules Engine](#looking-up-a-list-of-rules-engine)
> 2. [Looking up details of Rules Engine](#looking-up-details-of-rules-engine)
> 3. [Deleting Rules Engine](#deleting-rules-engine)
> 4. [Creating new Rules Engine](#creating-new-rules-engine)
> 5. [Overwriting Rules Engine](#overwriting-rules-engine)
> 6. [Updating the fields of Rules Engine](#updating-the-fields-of-rules-engine)

---

## 1. Looking up a list of Rules Engine {#looking-up-a-list-of-rules-engine}

This return results in a list of Rules Engine.

#### **GET** */edge_applications/:edge_application_id:/rules_engine/:phase:/rules*

Necessary permission: **View Edge Application**

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |



**Request Example**

~~~
GET /edge_applications/1601406733/rules_engine/request/rules
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
~~~

**Response Example**

~~~
{
    "count": 4,
    "total_pages": 1,
    "schema_version": 3,
    "links": {
        "previous": null,
        "next": null
    },
    "results": [
        {
            "id": 9523,
            "name": "Default Rule",
            "phase": "default",
            "behaviors": [
                {
                    "name": "set_origin",
                    "target": "7226"
                },
                {
                    "name": "bypass_cache_phase",
                    "target": null
                }
            ],
            "criteria": [
                [
                    {
                        "variable": "${uri}",
                        "operator": "starts_with",
                        "conditional": "if",
                        "input_value": "/"
                    }
                ]
            ],
            "is_active": true,
            "order": 1
        },
        {
            "id": 9539,
            "name": "Image",
            "phase": "request",
            "behaviors": [
                {
                    "name": "bypass_cache_phase",
                    "target": null
                },
                {
                    "name": "optimize_images",
                    "target": null
                }
            ],
            "criteria": [
                [
                    {
                        "variable": "${request_uri}",
                        "operator": "matches",
                        "conditional": "if",
                        "input_value": "\\.(jpg|jpeg|gif|bmp|png)"
                    }
                ]
            ],
            "is_active": true,
            "order": 1
        },
        {
            "id": 14086,
            "name": "The Rule 2",
            "phase": "request",
            "behaviors": [
                {
                    "name": "bypass_cache_phase",
                    "target": null
                }
            ],
            "criteria": [
                [
                    {
                        "variable": "${uri}",
                        "operator": "starts_with",
                        "conditional": "if",
                        "input_value": "/"
                    },
                    {
                        "variable": "${uri}",
                        "operator": "does_not_start_with",
                        "conditional": "and",
                        "input_value": "/if"
                    }
                ]
            ],
            "is_active": true,
            "order": 2
        },
        {
            "id": 14714,
            "name": "The Rule",
            "phase": "request",
            "behaviors": [
                {
                    "name": "deliver",
                    "target": null
                }
            ],
            "criteria": [
                [
                    {
                        "variable": "${uri}",
                        "operator": "starts_with",
                        "conditional": "if",
                        "input_value": "/"
                    },
                    {
                        "variable": "${uri}",
                        "operator": "does_not_start_with",
                        "conditional": "and",
                        "input_value": "/if"
                    }
                ]
            ],
            "is_active": true,
            "order": 3
        }
    ]
}
~~~

---

## 2. Looking up details of Rules Engine {#looking-up-details-of-rules-engine}

Results in details of Rules Engine. The information originated by this return refers to the Rules Engine of an Edge Application.

#### **GET** /edge_applications/:edge_application_id:/rules_engine/:phase:/rules/rules_engine_id:  INVENTEI 

Necessary permission: **View Edge Application**

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| :id *(mandatory)*           | The id of Rules Engine that you plan to query.               | path   | number                                  |



**Request Example**

~~~
GET /edge_applications/1601406733/rules_engine/request/rules/13010
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

## 3. Deleting Rules Engine {#deleting-rules-engine}

This return removes a Rules Engine. This operation is final: there is no way to roll back the information after it has been confirmed by the user.

All information associated with this cache setting will also be removed.

The API does not require confirmation in order to run this instruction.

#### **DELETE** */edge_applications/:edge_application_id:/rules_engine/:phase:/rules*

Necessary permission: **Edit Edge Application**

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| :id *(mandatory)*           | The id of Rules Engine that you plan to delete.              | path   | number                                  |



**Request Example**

~~~
DELETE /edge_applications/1601406733/rules_engine/request/rules/13010
Accept: application/json; version=3
Authorization: token 2909f3932069047f4736dc87e72baaddd19c9f75
~~~

**Response Example**

~~~
HTTP/2 204
~~~

---

## 4. Creating new Rules Engine {#creating-new-rules-engine}

This return enables the creation of new Rules Engine within an Edge Application.

#### **POST** */edge_applications/:edge_application_id:/rules_engine/:phase:/rules*

Necessary permission: **Edit Security Settings**

**Mandatory parameters**

| Parameter                   | Description                                                  | Type   | Type of Data                            |
| --------------------------- | ------------------------------------------------------------ | ------ | --------------------------------------- |
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation]({% tl api_v3_authentication %}#criacao-de-token) | header | string                                  |
| Accept *(mandatory)*        | Details about the type of return and version                 | header | string;<br>*application/json;version=3* |
| Content-Type *(mandatory)*  | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string                                  |



**Request Example**

~~~
POST /edge_applications/1601406733/rules_engine/request/rules
Accept: application/json; version=3
Authorization: token cf2078926f91a6e638af3f4a6977b505edfe5941
Content-Type: application/json
~~~

~~~
{
    "name": "New Rule 1",
    "criteria": [
              		[
                    	{
                    		"conditional": "if",
                    		"variable": "${uri}",
                    		"operator": "starts_with",
                    		"input_value": "/"
                    	},
                    	{
                    		"conditional": "and",
                    		"variable": "${uri}",
                    		"operator": "does_not_start_with",
                    		"input_value": "/if"
                    	}
                	]
            	],
    "behaviors": [
            		{
            			"name": "deliver"
            		}
            	]
}
~~~

**Response Example**

~~~
{
    "results": {
        "id": 15116,
        "name": "New Rule 1",
        "phase": "request",
        "behaviors": [
            {
                "name": "deliver",
                "target": null
            }
        ],
        "criteria": [
            [
                {
                    "variable": "${uri}",
                    "operator": "starts_with",
                    "conditional": "if",
                    "input_value": "/"
                },
                {
                    "variable": "${uri}",
                    "operator": "does_not_start_with",
                    "conditional": "and",
                    "input_value": "/if"
                }
            ]
        ],
        "is_active": true,
        "order": 4
    },
    "schema_version": 3
}
~~~

---

## 5. Overwriting Rules Engine {#overwriting-rules-engine}

This return overwrites all the fields of Rules Engine, retaining the id.

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

## 6. Updating the fields of Rules Engine {#updating-the-fields-of-rules-engine}

This return updates one or more fields of Rules Engine, retaining the value of those fields not included.

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

Didn't find what you were looking for? [Start a ticket with our support team.](https://tickets.azion.com/)
