
const lista = [
    {//criando posiçoes mais detalhamente
    name: 'sabao em po',
    preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name:'toalha',
        preco: 3
    }
];
const saldodeconta= 100;

function calculaSaldo(saldoDisponivel, li){
    return li.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;//pegando apenas o preço do array 
    }, saldoDisponivel);
}
console.log(calculaSaldo(saldodeconta, lista));