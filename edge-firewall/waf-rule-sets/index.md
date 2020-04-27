# WAF Rule **Sets**

O WAF Rule Set protege as suas aplicações contra ameaças como SQL Injections, Remote File Inclusion (RFI), Cross-Site Scripting (XSS) e muito mais. O WAF analisa as requisições HTTP e HTTPS, detecta e bloqueia atividades maliciosas antes que elas alcancem a sua infraestrutura, sem impactar na performance de suas aplicações.

> 1. [Hands-on](#hands-on)
> 2. [Monitorando a detecção de ameaças](#associe-a-rule-set-criada-com-as-aplicacoes-que-deseja-monitorar)
> 3. [Aprove a whitelist desejada](#aprove-a-whitelist-desejada)
> 4. [Ative o bloqueio de ameaças na rule set](#ative-o-bloqueio-de-ameacas-na-rule-set)

---

## 1. Hands-on. Criando uma WAF Rule Set para suas aplicações {#hands-on}

WAF Rule Set é o conjunto de regras que protege contra os mais variados tipos de ataque. Nela estão definidas as proteções que você deseja ativar, o nível de sensibilidade da detecção e a *whitelist*.

Para criar uma *rule set*:

1. Acesse o [Real-Time Manager](https://manager.azion.com/login/?next=/) e entre no menu *Edge Services* > WAF.
2. Adicione uma nova *rule set* clicando no botão *Add*.
3. Na aba Main Settings, ative as proteções e o nível de sensibilidade desejados.
4. Salve sua *rule set* com um nome sugestivo. Você vai precisar dele para realizar posteriormente a associação da *rule set* por meio do Rules Engine.

Recomendamos que você ative a regra em Counting Mode no primeiro momento, para acompanhar a amostra de ameaças detectadas na etapa de aprendizagem, antes de efetivamente bloquear as requisições. Dessa forma você poderá também ajustar a sensibilidade da detecção, de acordo com a sua aplicação.

Durante o Counting Mode é recomendado que você deixe todas as proteções ativadas para que possa monitorar as ameaças detectadas pelo WAF.

Se forem detectados falsos positivos, algumas regras poderão ser incluídas na *whitelist* pelo Suporte da Azion, sem a necessidade de desativar a proteção completa para uma família de ameaças. Entre em contato se desejar avaliar a necessidade de incluir regras em *whitelist*, antes de desabilitar a sua proteção.

Por fim, a *rule set* deve estar ativa para que o WAF analise as suas requisições. O checkbox Active serve para permitir que você habilite e desabilite o WAF rapidamente para todos os *paths* que estiverem associados à rule set.

---

## 2. Monitorando a detecção de ameaças {#associe-a-rule-set-criada-com-as-aplicacoes-que-deseja-monitorar}

Deixe a rule set do WAF em modo Counting Mode pelo tempo que julgar necessário para que a maior parte das funcionalidades de sua aplicação seja coberta. Você deve acompanhar os gráficos da aba WAF pelo Real-Time Metrics ou os logs do WAF por meio dos produtos Real-Time Events e Data Streaming.

No Real-Time Metrics, o primeiro gráfico da aba WAF (Threats vs Requests) apresenta três séries temporais:

* Regular Requests: todas as requisições HTTP e HTTPS analisadas pelo WAF e consideradas seguras.
* Threats: o volume de ameaças detectadas pelo WAF e contabilizadas, quando em modo *Counting*. Essas ameaças não estão sendo bloqueadas nesse momento.
* Threats Blocked: ameaças efetivamente bloqueadas pelo WAF. Para começar a bloquear as ameaças encontradas, a rule set tem que estar em *Blocking Mode*.

Se você tiveir também o serviço Data Streaming, é possível acompanhar informações mais detalhadas sobre IP, data e horário de acesso, status code, família de ataque detectada e modo de atuação configurado.

~~~
$time-iso8601 $azion-client-id $azion-virtualhost-id $azion-configuration-id $azion-solution $azion-solution-id $host $conn-request-time $req-method $resp-status $req-uri $waf-threat-family $waf-threat-action $client-geoip-country-name $client-geoip-region-name $client-addr $client-port $req-header(User-Agent) $req-header(Referer) 2017-01-04T17:00:19+00:00 1234a 10203b 1020304050 ha 1441740010 www.yoursite.com 0.129 GET 200 /request-uri?key=value $XSS $LEARNING-BLOCK Brazil Sao Paulo 1.2.3.4 61511 Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36 https://www.yoursite.com/referrer 2017-01-04T17:00:19+00:00 1234a 10203b 1020304050 ha 1441740010 www.yoursite.com 0.025 POST 200 /request-uri $SQL $LEARNING-BLOCK Brazil Santa Catarina 2.3.4.5 61513 Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36 https://www.yoursite.com/referrer 2017-01-04T17:00:40+00:00 1234a 10203b 1020304050 ha 1441740010 www.yoursite.com 0.026 GET 301 /request-uri?key=value $RFI $LEARNING-BLOCK Brazil Rio de Janeiro 5.6.7.8 26102 Mozilla/5.0 (Linux; Android 5.1.1; SM-G800H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36 https://www.yoursite.com/referrer 2017-01-04T17:00:41+00:00 1234a 10203b 1020304050 ha 1441740010 www.yoursite.com 0.391 POST 200 /request-uri $UWA $LEARNING-BLOCK Brazil Rio Grande do Sul 9.10.11.12 26102 Mozilla/5.0 (Linux; Android 5.1.1; SM-G800H Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36 https://www.yoursite.com/referrer
~~~

Com base nessas informações, você pode ajustar a sensibilidade da *rule set* do WAF até que não ocorram mais falsos positivos - ou mesmo solicitar à Azion a geração de *whitelist* para sua aplicação.

---

## 3. Aprove a whitelist desejada {#aprove-a-whitelist-desejada}

Solicite ao Suporte da Azion a geração da proposta de whitelist, baseada na etapa de aprendizagem de sua aplicação.

A proposta de whitelist gerada pela Azion será inserida na plataforma e estará disponível para sua aprovação:

1. Acesse o menu Cloud Security > WAF, ou acesse o atalho “Manage WAF” na tela inicial.
2. Edite a *rule set* para a qual deseja avaliar a *whitelist*.
3. Na aba *Whitelist*, habilite todas as regras que desejar aprovar.
4. Salve sua *rule set*.

---

## 4. Ative o bloqueio de ameaças na rule set {#ative-o-bloqueio-de-ameacas-na-rule-set}

Após monitorar o comportamento de sua aplicação e as ameaças detectadas após a etapa de aprendizagem e aprovação da *whitelist*, você deve alterar a *rule set* para Blocking:

1. Acesse o menu Edge Services > WAF.
2. Edite a *rule set* do WAF desejada.
3. Altere o modo de Counting para Blocking.

A partir desse momento, sua aplicação estará protegida e as ameaças detectadas serão efetivamente bloqueadas.

> Lembre-se: o WAF só bloqueia as ameaças se estiver configurado em Blocking Mode.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/edge-caching/waf-rule-sets/index.md) on GitHub.