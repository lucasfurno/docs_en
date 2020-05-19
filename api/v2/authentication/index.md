# Authentication

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/api/v2/authentication/index.md)

The authentication and authorization of operations via the Azion API, through Tokens.

The first step is to create the Token by authenticating a user in [Real-Time Manager](https://manager.azion.com/login/?next=/).

> 1. [How to code the User and Password in Base64](#como-codificar-usuario-e-senha-em-base64)
> 2. [Token Creation](#criacao-de-token)
> 3. [Revoking a Token](#revogacao-de-token)

---

## 1. How to code the User and Password in Base64 {#como-codificar-usuario-e-senha-em-base64}

Only the creation and revocation operations are done using Basic Authentication, i.e. with the user and password. You can create and revoke the token through the API itself, but to do this you first need to code the user and password in base64.

The base64 coding can be done in the command line of a Unix terminal:

~~~
$ echo 'user@domain:password'|base64
 dXNlckBkb21haW46cGFzc3dvcmQK
~~~

If you don’t have a Unix terminal available, you can use the free online service at [https://www.base64encode.org/](https://www.base64encode.org/).

---

## 2. Token Creation {#criacao-de-token}

#### **POST** */tokens*

| Parameter | Description | Type of Parameter | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(mandatory)* | The basic authentication in order to create a Token is done through the pair “user@domain:password” coded in base64 and sent by an HTTP request with the header “Authorization: Basic <base64>”.<br><br>For example, if the user was “user@domain” and the password was “password” the resulting base64 coding for the string “user@domain:password” would be “dXNlckBkb21haW46cGFzc3dvcmQK” and the header that would be sent would be:<br><br>e.g.:<br><br>Authorization:<br>Basic<br>dXNlckBkb21haW46cGFzc3dvcmQK | header | string |

**Example Request**

~~~
POST /tokens
Accept: application/json; version=2
Authorization: Basic dXNlckBkb21haW46cGFzc3dvcmQK
~~~

**Example Response**
~~~
HTTP/2 201
~~~

~~~
{  
   "token":"583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf",
   "created_at":"2016-11-18T14:10:58.024903Z",
   "expires_at":"2016-11-19T14:10:58.024903Z"
}
~~~

---

## 3. Revoking a Token {#revogacao-de-token}

#### **DELETE** */tokens/:token*

| Parameter | Description | Type of Parameter | Type of Data |
|-----------|-----------|------|--------------|
| Authorization *(mandatory)* | The basic authentication in order to revoke a Token is done through the pair “user@domain:password” coded in base64 and sent by an HTTP request with the header “Authorization: Basic <base64>”.<br><br>For example, if the user was “user@domain” and the password was “password” the resulting base64 coding for the string “user@domain:password” would be “dXNlckBkb21haW46cGFzc3dvcmQK” and the header that would be sent would be:<br><br>e.g.:<br><br>Authorization:<br>Basic<br>dXNlckBkb21haW46cGFzc3dvcmQK | header | string |
| :token *(mandatory)* | Token that you want to delete | path | string |

**Example Request**

~~~
DELETE /tokens/583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf
Accept: application/json; version=2
Authorization: Basic dXNlckBkb21haW46cGFzc3dvcmQK
~~~

**Example Response**

~~~
HTTP/2 204
~~~

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)


