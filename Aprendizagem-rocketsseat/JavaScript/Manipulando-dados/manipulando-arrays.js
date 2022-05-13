//Manipulando Arrays

let techs = ["html", "css", "js"];

//adicionar um iutem no fim do array
techs.push("nodejs"); 

//adicionar no começo
techs.unshift("sql");

//remover do fim
techs.pop();
//remover do começo
techs.shift()
//Pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) //posiçao inicial que quer pegar e final
// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 2)//qual o index primeiro e quantos elementos quer tirar
// encontrar a posição de um elemento no array
let index = techs.indexOf('css');