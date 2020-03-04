# Image **Optimization**

O Azion Image Optimization automatiza seu workflow de tratamento de imagens.

A otimização de suas imagens reduz o tamanho das mesmas, sem perda perceptível de qualidade visual, o que reduz o tempo transferência de seu conteúdo e melhora a experiência de usuário. Isso aumenta a fluidez de suas páginas e a velocidade de navegação, sem você precisar fazer praticamente nada.

Você automatiza seu workflow de tratamento de imagens, utilizando as funções para redimensionar, recortar ou aplicar filtros em suas imagens, sem a necessidade de gerenciar dezenas de versões e recortes de cada imagem em seu acervo.

> 1. [Instruções de uso](#instrucoes-de-uso)
> 2. [Redimensionar a imagem com auto-crop](#redimensionar-a-imagem-com-auto-crop)
> 3. [Redimensionar a imagem com fit-in](#redimensionar-a-imagem-com-fit-in)
> 4. [Recortar a imagem](#recortar-a-imagem)
> 5. [Alterar qualidade da imagem](#alterar-qualidade-da-imagem)
> 6. [Adicionar marca d’água na imagem](#adicionar-marca-dagua-na-imagem)
> 7. [Converter o formato de uma imagem](#converter-o-formato-de-uma-imagem)
> 8. [Preencher imagem](#preencher-imagem)
> 9. [Combinar filtros](#combinar-filtros)
> 10. [Como o Image Optimization é tarifado](#como-o-image-optimization-e-tarifado)


---

## 1. Instruções de uso {#instrucoes-de-uso}

Desenvolvemos este produto para que você possa otimizar, redimensionar, recortar e aplicar filtros em suas imagens. Assim, proporcionamos mais velocidade e dinamismo à experiência de seu usuário.

Os formatos de imagem suportados são JPEG, GIF, PNG, BMP, ICO e WEBP (para [browsers compatíveis](https://caniuse.com/#search=webp)).

**Como configurar o Azion Image Optimization**

Para configurar o Azion Image Optimization, siga as seguintes etapas, consultando as demais documentações técnicas, sempre que necessário:

**Etapa 1. Crie ou edite a configuração de Content Delivery para distribuição de suas imagens**

1.  Acesse o [Real-Time Manager](https://manager.azion.com/) e entre no menu Content Delivery
2.  Se você já tiver criado uma configuração de Content Delivery para distribuição de suas imagens, pule diretamente para a Etapa 2
3.  Caso contrário, crie uma configuração de Content Delivery para distribuição de suas imagens, seguindo a documentação de [Primeiros Passos]({% tl documentation_first_steps %}#crie-uma-nova-configuracao)

**Etapa 2. Habilite Advanced Cache Key para suas imagens**

> Para utilizar as funcionalidades de redimensionamento, recorte ou aplicação de filtros em imagens, você precisará configurar a variação de conteúdo por Query String

1.  Edite a configuração de Content Delivery responsável pela distribuição de suas imagens, criada na Etapa 1
2.  Na aba Cache Settings, adicione ou edite uma política de cache customizada para suas imagens
3.  Atribua um nome sugestivo para sua política, você irá precisar dele na Etapa 3
4.  Na seção Expiration Settings, configure a política de expiração de suas imagens no cache, seguindo o que você aprendeu na documentação de Primeiros Passos; para imagens, a Azion recomenda que você utilize tempos mais longos como maximum TTL para CDN Cache, como por exemplo, 7.776.000 segundos (3 meses).
5.  Na seção Advanced Cache Key, selecione uma das opções:
    *   _Content varies by some Query String fields (Whitelist):_ se você desejar listar todos os campos da Query String que diferenciam suas imagens. O Image Optimization utiliza o campo _ims_, que deverá ser incluído na listagem com os demais campos necessários por sua aplicação de gestão de imagens. Essa opção requer o produto Application Acceleration.
    *   _Content varies by Query String, except for some fields (Blacklist):_ se você desejar listar apenas quais campos da Query String devem ser ignorados ao diferenciar os objetos em cache. Nesse caso, garanta que o campo _ims_ seja removido da listagem. Essa opção requer o produto Application Acceleration.
    *   _Content varies by all Query String fields:_ se você não sabe ou não se sente seguro para listar os campos da Query String que são responsáveis pela variação do seu conteúdo em cache, ou se não possui o produto Application Acceleration.
6.  Nas demais seções, edite as configurações de acordo com sua necessidade e salve sua configuração de cache.


**Etapa 3. Habilite o Image Optimization**

1.  Na aba Rules Engine, adicione ou edite uma regra customizada para um ou mais paths de imagens
2.  No campo Path, digite o caminho para suas imagens ou use a regex recomendada pela Azion _\.(jpg|jpeg|gif|png|bmp)$_
3.  Marque o checkbox Regex, se estiver utilizando expressão regular no campo Path
4.  No campo Behavior, selecione Image Optimization
5.  No campo Cache Settings, selecione o preset criado na Etapa 2
6.  Em todas as demais seções, utilize as configurações adequadas para sua necessidade e salve a regra.

A partir de agora, as imagens do path configurado serão automaticamente otimizadas. Além disso, o Image Optimization detecta o compatibilidade do browser com o formato WEBP e, quando possível, converte o formato da imagem automaticamente, trazendo ainda mais ganhos para você. Imagens BMP também serão automaticamente convertidas para JPEG ou WEBP, dependendo da compatibilidade do browser.

Se você tiver contratado o [Azion Analytics Premium]({% tl documentation_products_analytics %}), acompanhe o gráfico de _Bandwidth Saving_ para monitorar a economia de tráfego resultante da otimização.

Conheça, a seguir, as demais funcionalidades do produto, configuradas como argumentos na Query String da URL da imagem.

---

## 2. Redimensionar a imagem com auto-crop {#redimensionar-a-imagem-com-auto-crop}

Você pode utilizar o Image Optimization da Azion para redimensionar suas imagens, sem a necessidade de ter que gerenciar múltiplos arquivos em seu acervo de imagens.

A partir de uma imagem original de seu acervo, o Image Optimization poderá criar imagens derivadas, sob demanda, do tamanho que melhor se adapte à sua página.

Você especifica as dimensões desejadas como argumentos na Query String, no formato:

~~~
ims=WidthxHeight
~~~

*   Width: largura, em pixels, para a imagem derivada
*   Height: altura, em pixels, para a imagem derivada


Para redimensionar a imagem preservando o _aspect ratio_, omita um dos dois valores, o qual será calculado automaticamente. Utilize _Widthx_ para especificar apenas a largura e deixar que a altura seja calculada proporcionalmente, ou _xHeight_, para especificar apenas a altura e deixar que a largura seja calculada automaticamente. 


Você também pode especificar ambas as dimensões, _Width_ e _Height_, para recortar (_auto-crop_) a imagem, nas dimensões desejadas. O recorte é centralizado e pode ocorrer tanto na vertical quanto na horizontal, dependendo do melhor encaixe das dimensões originais nas dimensões especificadas.


Utilize o valor _orig_ em qualquer das dimensões da imagem, se desejar manter a dimensão original.
**Exemplos de aplicação

_http://yourdomain.com/image.jpg?ims=880x_ (880 pixels de largura, altura automática)

[![bulldog]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=880x)]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=880x)


_http://yourdomain.com/image.jpg?ims=880xorig_ (880 pixels de largura, altura original)

[![bulldog]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=880xorig)]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=880xorig)


_http://yourdomain.com/image.jpg?ims=400x_ (400 pixels de largura, altura automática)

[![bulldog]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=400x)]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=400x)

_http://yourdomain.com/image.jpg?ims=400x400_ (400 pixels de largura, 400 pixels de altura)

[![bulldog]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=400x400)]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=400x400)

_http://yourdomain.com/image.jpg?ims=x100_ (largura automática, 100 pixels de altura)

[![bulldog]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=x100)]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=x100)

---

## 3. Redimensionar a imagem com fit-in {#redimensionar-a-imagem-com-fit-in}

Outra forma de redimensionar a imagem é utilizando fit-in:

~~~
ims=fit-in/WidthxHeight
~~~

*   Width: largura máxima, em pixels, para a imagem derivada
*   Height: altura máxima, em pixels, para a imagem derivada

A imagem derivada será redimensionada para caber na área especificada por WidthxHeight. O aspect ratio da imagem original é preservado e, se desejar, você pode ocultar um dos valores.

Caso a área especificada seja maior do que as dimensões da imagem, a imagem não será aumentada. As dimensões especificadas como parâmetros do _fit-in_ representam os limites de tamanho máximo da área que a imagem pode ocupar. Uma ou ambas as dimensões da imagem poderá ser menor do que a área delimitadora.

**Exemplo de aplicação**

_https://yourdomain.com/image.jpg?ims=fit-in/400x400_ (largura máxima de 400 pixels e altura máxima de 400 pixels)

[![bulldog]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=fit-in/400x400)]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=fit-in/400x400)

---

## 4. Recortar a imagem {#recortar-a-imagem}

O recorte da imagem pode ser feito informando um ponto inicial (AxB) e um ponto final (CxD), como argumento na Query String da URL da imagem:


~~~
ims=AxB:CxD
~~~


*   AxB: ponto inicial do recorte indicando a posição, em pixels, do canto superior esquerdo da área a ser recortada.
*   CxD: ponto final do recorte indicando a posição, em pixels, do canto inferior direito da área a ser recortada.

**Exemplo de aplicação**

_http://yourdomain.com/image.jpg?ims=430x20:910x730_

[![bulldog]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=430x20:910x730)]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=430x20:910x730)

---

## 5. Alterar qualidade da imagem {#alterar-qualidade-da-imagem}

O Image Optimization otimiza suas imagens, reduzindo o tamanho do arquivo e, portanto, o tempo de transferência do mesmo. O valor default de qualidade utilizado é de 85%, o que proporciona otimização sem perda perceptível de qualidade visual.

Se necessário, você pode definir uma qualidade customizada para suas imagens, utilizando o filtro:

~~~
filters:quality(Number)
~~~

Onde _Number_ deve ser um número inteiro entre 0 e 100, que representa a qualidade desejada.

**Exemplo de aplicação~**

__http://yourdomain.com/image.jpg?ims=filters:quality(100)__

[![bulldog]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=filters:quality(100))]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=filters:quality(100))

__http://yourdomain.com/image.jpg?ims=filters:quality(85)__

[![bulldog]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=filters:quality(85))]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=filters:quality(85))

__http://yourdomain.com/image.jpg?ims=filters:quality(15)__
 
[![bulldog]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=filters:quality(15))]({{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=filters:quality(15))

---

## 6. Adicionar marca d’água na imagem {#adicionar-marca-dagua-na-imagem}

Para adicionar marca d’água em imagens utilizando o Image Optimization, utilize o filtro:

~~~
filters:watermark(ImageURL,X,Y,Alpha)
~~~

*   ImageURL: é a URL da imagem que deve ser inserida como marca d’água. Caso a URL contenha parênteses, eles devem ser codificados como %28 para “(” e %29 para “)”.
*   X: posição horizontal de inserção da marca d’água. Números positivos representam deslocamento, em pixels, da borda à esquerda para a direita, enquanto números negativos reprentam deslocamento da borda à direita para a esquerda. Pode ser utilizado o valor center, para centralizar horizontalmente a marca d’água, ou o valor repeat, para preencher horizontalmente a imagem com repetições da marca d’água.
*   Y: posição vertical de inserção da marca d’água. Números positivos representam um deslocamento, em pixels, do topo para a base, enquanto números negativos representam deslocamento da base para o topo. Pode ser utilizado o valor center, para centralizar verticalmente a marca d’água, ou o valor repeat, para preencher verticalmente a imagem com repetições da marca d’água.
*   Alpha: transparência da marca d’água. Deve ser um número entre 0 (completamente opaco) e 100 (completamente transparente).


**Exemplo de aplicação**

__http://yourdomain.com/image.jpg?ims=filters:watermark(http://yourdomain.com/watermark-image.png,-25,-10,50)__

---

## 7. Converter o formato de uma imagem {#converter-o-formato-de-uma-imagem}

Você pode converter o formato de uma imagem utilizando o filtro:

~~~
filters:format(ImageFormat)
~~~

Onde ImageFormat pode assumir os valores webp, jpeg, gif ou png.

**Exemplo de aplicação**

Para converter uma image jpeg para gif:

__http://yourdomain.com/image.jpg?ims=filters:format(gif)__

[![bulldog]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=filters:format(gif))]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=filters:format(gif))

---

## 8. Preencher imagem {#preencher-imagem}

O Image Optimization também pode ser utilizado para gerar uma imagem derivada em um tamanho maior do que o da original, mas ao invés de redimensioná-la para o tamanho desejado, pode preencher o espaço com uma cor customizada. Utilize o parâmetro de [fit-in](#redimensionar-a-imagem-com-fit-in) com as dimensões desejadas associado com filtro __fill__:

~~~
filters:fill(Color)
~~~
    
Onde __Color__ é a cor de preenchimento, seguindo a nomenclatura e códigos especificados para o [padrão HTML](https://en.wikipedia.org/wiki/Web_colors).

**Exemplo de aplicação**

__http://yourdomain.com/image.jpg?ims=fit-in/400x400/filters:fill(gray)__

[![bulldog]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=fit-in/400x400/filters:fill(gray))]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=fit-in/400x400/filters:fill(gray))

__http://yourdomain.com/image.jpg?ims=fit-in/400x400/filters:fill(008080)__

[![bulldog]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=fit-in/400x400/filters:fill(008080))]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=fit-in/400x400/filters:fill(008080))

__http://yourdomain.com/image.jpg?ims=fit-in/400x400/filters:fill(00ffff)__

[![bulldog]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=fit-in/400x400/filters:fill(00ffff))]({{ {{ site.url }}/images/docs/image-optimization/bulldog-1280px.jpg?ims=fit-in/400x400/filters:fill(00ffff))

---

## 9. Como o Image Optimization é tarifado {#combinar-filtros}

O Image Optimization permite que você combine os filtros desejados separando os mesmos por “:”.

~~~
filters:filter1(arg1):filter2(arg2)
~~~

Onde filter1(arg1) e filter2(arg2) são os filtros que você deseja aplicar.

**Exemplo de aplicação**

__http://yourdomain.com/image.jpg?ims=fit-in/400x400/filters:fill(gray):quality(100)__

---

## 10. Como o Image Optimization é tarifado {#como-o-image-optimization-e-tarifado}

A cobrança do Azion Image Optimization é baseada no número de requisições de processamento de imagens.

As imagens podem ser processadas mais de uma vez, dependendo de fatores como:

*   a quantidade de derivações solicitadas: recortes, redimensionamentos e aplicação de filtros
*   o hit ratio das imagens no cache do Azion Content Delivery

São contabilizadas tanto requisições HTTP quanto HTTPS, sem distinção de valor entre ambas.

A cobrança do Image Optimization é adicional a cobrança do Content Delivery, no entanto, a redução do tamanho das imagens traz economia no tráfego total de conteúdo pelo Content Delivery. Acompanhe o gráfico __Bandwidth Saving__ para monitorar a economia.

Para reduzir seu consumo no Image Optimization, a Azion recomenda que você aumente o tempo de vida de suas imagens em cache (__hit ratio__), o que também resultará em maior economia de tráfego no Content Delivery.

---

Não encontrou o que procurava? [Abra um ticket.](https://tickets.azion.com/)

[Clique aqui](#) para editar esta página no GitHub.