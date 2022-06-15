/*
    Type conversion (typecasting) vs Type coersion (o js coversionando por de baixo dos panos)

    * Alteração de um tipo de dado para outro tipo 
      
*/
/*
Manipulando String e números
*/
//Transformar String em número e número em String

let string = "123";

Number(string)
let number = 123
String(number)

// contar quantos caracteres tem uma palavra e quantos digitos tem um numero 

let word = "Paralelepipedo"
word.length//mostra quantos caracteres tem a palavra

//transformar um número quebrado com 2 casas decimais e trocar ponto por virgula 

let numbera = 4353526456456.546465465
number.toFixed(2).replace('.',',')// pode colocar duas ou mais epsecies de funcoes de variaveis 
//func atrelada 


//Transformar letras minusculas em maisuculas, Faça o contrário disso também 

let word1 = "Programar é muito bacana!";
word.toUpperCase();//deixa as letras todas maiusculas
word.toLowerCase();//todas minusculas 


// verificando se o texto contém uma palavra especifica 
let phrase = "Eu quero viver!"
phrase.includes("Amor");//verifica se contem a palavra amor na String e retorna true or false


/*Separe um texto contem espaços, em um novo array
onde cada texto é uma posição de array. Depois disso, transforme o array
em um texto e onde era espaços, coloque _
*/
let text = "Eu quero viver um amor";
let myarray = text.split(" ");//estou separando por espaços 

let textWithUnderscore = myarray.join("_"); // esse metodo junta


//Contar elementos de array
let array = new Array();
array.length

//Transformando uma cadeia de caracteres em elementos de um array

let word4 = "Manipulação"

Array.from(word4);//transformando em elementos de um array
//com cada caracter sendo elemento do array
 
