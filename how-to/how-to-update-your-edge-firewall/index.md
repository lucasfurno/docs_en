# **How to update your Edge Firewall**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/how-to/how-to-update-your-edge-firewall/index.md)

In this document, we will indicate the features that were being used in the deprecated versions, showing how to bring them to the latest version. To learn more about new features and how to use them, see the [product page](https://www.azion.com/en/products/) and [documentation](https://www.azion.com/en/documentation/products/edge-firewall/).

Rule Sets deprecated from Edge Firewall show the following banner:  *"**This Edge Firewall rule set is deprecated. Please upgrade to the new version.**"*.

[![banner]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/banner.jpg)]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/banner.jpg)

> 1. [What has changed?](#what-has-changed?)
> 2. [Assigning your Rule Sets to the latest version of Edge Firewall](#assigning-rule-sets)
> 3. [Support Documents](#support-documents)

---

## 1. What has changed? {#what-has-changed?}

Until now, the use of a Rule Set from Edge Firewall or WAF was through activation of Edge Firewall and Web Application Firewall modules in the Main Settings tab of each Edge Application and subsequent use of Behaviors **Set Edge Firewall Rule Set** and **Set WAF Rule Set** in the Edge Application Rules Engine.

Edge Firewall has become an independent product that concentrates all security features: **DDoS Protection**,  **Network Layer Protection**, **Web Application Firewall**, and **Edge Functions**.

> Attention, to update your version of the **Edge Firewall** it is necessary to have the latest version of the **Edge Application product**.

---

## 2. Assigning your Rule Sets to the latest version of Edge Firewall {#assigning-rule-sets}

To use the latest Azion Edge Firewall, follow the steps below, each section details how each feature is built using the new modules, Network Lists, and Rules Engine.

### Step 1 - Creating new rule sets in Edge Firewall

The first step in creating a Rule Set is to create new rules based on pre-existing rules. Through the process we will explain how each feature is configured in the latest version:

#### Create Edge Firewall Rule Set:

1. Access [Real-Time Manager](https://manager.azion.com/) and enter the **Edge Services** > **Edge Firewall** menu. 
2. You will see the main interface where you can create and manage your **Edge Firewall** rule sets.
3. Siga os passos abaixo de acordo com a funcionalidade:


#### Referrer Blocking

[![referer-blocking]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/referer-blocking.jpg)]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/referer-blocking.jpg)

If you used **Referer Block** in your deprecated rule set, in the new rule set:

1. Enable the module **Web Application Firewall**.
2. Then, follow the tab **Rule Engine** in **Criteria**, and select **Header Referer**.
3. Add the domain of the old Rule Set with the condition **Header Referer**, using the comparator **does not match**.
4. For each domain in **Accepted Domains** of the old Rule Set, add an **AND** rule by repeating step 3.
5. In **Behavior**, select the Behavior **Deny 403**.

#### Geo Blocking

[![geo-blocking]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/geo-blocking.jpg)]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/geo-blocking.jpg)

If you used **Geo Blocking** in your deprecated rule set, in the new rule set:

1. Access the [Real-Time Manager](https://manager.azion.com/) and enter the **Libraries** > **Network Lists** menu.
2. Add or edit a **Network List**.
3. In the **Type** option, select **Countries**.
4. Copie a lista de países da rule set deprecated para a **Network Lists**.
5. Em **Edge Firewall**, habilite o módulo **Network Layer Protection**.
6. Na aba **Rule Engine**, crie uma nova **Rule** e selecione o **Criteria: Network**.
7. Incluir o operador lógico, por exemplo, se for **Match** para **Blacklist**, ou **Does not Match** para **Whitelist**.
8. Após, selecione a **Network List** do tipo **Country** criada nos passos 3 e 4.
9. Em **Behavior**, selecione o Behavior **Deny 403**.

#### Secure Token

[![secure-token]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/secure-token.jpg)]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/secure-token.jpg)

Se você usava **Secure Token** em sua rule set deprecated, na nova rule set:

1. Habilite o módulo **Secure Token**.
2. Na aba **Functions**, clique em **Add function** para instanciar uma Edge Function de **Secure Token**.
3. Preencha as informações e utilize o editor para customizar **Args** da Função para definir a secret que será utilizada para composição do hash.
4. Na aba **Rules Engine** defina o **Criteria** para condicionar o uso da Edge Function.
5. Em **Behavior** selecione **Run Function** e selecione a **Edge Function** e escolha a Function **Secure Token** instanciada nos passos 2 e 3.

#### IP Blocking

[![ip-blocking]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/ip-blocking.jpg)]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/ip-blocking.jpg)

Se você usava **IP Blocking** em sua rule set deprecated, na nova rule set:

1. Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu **Libraries** e selecione **Network Lists**.
2. Adicione ou Edite uma **Network List**.
3. Na opção **Type**, selecione **IP/CIDR**.
4. Copie a lista de países da rule set deprecated para sua **Network Lists**.
5. Em **Edge Firewall**, habilite o módulo **Network Layer Protection**.
6. Na aba **Rule Engine**, crie uma nova **Rule** e selecione o **Criteria: Network**.
7. Incluir o operador lógico, por exemplo, se for **Match** é **Blacklist**, se for **Does not Match** equivale a **Whitelist**.
8. Após, selecione a **Network List** do tipo **IP/CIDR** criada nos passos 3 e 4.
9. Em **Behavior**, selecione o Behavior **Deny 403**.

#### Rate Limiting

[![rate-limiting]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/rate-limiting.jpg)]({{ site.url }}/images/docs/products/how-to/atualizar-edge-firewall/rate-limiting.jpg)

Se você usava **Rate Limiting** em sua rule set deprecated, na nova rule set:

1. Selecione a Aba **Rules Engine**.
2. Em seguida, defina uma **Criteria** para sua Rule Set.
3. Em **Behavior**, selecione **Set Rate Limit**.
4. Defina o número de requisições por segundo em **Average Rate Limit**.
5. Configure para **Client IP** Address ou **Global**.
6. Após, defina o **Maximum burst size**.

#### Associação de Domains à nova Rule Set

Após efetuar as configurações, associe um ou mais **domains** à nova **Rule Set**

1. Edite a nova **Rule Set** do **Edge Firewall**.
2. Em **Main Settings**, na seção **Domains**, selecione domains que deseja associar à **Rule Set**.
3. **Salve** para aplicar a configuração.

#### Associação de WAF Rule Set

Após efetuar as configurações, associe seus WAF Rule Sets à nova Rule Set. WAF Rule Sets são usados da mesma forma, porém, passam do Edge Application para o Rules Engine do Edge Firewall:

1. Edite a nova **Rule Set** do **Edge Firewall**.
2. Habilite o módulo **Web Application Firewall**.
3. Na aba **Rules Engine** adicione ou edite uma Rule.
4. Na Rule, defina o **Criteria** para condicionar o uso da WAF Rule Set.
5. Em **Behavior** selecione **Set WAF Rule Set** e escolha um WAF Rule Set.
6. **Salve** para aplicar a configuração.

### Passo 2 - Removendo as regras de Edge Firewall no Edge Application

Depois de criar e aplicar as Rule Sets da versão mais recente do Edge Firewall para seu domínio, remova as Rules em Edge Application:

1. Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu **Edge Services** e selecione **Edge Applications**.
2. Edite uma **Edge Application** com configuração de **Edge Firewall**.
3. Entre na aba **Rules Engine**, e identifique as **Rules Sets** com **Behaviors Set Edge Firewall** ou **Set WAF Rule Set**.
4. Agora basta remover o **Behavior** de **Edge Firewall**.
5. Em seguida confirme o **Delete** e sua regra já estará deletada. 

---

## 3. Documentação de suporte {#support-documents}

- [Support Documents](https://www.azion.com/pt-br/documentacao/produtos/edge-firewall/)

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)https://tickets.azion.com/)