function getAdmins(myMap) {
    let admins = [];//fazendo um array de admins
    for ([key, value] of myMap) {  //selecionando a chave e o valor

        if (value === 'Admin') { // selecionando apenas aqueles que tem como valor 'Admin'
            admins.push(key); // puxando pro array os nomes
        }

    }
    return admins;
}

const myMap = new Map();
myMap.set('Luiz', 'Admin');
myMap.set('Paulo', 'Admin');
myMap.set('João', 'Admin');
myMap.set('Nathan', 'Desenvolvedor ');

console.log(getAdmins(myMap));//mandando o array que tinha sido criado