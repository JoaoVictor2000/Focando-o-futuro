function somarVArrays(arr){
    return arr.reduce(function (prev, current) {//valor atual e valor anterior
        console.log({ prev});
        console.log({current});
        return prev + current; //na primeira vez n ira executar, na segunda ira pegar o 1 e somar com o dois
    });
}
const arr = [1,2];
console.log(somarVArrays(arr));