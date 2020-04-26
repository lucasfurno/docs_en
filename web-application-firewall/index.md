# Web Application Firewall

O Web Application Firewall protege as suas aplicações contra ameaças como SQL Injections, Remote File Inclusion (RFI), Cross-Site Scripting (XSS) e muito mais. O WAF analisa as requisições HTTP e HTTPS, detecta e bloqueia atividades maliciosas antes que elas alcancem a sua infraestrutura, sem impactar na performance de suas aplicações.

> 1. *[Como funciona?](#como-funciona)*
> 2. *[Documentação de Suporte](#documentacao-de-suporte)*

---

## 1. Como funciona {#como-funciona}

O Web Application Firewall é um módulo do Azion Edge Firewall, baseado na metodologia de scoring de requisições. Cada requisição *http/https* é comparada com um conjunto extremamente restritivo de regras de bloqueio e recebe uma pontuação para cada família de ameaças.

De acordo com a pontuação recebida pela requisição, a mesma poderá ser liberada ou bloqueada diretamente nos Edge Nodes da Azion, antes que a ameaça atinja sua origem. Você define o nível desejado de sensibilidade para o bloqueio de cada família de ameaças.

Para evitar o bloqueio de requisições lícitas e o mal funcionamento de sua aplicação, você deve executar uma etapa de aprendizagem, na qual o **WAF Rule Set** identifica os comportamentos legítimos de sua aplicação, inserindo-os em uma *whitelist*.

Você ainda pode monitorar o comportamento e a efetividade de suas configurações de **Web Application Firewall**. Através de nossas ferramentas **Real-Time Events** e **Data Streaming**, a Azion disponibiliza dashboards e relatórios para consultas de logs de eventos on-line e em tempo real. Além disso, você pode importar os registros de logs da Azion e manipulá-los dentro de suas próprias ferramentas de análise.

~~~
Para utilizar os recursos de WAF Rule Sets  é necessário habilitar o módulo Web Application Firewall no Edge Firewall Rule Set.
~~~

**Modo de Operação**

Para obter o máximo de desempenho e precisão do produto é necessária a etapa de aprendizagem. Você conta com dois modos de operação para lhe apoiar nessa etapa:

*   **Counting Mode:** é utilizado para especificar que o WAF não deve bloquear nenhuma requisição. O tráfego de suas aplicações será analisado e as ameaças encontradas serão apenas contabilizadas. Utilize esse modo de operação durante a primeira etapa de aprendizagem.
*   **Blocking Mode:** é utilizado para analisar e bloquear as ameaças detectadas, protegendo as suas aplicações dos usuários maliciosos. Você pode executar a etapa de aprendizagem sempre que julgar necessário, mesmo em Blocking Mode.

**Famílias de Ameaças**

As ameaças são categorizadas em famílias de acordo com o objetivo do ataque. Você pode ativar ou desativar a proteção para cada família de ameaças individualmente de acordo com as proteções requeridas pelo tipo de sua aplicação e funcionalidades que ela apresente.


| Threat Type                  | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| SQL Injections               | Previne tentativas de ataque através de injeção de código SQL na aplicação. |
| Remote File Inclusions (RFI) | Previne tentativas de incluir arquivos, usualmente através de scripts no servidor web. |
| Directory Traversal          | Previne a exploração de vulnerabilidade referente a sanitização insuficiente de campos de nomes de arquivo fornecidos pelos usuários, de modo que caracteres representando atalhos para o diretório pai sejam passados através da API de arquivos. |
| Cross-Site Scripting (XSS)   | Previne a injeção de scripts client-side em páginas vistas por seus visitantes. |
| File Upload                  | Previne a tentativa de envio de arquivos para o servidor web. |
| Evading Tricks               | Previne contra algunas truques de codificação utilizados para tentar escapar dos mecanismos de proteção. |
| Unwanted Access              | Previne as tentativas de acesso a páginas administrativas ou vulneráveis, bots e ferramentas de scanning de segurança. |
| Identified Attacks           | Previne vários tipos de ataques comuns e vulnerabilidades conhecidas que certamente deverão ser bloqueados. |

**Sensitivity (Sensibilidade)**

A sensibilidade define o rigor com o qual o WAF irá considerar uma requisição como uma ameaça:

- **Lowest**: é nível de sensibilidade mais baixo, a requisição será considerada uma ameaça se apresentar indícios muito fortes e receber uma pontuação alta. Essa sensibilidade tem um menor nível de proteção para suas aplicações, mas também evitará o bloqueio de requisições com menor chance de representar ameaças (falsos positivos)

- **Low**: é nível de sensibilidade mais baixo, a requisição será considerada uma ameaça se apresentar indícios muito fortes e receber uma pontuação alta. Essa sensibilidade tem um menor nível de proteção para suas aplicações, mas também evitará o bloqueio de requisições com menor chance de representar ameaças (falsos positivos).

- **Medium**: é o nível de sensibilidade recomendado pela Azion. A requisição será considerada como ameaça se apresentar indícios suficientes e receber uma pontuação intermediária.

- **High**: é o maior nível de proteção para sua aplicação. Ao menor indício de uma ameaça, a requisição poderá ser bloqueada, mesmo quando apresentar uma pontuação relativamente baixa. Esse nível de sensibilidade pode apresentar mais falsos positivos, se a etapa de aprendizagem não tiver cobertura suficiente sobre a variabilidade de cenários e usos de sua aplicação.

- **Highest**: é o maior nível de proteção para sua aplicação. Ao mínimo indício de uma ameaça, a requisição poderá ser bloqueada, mesmo quando apresentar uma pontuação muito baixa. Esse nível de sensibilidade pode apresentar muitos falsos positivos, se a etapa de aprendizagem não tiver cobertura suficiente sobre a variabilidade de cenários e usos de sua aplicação.

**Regras** {#regras}

O conjunto de regras que incrementam o score de uma requisição. Quanto maior o score, maior a probabilidade da requisição ser considerada um ataque pelo WAF.

A Azion trabalha com um conjunto extremamente restritivo de regras para assegurar a segurança de sua aplicação. Cada regra é composta pelos campos que seguem.

| Campo            | Descrição                                                    |
| ---------------- | ------------------------------------------------------------ |
| Rule Id          | Id numérico único de cada regra do WAF.                      |
| Rule Description | Uma descrição textual do que a regra faz.                    |
| Match Pattern    | Condição de comparação, string ou regex, que será buscada na requisição. |
| Path             | Quando especificado, restringe a aplicação da _Match Zone_ somente ao _path_ definido. O _path_ delimita o escopo de atuação da regra. |
| Match Zones      | Partes ou campos da requisição que serão comparados com o _Match Pattern_. Pode ser:<br> **Path:** o <em>match pattern</em> será comparado com o <em>path</em> da requisição. <br> **Query String:** o _match pattern_ será comparado com a _query string_, também chamada de GET _arguments_. <br> **Request Header:** o _match pattern_ será comparado com os cabeçalhos HTTP da requisição. <br> **Request Body:** o _match pattern_ será comparado com o _body_ de um POST, também chamado de POST _arguments_. <br> **File Name (Multipart Body):** o _match pattern_ será comparado com o nome de arquivos em _multipart POSTs_. <br> **Raw Body:** o _match pattern_ será comparado com o _body_ não interpretado de uma requisição, também chamado de _unparsed body_. |
| Attack Family    | A(s) família(s) de ataques para as quais a regra incrementa a pontuação. |

**Whitelist**

É a listagem de comportamentos legítimos de sua aplicação, que não devem incrementar o _score_ das requisições. Pode ser gerada automaticamente durante a etapa de aprendizagem ou inserida manualmente por meio de regras customizadas.

Cada regra de bloqueio possui _match zones_, conforme explicado na seção [Regras](#regras). A _whitelist_ tem o objetivo de desativar determinadas _Match Zones_ de uma regra de bloqueio.

| Campo                | Descrição                                                    |
| -------------------- | ------------------------------------------------------------ |
| Rule Id              | Id numérico único da regra de bloqueio para a qual a whitelist foi gerada. |
| Rule Description     | Uma descrição textual do que faz a regra de bloqueio para a qual a whitelist foi gerada. |
| Path                 | Quando especificado, restringe a aplicação da whitelist somente ao path definido. O path delimita o escopo de atuação da whitelist. |
| Whitelist Match Zone | É a whitelist propriamente dita. Define a parte ou campo da requisição para a qual a regra de bloqueio deve ser desativada. <br><br> **Path:** a rule id não será aplicada ao path da requisição. <br><br> **Query String:** a rule id não será aplicada a query string, também chamada de GET arguments. Pode ser restrito tanto ao nome quanto ao valor dos argumentos. É possível delimitar o escopo da whitelist a um único GET argument utilizando Conditional Query String. <br><br> **Request Header:** a rule id não será aplicada aos cabeçalhos HTTP da requisição. Pode ser restrito tanto ao nome quanto ao valor dos cabeçalhos. É possível delimitar o escopo da whitelist a um único cabeçalho HTTP utilizando Conditional Request Header. <br><br> **Request Body:** a rule id não será aplicada ao body de um POST, também chamado de POST arguments. Pode ser restrito tanto ao nome quanto ao valor dos argumentos. É possível delimitar o escopo da whitelist a um único POST argument utilizando Conditional Request Body. <br><br> **File Name (Multipart Body):** a rule id não será aplicada ao nome de arquivo em um multipart POST. <br><br> **Raw Body:** a rule id não será aplicada ao body não interpretado de uma requisição, também chamado de unparsed body. |
| Status               | O status de ativação da regra na whitelist.                  |

---

## 2. Documentação de Suporte {#documentacao-de-suporte}

- [Edge Firewall](https://www.azion.com/pt-br/docs/produtos/edge-firewall/)

---

Não encontrou o que procurava? [Abra um ticket.]