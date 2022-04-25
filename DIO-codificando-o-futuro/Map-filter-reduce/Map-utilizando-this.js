const maca = {//objeto com value 2
    value: 2,
}

const laranja = {//objeto com value 3
    value: 3,
}

function MapComThis(arr, thisArg) {// vai fazer conforme o tamanho do array
    return arr.map(function (item) {//criando a função callback usando o item como mero argumento, o que ja esta presente dentro do array 
      return  item * this.value;//multiplicando o item  // retornando algo na maçã 
    }, thisArg) //fechando o parenteses do return
}
//lógica: o thisArg vai ser passado ou como maca ou como laranja, e ele será o valor do this
// Com isso, no item ali, sera multiplicado o valor passado por exemplo na masa, vezes ele 
const num = [1,2, 4, 85];

console.log('this --> maçã' ,MapComThis(num,maca)); // passando o arr e os this

console.log('this --> laranja' ,MapComThis(num,laranja)); // passando o arr e os this