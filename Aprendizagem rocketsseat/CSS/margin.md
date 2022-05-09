## margin

Espaços entre os elementos 

- margin-top | margin-right | margin-bottom | margin-left //segue esse sequencia
- values: `<length>` | `<percentage>` | auto

```css

div{
    /*Shorthand*/
    margin: 12px 16px 10px 4px;/*com todas as propriedades apresentadas ali em cima*/
    margin:12px 16px 0; /*top, rigth e left bottom*/
    margin: 8px 16px;/*parte de cima e embaixo, e laterais*/
    margin: 8px;/*para todas as laterais */
}
```
    * Cuidado com margin collapsing(top se ajunta ao bottomf) *