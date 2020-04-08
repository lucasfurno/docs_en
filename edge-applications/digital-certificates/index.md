# Digital **Certificates**

Você precisará de um certificado SSL para trafegar dados em HTTPS. O uso de HTTPS garante a você segurança na transmissão de dados de seus clientes pela internet, demonstra a confiabilidade de seu site e a autenticidade de seu domínio, além de melhorar a posição de seu site em motores de busca como o Google. Você também precisará de HTTPS se desejar utilizar o protocolo HTTP/2, que traz importantes melhorias de desempenho em comparação com o HTTP/1.1

Na Azion, você poderá contar com as seguintes opções de certificado SSL para tráfego em HTTPS:

> 1. _[Shared Domain](#shared-domain)_
> 2. _[Custom Certificate](#custom-certificate)_
> 3. _RSA_
> 4. _ECC/ECDSA_
> 5. _Como utilizar Custom Certificate_

---

## 1. Shared Domain {#shared-domain}

Ao utilizar o Azion Edge Application você conta com nosso certificado SSL para tráfego em HTTPS, sem custo adicional, basta utilizar o domínio compartilhado da Azion.

Quando você cria uma configuração de Edge Application no [Real-Time Manager](https://manager.azion.com/) é atribuído automaticamente um domínio na zona “azioncdn.net”. Se desejar, você pode utilizar o domínio atribuído para entregar seu conteúdo estático sobre HTTPS, evitando os custos de emissão de certificados SSL para ambientes de homologação ou URLs cujo domínio possa ser compartilhado com outros clientes da Azion.

Para utilizar o certificado SSL da Azion para o Shared Domain:

1.  Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu **Edge Services** e selecione Domains.
2.  Adicione ou edite uma configuração de **Domain**.
3.  No campo **Digital Certificate**, selecione **Azion (SAN)**
4.  Pronto, ao salvar a configuração você estará usando o Shared Domain da Azion.

---

## 2. Custom Certificate {#custom-certificate}

Para utilizar o seu domínio em HTTPS você precisará de um certificado SSL (X.509) próprio. Você pode, sem custos adicionais, configurar o seu certificado SSL no Real-Time Manager. Caso não possua um, a Azion poderá intermediar o processo de emissão e manutenção do seu certificado SSL junto a uma Autoridade Certificadora (CA) de escolha da Azion. Para tanto, você precisará comprovar que o domínio é realmente seu. Há três tipos de validação que você pode escolher:

- DV (_Domain Validation_) é a validação sobre o seu direito de uso do domínio, sendo a mais simples das três opções. Esta á a opção recomendada pela Azion para a maioria das empresas.
- OV (_Organization Validation_) é a validação sobre o seu direito de uso do domínio e mais algumas validações sobre a organização requisitante.
- EV (_Extended Validation_) é uma validação estendida, que exige documentações adicionais para comprovação sobre a existência física, legal e operacional da organização requisitante, sendo a mais complexa das três opções.

Atualmente a Azion trabalha com dois tipos de certificados, que são eles: “RSA” e “ECC/ECDSA”. Cada certificado tem sua característica e seu nível de segurança, e a Azion permite que você escolha a opção que se ajusta melhor ao seu cenário.

## 3. RSA

É um dos primeiros sistemas de criptografia de chave pública e é amplamente utilizado para transmissão segura de dados. Neste sistema de criptografia, a chave de encriptação é pública e é diferente da chave de decriptação que é secreta (privada).Toda mensagem cifrada usando uma chave pública só pode ser decifrada usando a respectiva chave privada. 

O RSA é um algoritmo relativamente lento e, por isso, é menos usado para criptografar diretamente os dados do usuário. Mais frequentemente, o RSA passa chaves criptografadas compartilhadas para criptografia de chave simétrica que, por sua vez, pode executar operações de criptografia-descriptografia em massa a uma velocidade muito maior.

## 4. ECC/ECDSA

A Criptografia de Curvas Elípticas, é uma aproximação para a criptografia de chave pública com base na estrutura algébrica de curvas elípticas. A criptografia de chave pública é baseada na criação de enigmas matemáticos que são difíceis de resolver, por isso ele se torna muito mais seguro que outros tipos de certificado como por exemplo o RSA.

Chaves menores são menos intensivas computacionalmente para gerar assinaturas porque envolvem números matemáticos menores. ECC é mais rápida na geração de assinaturas e com mais performance sobre RSA.

## 5. Como utilizar o Custom Certificate

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

Para utilizar seu próprio certificado:

1.  Acesse o [Real-Time Manager](https://manager.azion.com/)  e entre no menu **Edge Services** e selecione **Digital Certificates**.
2.  Adicione um **Digital Certificate** incluindo as  informações do seu Certificado.
3.  Acesse o menu **Edge Services** e selecione Domains.
4.  No campo **Digital Certificate**, selecione o **Digital Certificate** criado no **passo 2**
5.  Pronto, ao salvar a configuração você estará usando seu próprio Certificado.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)
