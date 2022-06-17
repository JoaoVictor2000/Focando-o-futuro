/* ### SISTEMAS DE GASTOS FAMILIAR

Crie um objeto que possuirá 2 propriedades,, ambas do tipo array:

    * receitas: []
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e despesas 
e irá mostrar uma mensagem se a familiar esta com saldo positivo ou negativo,, seguido do valor
 do saldo

*/
let family_gast = {
    incomes: [1200,711,555,1111,1200],
    expenses: [7487,46544,55555,-4444],
}

function sum(array){
    let total = 0
    for (let value of array) {
        total += value;
    }

    return total
}

function calculateBalance(){

    const calculateIncomes = sum(family_gast.incomes);
    const calculateExpenses = sum(family_gast.expenses);

    console.log(calculateIncomes);
    console.log(calculateExpenses);

    const total = calculateIncomes - calculateExpenses;
    let positive =total>=0;
    if(positive){
        console.log('Saldo positivo');
    }else{
        console.log('saldo negativo');
    }
}

calculateBalance();