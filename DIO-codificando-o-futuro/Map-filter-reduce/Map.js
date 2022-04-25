function mapSemThis(array){//BEM  MAIS FACIL 
    return array.map(function(item){
        return item*2;//multiplicando o item por dois 
    });
}
const num = [5,4,7,8,89,5];
console.log(mapSemThis(num));