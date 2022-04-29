# Shorthand
# Propriedades abreviadas) são propriedades de CSS que deixam você setar os valores de outras propriedades de CSS simultaneamente.
* Junção de propriedades 
* resumido
* legivel

## Detalhes

* não irá considerar propriedades anteriores

* valores não especificados (COMO O irão assumir o valor padrãO

* Geralmente, a ordem descrita não importa, mas, se houver muitas propriedade com valores semelhantes, poderemos encontrar problemas

*A especificação CSS define como shorthand properties, o grupo de propriedades com o mesmo tema. Ex: a propriedade CSS background 

Para pesquisas:
https://developer.mozilla.org/pt-BR/docs/Web/CSS/Shorthand_properties

```css
{
        /*backgroud properties*/
        backgroud-color: #000;
        backgroud-image: url(images/bg.gif);
        backgroud-repeat: no-repeat;
        backgroud-position: left top/


        /*Background shorthand*/
        backgroud: #000 url(images/bg.gif) no-repeat left top;

}
{
        font-style: italic;
        font-weight: bold;
        font-size: .8em;
        font-family: Arial, sans-serif;


        /*Background shorthand*/
        font: italic bold .8em Arial, sans-serif;
}

```