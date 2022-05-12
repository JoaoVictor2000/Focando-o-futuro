//function expression
// function anonymous

const sum = function(n1, n2){
     return n1+n2;// a palavra return é o que faz retornar 
}

//executando
console.log(sum(4,8));


//Function imaginemos que  é um liquidificador 

function fazerSuco(fruta1, fruta2){
 return 'suco de: '+ fruta1 +' e de ' + fruta2
}
const copo = fazerSuco('banana', 'maça')

console.log(`O que tem no copo? Tem ${copo}`);