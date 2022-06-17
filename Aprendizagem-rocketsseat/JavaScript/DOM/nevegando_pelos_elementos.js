// Navegando pelos elementos
// parentNode parentElement

const element = document.querySelector('header');
//pegando os pais 
console.log(element.parentNode); // qual é o nó pai? R: html  
console.log(element.parentElement);// faz a mesma coisa 

// pegando os filhos 
console.log(element.childNodes); // pegando os filhos em formato de node list

//################################################################

// firstChild firstElementChild
console.log(element.firstElementChild); // pega o primeiro elemento 

// lastChild lastElementChild
console.log(element.firstElementChild); // pega o ultimo elemento 



//################################################################

// Navegando pelos elementos irmãos

//NextSibling nextElementSibling
 console.log(element.nextSibling)// pegaximo irmão

 console.log(element.nextElementSibling)// pega o primeiro que achar na pasta