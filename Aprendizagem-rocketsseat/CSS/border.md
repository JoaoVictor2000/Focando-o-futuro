## border ( e  outline )

As bordas da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>`

- style: solid | dotted | dashed | double | groove| ridge | inset | outset 

- width: `<length>`
- color: `<color>`

```css
div{
    /*shorthand*/
    border-top: solid 2px; /*top | right | bottom | left */

    /*style*/
    border: solid;

    /*width <length> | style */
    border: 2px dotted;

    /*stle | color */
    border: outset #f33;

    /*width | style | color*/
    border: medium dashed green;     

}
```
## E outline?
- difere em 4 sentidos:
- Nao modifica o tamanho da caixa, pois não é a parte do box model;
- Poderá ser diferente de retangular;
- Não permite ajuste individuais
- Mais usado pelo user agent para acessibilidade 

