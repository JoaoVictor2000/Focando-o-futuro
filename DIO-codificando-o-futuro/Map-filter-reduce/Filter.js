function filterA(arra){
    return arra.filter( function (item) {
 return item % 2 === 0;//filtrando apenas os divisiveis por 2 
    })
}
let meuarray = [ 1, 11, 23, 2, 22, 40 ];

console.log(filterA(meuarray));