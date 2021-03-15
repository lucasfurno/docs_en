---
layout: page-api-md
title:   pages.api_v2_digital_certificates.title 
description:  pages.api_v2_digital_certificates.description 
meta_tags:  pages.api_v2_digital_certificates.meta_tags 

namespace:     api_v2_cloud_security_digital_certificates

permalink:      /documentation/products/api/v2/digital-certificates/
permalink_en:   /documentation/products/api/v2/digital-certificates/
permalink_pt-br:   /documentacao/produtos/api/v2/digital-certificates/
---
# Digital **Certificates**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/api/v2/cloud-security/digital-certificates/index.md)

The Digital Certificates API allows you to check, create, remove or update your SSL certificates.

> 1. [Look up a list of Digital Certificates](#consultar-lista-de-digital-certificates)
> 2. [Look up details of a  Digital Certificate](#consultar-dados-de-um-digital-certificate)
> 3. [Delete a Digital Certificate](#deletar-um-digital-certificate)
> 4. [Create a new Digital Certificate](#criar-um-novo-digital-certificate)
> 5. [Overwrite a Digital Certificate](#sobrescrever-um-digital-certificate)
> 6. [Update fields in a Digital Certificate](#atualizar-campos-de-um-digital-certificate)

---

## 1. Look up a list of Digital Certificates {#consultar-lista-de-digital-certificates}

Returns a list of Digital Certificates.

#### **GET** */digital_certificates*

Permission necessary: **View Security Settings**

| Parameter | Description | Type of Parameter | Type of Data |
|-----------|-------------|-------------------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation](% tl api_v2_authentication %}/#criacao-de-token)<br><br>e.g.:<br><br>Authorization:<br>583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf | header | string |

**Example Request**

~~~
GET /digital_certificates
Accept: application/json; version=2
Authorization: Token 583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf
~~~

**Example Response**

~~~
HTTP/2 200
~~~

~~~
[
   {
      "id": 9,
      "name": "Certificado SSL para www.sitedemonstration.com.br"
   },
   {
      "id": 344,
      "name": "Certificado SSL para www.mydomain.com"
   }
]
~~~

---

## 2. Look up details of a Digital Certificate {#consultar-dados-de-um-digital-certificate}

Returns the data of a Digital Certificate.

#### **GET** */digital_certificates/:id*

Permission necessary: **View Security Settings**

| Parameter | Description | Type of Parameter | Type of Data |
|-----------|-------------|-------------------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation](% tl api_v2_authentication %}/#criacao-de-token)<br><br>e.g.:<br><br>Authorization:<br>583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf | header | string |
| :id *(mandatory)* | Id of the Digital Certificate to be queried. To get the ID of a Digital Certificate, look up the [Digital Certificates List](#consultar-lista-de-digital-certificates) | path | number |

**Example Request**

~~~
GET /digital_certificates/344
Accept: application/json; version=2
Authorization: Token 583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf
~~~

**Example Response**

~~~
HTTP/2 200
~~~

~~~
{
    "id": 344,
    "name": "Certificado SSL para www.mydomain.com"
}
~~~

---

## 3. Delete a Digital Certificate {#deletar-um-digital-certificate}

Remove a Digital Certificate You cannot remove a certificate that is currently in use.

#### **DELETE** */digital_certificates/:id*

Permission necessary: **Edit Security Settings**

| Parameter | Description | Type of Parameter | Type of Data |
|-----------|-------------|-------------------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation](% tl api_v2_authentication %}/#criacao-de-token)<br><br>e.g.:<br><br>Authorization:<br>583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf | header | string |
| :id *(mandatory)* | Id of the Digital Certificate to be queried. To get the ID of a Digital Certificate, look up the [Digital Certificates List](#consultar-lista-de-digital-certificates) | path | number |

**Example Request**

~~~
DELETE /digital_certificates/344
Accept: application/json; version=2
Authorization: Token 583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf 
~~~

**Example Response**

~~~
HTTP/2 204
~~~

---

## 4. Create a new Digital Certificate {#criar-um-novo-digital-certificate}

Upload a digital certificate to Azion.

#### **POST** */digital_certificates*

Permission necessary: **Edit Security Settings**

| Parameter | Description | Type of Parameter | Type of Data |
|-----------|-------------|-------------------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation](% tl api_v2_authentication %}/#criacao-de-token)<br><br>e.g.:<br><br>Authorization:<br>583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf | header | string |
| Content-Type *(mandatory)* | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string |
| Certificate *(mandatory)* | The certificate you want to create must be coded in the json format and include the following fields:<br><br>**name** (string): mandatory field that defines the name for the digital certificate.<br><br>**certificate** (string): the certificate is the file that you received from your Certificate Authority (CA), in ASCII PEM format, replacing all line breaks with “\n”. The certificate must start with the marker “----BEGIN CERTIFICATE-----” and finish with the marker “-----END CERTIFICATE-<br><br>**private_key** (string): the private key is the file you use to generate the CSR request that you send to your CA, replacing all line breaks with “\n”. The private key must start with the marker “----BEGIN RSA PRIVATE KEY-----” and finish with the marker “-----END RSA PRIVATE KEY-. | body | json |

**Example Request**

~~~
POST /digital_certificates
Accept: application/json; version=2
Authorization: Token 583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf
Content-Type: application/json
~~~

~~~
{
    "name": "Certificado SSL para www.mydomain.com",
    "certificate": "-----BEGIN CERTIFICATE-----\nMIIDCTCCAfGgAwIBAgIJAPpMWHKMIGuAMA0GCSqGSIb3DQEBBQUAMBsxGTAXBgNV\nBAMMEHd3dy5teWRvbWFpbi5jb20wHhcNMTgwMzI3MjAwOTA0WhcNMjgwMzI0MjAw\nOTA0WjAbMRkwFwYDVQQDDBB3d3cubXlkb21haW4uY29tMIIBIjANBgkqhkiG9w0B\nAQEFAAOCAQ8AMIIBCgKCAQEAt25cziDBsHbZzZhy9BPLApPf9OmE67k9pr7VezsR\nkIw4trY2xtJXFB7itT1p7HxbLBoL5u8FGmMKssB+XTmztmgty43ogor1KSjUgfZg\nrpAqyXtrbSM5g+14c0VO9S0LkkePlHvul0UiblJj7K+gkvc6sZqXZY+TI1BPqeuO\ns9A4LLCUGziyNv0qJfIL5RZm07Yy35BEBTTxUWVL2msfaUH2uPM5XN5eFC7oKN0/\n3NuYIboRmyk+P7CDC99M8Mp/wOjiB+yVGZVTjeqGPI8nFWJl2waXkc54VvW84xQP\njwtid1v1KENK/ixMAAXi2cQ9gNRX+/USoneuWj5n4QUj6QIDAQABo1AwTjAdBgNV\nHQ4EFgQU2sDgtyYMDXvw79OhdvAFqcLmcwkwHwYDVR0jBBgwFoAU2sDgtyYMDXvw\n79OhdvAFqcLmcwkwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOCAQEAKzCM\niG67IPwJK6MIJ31N734AofnjLf+fffxNtfYmH0XGORHPYUxCxsLxXiSFgPvubWh+\n7vLsKAm67bflMWbnxohuiOR0O/LJhLvhj6F+wgv0aDXpu581Hm8Ob/88ldbF6ND1\nTqzVATS0WDfl+z1QBKtNdDm3Nv45IZ83ob7OhIzD9MwL6tflBPDpWOYtmBDn0xSP\n6ra9d8oa6jK1fe2/5A7LY41acjbbNrLbFDYP7hcx02TmCfSMut+ysaZ/blay4Sbb\nwNlt92KhJw07UEKgXXbgyXGoFQkU8V+r2AZcgt0XM9jvwTc01Sbq/gegd2GMAj3x\nrTwkn5UNzFs56FCgNg==\n-----END CERTIFICATE-----",
    "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAt25cziDBsHbZzZhy9BPLApPf9OmE67k9pr7VezsRkIw4trY2\nxtJXFB7itT1p7HxbLBoL5u8FGmMKssB+XTmztmgty43ogor1KSjUgfZgrpAqyXtr\nbSM5g+14c0VO9S0LkkePlHvul0UiblJj7K+gkvc6sZqXZY+TI1BPqeuOs9A4LLCU\nGziyNv0qJfIL5RZm07Yy35BEBTTxUWVL2msfaUH2uPM5XN5eFC7oKN0/3NuYIboR\nmyk+P7CDC99M8Mp/wOjiB+yVGZVTjeqGPI8nFWJl2waXkc54VvW84xQPjwtid1v1\nKENK/ixMAAXi2cQ9gNRX+/USoneuWj5n4QUj6QIDAQABAoIBAQCJRwAPh/ZM8XWp\nZ1lIj3OUN0UZjpZar+SS4Sj1s8w+aKKdIxs1iv9+YGr8hry6LosxI0EbEHC6Qbsk\n8ejgLinv7mGvgEGtSP+XUSZRKSlMGzraVRKduAn4UQWfBxTDanXJgOLUljeGYEgX\nVnPQE9RRiNMVTgPWDzBn8lfcbBz9NigmyaBkKw3yyhOopLpmcyWqMbuSwJotwOKe\nomVnlRck2OsIOz51CDXwdXcM0mogkVuWhPLEM53K7KitQFpbMjS8fS3dyJBBbZaR\nnvXlUPVbaC8pm9TbACDQ8fhSRd/B22B8PXHyYMWdrTxYgkFhlgIPEu3Z0e8GkR7f\nt0GHM3eNAoGBANqJVHgwG/WgJivzhm6VAfVWuSoElDh/JthXUuGbJ9IGcRVvM906\nYb1O70iLJOisq8BcDNv5WU7CSnQzU2oYzvzbMr/3TBwFxJZKKMh1y992YKBIWfzR\nz7JK2USvLdhO/RovD+roQeavXae9p+ml8GgLZqhDlLKWNkW9EUL1xt8nAoGBANbg\nZx8JFzQTDuQrOdSyIVW4A3NXPRiGBf63BGPbzD9PM2dUL13NsrO2tyL2gEXtcAaq\nJsZmHXHip38qFxuA5yPYzdqQPbBWC9WWHL2E63dd9tAnZ0g4a1GnBs6q3Fh6lhzG\nWREgAEOzCv07XVers4magKTaxM3XocS5GZM5n85vAoGAJH1v1E28LWxbU1VragWJ\neSzM6D4xfamFk/Qoy7D7mi8nLLwPve3kqhaHD+bj99H1L75vCz/8cJEym2qCkCGq\nVkBHnhQt6jPwWmPxoV9B9oMuqTTLidKCyrOCydwyXH779iZLkx7K+jjn+31Ij1P8\n63KT5p66MoOwdj6WpkahuVsCgYBvAdUkWmzrUSEzTQV+VVwVTZAyyRHeFncIZQJW\nmFmHJ2J18i7aNgcpAq7P2CridUyXlNWdT2nMyPwhHNx9L/W5Nir6y+OisoFAoWFN\no1qF+zwjwwd/bu46a6B/qhNVflcInIus5ixczSVTN5T8Us7YusHU6NQdR1XiLIIC\n5hUh7wKBgQCWwTSDKm1TUHT7K35GmyHryECQwjJhclzfJZfFoSAudiQY20KgehlS\nnT7GrIb6QIsm7hsauX1Aq76d2TYlgkD1OHmJy/+i9+76ee5ZDFkboqMCwRtcgw1D\nIYA1ocRBfN+xQ7jU9GvuLSbFka9drQwWWdxiXeYSyLRBYlAFIpdLKQ==\n-----END RSA PRIVATE KEY-----"
}
~~~

**Example Response**

~~~
HTTP/2 201
~~~

~~~
{
    "id": 344,
    "name": "Certificado SSL para www.mydomain.com"
}
~~~

---

## 5. Overwrite a Digital Certificate {#sobrescrever-um-digital-certificate}

Overwrite all the fields of a Digital Certificate, retaining the id. If you only want to update some fields, without changing the values of the rest, consider using the PATCH method, instead of PUT.

#### **PUT** */digital_certificates/:id*

Permission necessary: **Edit Security Settings**

| Parameter | Description | Type of Parameter | Type of Data |
|-----------|-------------|-------------------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation](% tl api_v2_authentication %}/#criacao-de-token)<br><br>e.g.:<br><br>Authorization:<br>583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf | header | string |
| Content-Type *(mandatory)* | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string |
| :id *(mandatory)* | Id of the Digital Certificate to be queried. To get the ID of a Digital Certificate, look up the [Digital Certificates List](#consultar-lista-de-digital-certificates) | path | number |
| Certificate *(mandatory)* | The new values of each field of the Digital Certificate. If you only want to change one of the fields, use the PATCH method instead of PUT.<br><br>**name** (string): mandatory field that defines the name for the digital certificate.<br><br>**certificate** (string): the certificate is the file that you received from your Certificate Authority (CA), in ASCII PEM format, replacing all line breaks with “\n”. The certificate must start with the marker “----BEGIN CERTIFICATE-----” and finish with the marker “-----END CERTIFICATE-<br><br>**private_key** (string): the private key is the file you use to generate the CSR request that you send to your CA, replacing all line breaks with “\n”. The private key must start with the marker “----BEGIN RSA PRIVATE KEY-----” and finish with the marker “-----END RSA PRIVATE KEY-. | body | json |

**Example Request**

~~~
PUT /digital_certificates/344
Accept: application/json; version=2
Authorization: Token 583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf
Content-Type: application/json
~~~

~~~
{
    "name": "Certificado SSL para www.mydomain.com",
    "certificate": "-----BEGIN CERTIFICATE-----\nMIIDCTCCAfGgAwIBAgIJAPpMWHKMIGuAMA0GCSqGSIb3DQEBBQUAMBsxGTAXBgNV\nBAMMEHd3dy5teWRvbWFpbi5jb20wHhcNMTgwMzI3MjAwOTA0WhcNMjgwMzI0MjAw\nOTA0WjAbMRkwFwYDVQQDDBB3d3cubXlkb21haW4uY29tMIIBIjANBgkqhkiG9w0B\nAQEFAAOCAQ8AMIIBCgKCAQEAt25cziDBsHbZzZhy9BPLApPf9OmE67k9pr7VezsR\nkIw4trY2xtJXFB7itT1p7HxbLBoL5u8FGmMKssB+XTmztmgty43ogor1KSjUgfZg\nrpAqyXtrbSM5g+14c0VO9S0LkkePlHvul0UiblJj7K+gkvc6sZqXZY+TI1BPqeuO\ns9A4LLCUGziyNv0qJfIL5RZm07Yy35BEBTTxUWVL2msfaUH2uPM5XN5eFC7oKN0/\n3NuYIboRmyk+P7CDC99M8Mp/wOjiB+yVGZVTjeqGPI8nFWJl2waXkc54VvW84xQP\njwtid1v1KENK/ixMAAXi2cQ9gNRX+/USoneuWj5n4QUj6QIDAQABo1AwTjAdBgNV\nHQ4EFgQU2sDgtyYMDXvw79OhdvAFqcLmcwkwHwYDVR0jBBgwFoAU2sDgtyYMDXvw\n79OhdvAFqcLmcwkwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOCAQEAKzCM\niG67IPwJK6MIJ31N734AofnjLf+fffxNtfYmH0XGORHPYUxCxsLxXiSFgPvubWh+\n7vLsKAm67bflMWbnxohuiOR0O/LJhLvhj6F+wgv0aDXpu581Hm8Ob/88ldbF6ND1\nTqzVATS0WDfl+z1QBKtNdDm3Nv45IZ83ob7OhIzD9MwL6tflBPDpWOYtmBDn0xSP\n6ra9d8oa6jK1fe2/5A7LY41acjbbNrLbFDYP7hcx02TmCfSMut+ysaZ/blay4Sbb\nwNlt92KhJw07UEKgXXbgyXGoFQkU8V+r2AZcgt0XM9jvwTc01Sbq/gegd2GMAj3x\nrTwkn5UNzFs56FCgNg==\n-----END CERTIFICATE-----",
    "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAt25cziDBsHbZzZhy9BPLApPf9OmE67k9pr7VezsRkIw4trY2\nxtJXFB7itT1p7HxbLBoL5u8FGmMKssB+XTmztmgty43ogor1KSjUgfZgrpAqyXtr\nbSM5g+14c0VO9S0LkkePlHvul0UiblJj7K+gkvc6sZqXZY+TI1BPqeuOs9A4LLCU\nGziyNv0qJfIL5RZm07Yy35BEBTTxUWVL2msfaUH2uPM5XN5eFC7oKN0/3NuYIboR\nmyk+P7CDC99M8Mp/wOjiB+yVGZVTjeqGPI8nFWJl2waXkc54VvW84xQPjwtid1v1\nKENK/ixMAAXi2cQ9gNRX+/USoneuWj5n4QUj6QIDAQABAoIBAQCJRwAPh/ZM8XWp\nZ1lIj3OUN0UZjpZar+SS4Sj1s8w+aKKdIxs1iv9+YGr8hry6LosxI0EbEHC6Qbsk\n8ejgLinv7mGvgEGtSP+XUSZRKSlMGzraVRKduAn4UQWfBxTDanXJgOLUljeGYEgX\nVnPQE9RRiNMVTgPWDzBn8lfcbBz9NigmyaBkKw3yyhOopLpmcyWqMbuSwJotwOKe\nomVnlRck2OsIOz51CDXwdXcM0mogkVuWhPLEM53K7KitQFpbMjS8fS3dyJBBbZaR\nnvXlUPVbaC8pm9TbACDQ8fhSRd/B22B8PXHyYMWdrTxYgkFhlgIPEu3Z0e8GkR7f\nt0GHM3eNAoGBANqJVHgwG/WgJivzhm6VAfVWuSoElDh/JthXUuGbJ9IGcRVvM906\nYb1O70iLJOisq8BcDNv5WU7CSnQzU2oYzvzbMr/3TBwFxJZKKMh1y992YKBIWfzR\nz7JK2USvLdhO/RovD+roQeavXae9p+ml8GgLZqhDlLKWNkW9EUL1xt8nAoGBANbg\nZx8JFzQTDuQrOdSyIVW4A3NXPRiGBf63BGPbzD9PM2dUL13NsrO2tyL2gEXtcAaq\nJsZmHXHip38qFxuA5yPYzdqQPbBWC9WWHL2E63dd9tAnZ0g4a1GnBs6q3Fh6lhzG\nWREgAEOzCv07XVers4magKTaxM3XocS5GZM5n85vAoGAJH1v1E28LWxbU1VragWJ\neSzM6D4xfamFk/Qoy7D7mi8nLLwPve3kqhaHD+bj99H1L75vCz/8cJEym2qCkCGq\nVkBHnhQt6jPwWmPxoV9B9oMuqTTLidKCyrOCydwyXH779iZLkx7K+jjn+31Ij1P8\n63KT5p66MoOwdj6WpkahuVsCgYBvAdUkWmzrUSEzTQV+VVwVTZAyyRHeFncIZQJW\nmFmHJ2J18i7aNgcpAq7P2CridUyXlNWdT2nMyPwhHNx9L/W5Nir6y+OisoFAoWFN\no1qF+zwjwwd/bu46a6B/qhNVflcInIus5ixczSVTN5T8Us7YusHU6NQdR1XiLIIC\n5hUh7wKBgQCWwTSDKm1TUHT7K35GmyHryECQwjJhclzfJZfFoSAudiQY20KgehlS\nnT7GrIb6QIsm7hsauX1Aq76d2TYlgkD1OHmJy/+i9+76ee5ZDFkboqMCwRtcgw1D\nIYA1ocRBfN+xQ7jU9GvuLSbFka9drQwWWdxiXeYSyLRBYlAFIpdLKQ==\n-----END RSA PRIVATE KEY-----"
}
~~~

**Example Response**

~~~
HTTP/2 200
~~~

~~~
{
    "id": 344,
    "name": "Certificado SSL para www.mydomain.com"
}
~~~

---

## 6. Update fields in a Digital Certificate {#atualizar-campos-de-um-digital-certificate}

Update one or more fields of a Digital Certificate, retaining the value of those fields not included. The “certificate” and “private key” fields cannot be updated separately, they must always be sent as a pair.

#### **PATCH** */digital_certificates/:id*

Permission necessary: **Edit Security Settings**

| Parameter | Description | Type of Parameter | Type of Data |
|-----------|-------------|-------------------|--------------|
| Authorization *(mandatory)* | Authentication through the Token, previously created through the endpoint of [Token Creation](% tl api_v2_authentication %}/#criacao-de-token)<br><br>e.g.:<br><br>Authorization:<br>583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf | header | string |
| Content-Type *(mandatory)* | The type of coding used in the Body (application/json).<br><br>e.g.:<br><br>Content-Type: application/json | header | string |
| :id *(mandatory)* | Id of the Digital Certificate to be queried. To get the ID of a Digital Certificate, look up the [Digital Certificates List](#consultar-lista-de-digital-certificates) | path | number |
| Certificate *(mandatory)* | You must include one of more fields to be updated. The “certificate” and “private key” fields cannot be updated individually, they must always be updated as a pair.<br><br>**name** (string): mandatory field that defines the name for the digital certificate.<br><br>**certificate** (string): the certificate is the file that you received from your Certificate Authority (CA), in ASCII PEM format, replacing all line breaks with “\n”. The certificate must start with the marker “----BEGIN CERTIFICATE-----” and finish with the marker “-----END CERTIFICATE-<br><br>**private_key** (string): the private key is the file you use to generate the CSR request that you send to your CA, replacing all line breaks with “\n”. The private key must start with the marker “----BEGIN RSA PRIVATE KEY-----” and finish with the marker “-----END RSA PRIVATE KEY-. | body | json |

**Example Request**

~~~
PATCH /digital_certificates/344
Accept: application/json; version=2
Authorization: Token 583f8a9ca8d6d5ff2cb50f1d3c4d35cb8939f1bf
Content-Type: application/json 
~~~

~~~
{
    "certificate": "-----BEGIN CERTIFICATE-----\nMIIDCTCCAfGgAwIBAgIJAPpMWHKMIGuAMA0GCSqGSIb3DQEBBQUAMBsxGTAXBgNV\nBAMMEHd3dy5teWRvbWFpbi5jb20wHhcNMTgwMzI3MjAwOTA0WhcNMjgwMzI0MjAw\nOTA0WjAbMRkwFwYDVQQDDBB3d3cubXlkb21haW4uY29tMIIBIjANBgkqhkiG9w0B\nAQEFAAOCAQ8AMIIBCgKCAQEAt25cziDBsHbZzZhy9BPLApPf9OmE67k9pr7VezsR\nkIw4trY2xtJXFB7itT1p7HxbLBoL5u8FGmMKssB+XTmztmgty43ogor1KSjUgfZg\nrpAqyXtrbSM5g+14c0VO9S0LkkePlHvul0UiblJj7K+gkvc6sZqXZY+TI1BPqeuO\ns9A4LLCUGziyNv0qJfIL5RZm07Yy35BEBTTxUWVL2msfaUH2uPM5XN5eFC7oKN0/\n3NuYIboRmyk+P7CDC99M8Mp/wOjiB+yVGZVTjeqGPI8nFWJl2waXkc54VvW84xQP\njwtid1v1KENK/ixMAAXi2cQ9gNRX+/USoneuWj5n4QUj6QIDAQABo1AwTjAdBgNV\nHQ4EFgQU2sDgtyYMDXvw79OhdvAFqcLmcwkwHwYDVR0jBBgwFoAU2sDgtyYMDXvw\n79OhdvAFqcLmcwkwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOCAQEAKzCM\niG67IPwJK6MIJ31N734AofnjLf+fffxNtfYmH0XGORHPYUxCxsLxXiSFgPvubWh+\n7vLsKAm67bflMWbnxohuiOR0O/LJhLvhj6F+wgv0aDXpu581Hm8Ob/88ldbF6ND1\nTqzVATS0WDfl+z1QBKtNdDm3Nv45IZ83ob7OhIzD9MwL6tflBPDpWOYtmBDn0xSP\n6ra9d8oa6jK1fe2/5A7LY41acjbbNrLbFDYP7hcx02TmCfSMut+ysaZ/blay4Sbb\nwNlt92KhJw07UEKgXXbgyXGoFQkU8V+r2AZcgt0XM9jvwTc01Sbq/gegd2GMAj3x\nrTwkn5UNzFs56FCgNg==\n-----END CERTIFICATE-----",
    "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAt25cziDBsHbZzZhy9BPLApPf9OmE67k9pr7VezsRkIw4trY2\nxtJXFB7itT1p7HxbLBoL5u8FGmMKssB+XTmztmgty43ogor1KSjUgfZgrpAqyXtr\nbSM5g+14c0VO9S0LkkePlHvul0UiblJj7K+gkvc6sZqXZY+TI1BPqeuOs9A4LLCU\nGziyNv0qJfIL5RZm07Yy35BEBTTxUWVL2msfaUH2uPM5XN5eFC7oKN0/3NuYIboR\nmyk+P7CDC99M8Mp/wOjiB+yVGZVTjeqGPI8nFWJl2waXkc54VvW84xQPjwtid1v1\nKENK/ixMAAXi2cQ9gNRX+/USoneuWj5n4QUj6QIDAQABAoIBAQCJRwAPh/ZM8XWp\nZ1lIj3OUN0UZjpZar+SS4Sj1s8w+aKKdIxs1iv9+YGr8hry6LosxI0EbEHC6Qbsk\n8ejgLinv7mGvgEGtSP+XUSZRKSlMGzraVRKduAn4UQWfBxTDanXJgOLUljeGYEgX\nVnPQE9RRiNMVTgPWDzBn8lfcbBz9NigmyaBkKw3yyhOopLpmcyWqMbuSwJotwOKe\nomVnlRck2OsIOz51CDXwdXcM0mogkVuWhPLEM53K7KitQFpbMjS8fS3dyJBBbZaR\nnvXlUPVbaC8pm9TbACDQ8fhSRd/B22B8PXHyYMWdrTxYgkFhlgIPEu3Z0e8GkR7f\nt0GHM3eNAoGBANqJVHgwG/WgJivzhm6VAfVWuSoElDh/JthXUuGbJ9IGcRVvM906\nYb1O70iLJOisq8BcDNv5WU7CSnQzU2oYzvzbMr/3TBwFxJZKKMh1y992YKBIWfzR\nz7JK2USvLdhO/RovD+roQeavXae9p+ml8GgLZqhDlLKWNkW9EUL1xt8nAoGBANbg\nZx8JFzQTDuQrOdSyIVW4A3NXPRiGBf63BGPbzD9PM2dUL13NsrO2tyL2gEXtcAaq\nJsZmHXHip38qFxuA5yPYzdqQPbBWC9WWHL2E63dd9tAnZ0g4a1GnBs6q3Fh6lhzG\nWREgAEOzCv07XVers4magKTaxM3XocS5GZM5n85vAoGAJH1v1E28LWxbU1VragWJ\neSzM6D4xfamFk/Qoy7D7mi8nLLwPve3kqhaHD+bj99H1L75vCz/8cJEym2qCkCGq\nVkBHnhQt6jPwWmPxoV9B9oMuqTTLidKCyrOCydwyXH779iZLkx7K+jjn+31Ij1P8\n63KT5p66MoOwdj6WpkahuVsCgYBvAdUkWmzrUSEzTQV+VVwVTZAyyRHeFncIZQJW\nmFmHJ2J18i7aNgcpAq7P2CridUyXlNWdT2nMyPwhHNx9L/W5Nir6y+OisoFAoWFN\no1qF+zwjwwd/bu46a6B/qhNVflcInIus5ixczSVTN5T8Us7YusHU6NQdR1XiLIIC\n5hUh7wKBgQCWwTSDKm1TUHT7K35GmyHryECQwjJhclzfJZfFoSAudiQY20KgehlS\nnT7GrIb6QIsm7hsauX1Aq76d2TYlgkD1OHmJy/+i9+76ee5ZDFkboqMCwRtcgw1D\nIYA1ocRBfN+xQ7jU9GvuLSbFka9drQwWWdxiXeYSyLRBYlAFIpdLKQ==\n-----END RSA PRIVATE KEY-----"
}
~~~

**Example Response**

~~~
HTTP/2 200
~~~

~~~
{
    "id": 344,
    "name": "Certificado SSL para www.mydomain.com"
}
~~~

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)
