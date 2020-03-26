# Digital **Certificates**

Você precisará de um certificado SSL para trafegar dados em HTTPS. O uso de HTTPS garante a você segurança na transmissão de dados de seus clientes pela internet, demonstra a confiabilidade de seu site e a autenticidade de seu domínio, além de melhorar o rankeamento de seu site nos motores de busca como o Google. Você também precisará de HTTPS se desejar utilizar o protocolo HTTP/2, que traz importantes melhorias de desempenho em comparação com o HTTP/1.1.

Na Azion, você poderá contar com as seguintes opções de certificado SSL para tráfego em HTTPS:

> 1. [Shared Domain](#shared-domain)
> 2. [Custom Certificate](#custom-certificate)

---

## 1. Shared Domain {#shared-domain}

Ao utilizar o Azion Content Delivery você conta com nosso certificado SSL para tráfego em HTTPS, sem custo adicional, ao utilizar o domínio compartilhado da Azion.

Quando você cria uma configuração de Content Delivery no [Real-Time Manager](https://manager.azion.com/) é atribuído automaticamente um domínio na zona _azioncdn.net_. Se desejar, você pode utilizar o domínio atribuído para entregar seu conteúdo estático sobre HTTPS, evitando os custos de emissão de certificados SSL para ambientes de homologação ou URLs cujo domínio possa ser compartilhado com outros clientes da Azion.

Para utilizar o certificado SSL da Azion para o Shared Domain:

1.  Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Content Delivery
2.  Edite a configuração de Content Delivery desejada
3.  Na aba Main Settings, selecione o certificado “Azion (SAN)” na seção Digital Certificate

---

## 2. Custom Certificate {#custom-certificate}

Para utilizar o seu domínio em HTTPS você precisará de um certificado SSL (X.509) próprio. Você pode, sem custos adicionais, configurar o seu certificado SSL no Real-Time Manager. Caso não possua um, a Azion poderá intermediar o processo de emissão e manutenção do seu certificado SSL junto a uma Autoridade Certificadora (CA) de escolha da Azion. Para tanto, você precisará comprovar que o domínio é realmente seu. Há três tipos de validação que você pode escolher:

- DV (_Domain Validation_) é a validação sobre o seu direito de uso do domínio, sendo a mais simples das três opções. Esta á a opção recomendada pela Azion para a maioria das empresas.
- OV (_Organization Validation_) é a validação sobre o seu direito de uso do domínio e mais algumas validações sobre a organização requisitante.
- EV (_Extended Validation_) é uma validação estendida, que exige documentações adicionais para comprovação sobre a existência física, legal e operacional da organização requisitante, sendo a mais complexa das três opções.

Para utilizar seu certificado customizado:

1.  Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Cloud Security > Digital Certificates
2.  Adicione um novo certificado SSL ou edite um de seus certificados existentes
3.  Acesse o menu Content Delivery e edite a configuração desejada
4.  Na aba Main Settings, na seção Digital Certificate, selecione o certificado que você adicionou no passo 2

Para adicionar seu Custom Certificate, você irá precisar do par Certificado (X.509) no formato [ASCII PEM](https://www.google.com.br/search?q=Como+converter+um+certificado+PFX+para+PEM&cad=h) e a respectiva chave privada, a qual não pode estar protegida por _passphrase_.

O certificado é o arquivo que você recebe de sua CA. Ele inicia com:

~~~
-----BEGIN CERTIFICATE-----
~~~

Você deve copiar todo o conteúdo incluindo o marcador de início e também o marcador de finalização:

~~~
-----END CERTIFICATE-----
~~~

A chave privada é o arquivo que você utilizou para gerar a requisição CSR que enviou para sua CA. O conteúdo inicia com:

~~~
-----BEGIN RSA PRIVATE KEY-----
~~~

Você deve copiar todo o conteúdo incluindo o marcador de início e também o marcador de finalização:

~~~
-----END RSA PRIVATE KEY-----
~~~

Para utilizar seu Custom Certificate com a Azion utilizamos a extensão SNI (Server Name Indication) do protocolo TLS. Confira a [lista de browsers com suporte a SNI](https://caniuse.com/#feat=sni).

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/edge-applications/digital-certificates/index.md) on GitHub.
