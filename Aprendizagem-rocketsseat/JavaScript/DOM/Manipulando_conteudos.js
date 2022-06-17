// Manipulando conteúdo

//textContent   

const element = document.querySelector('h1');

element.textContent = "Olá Devs!"; // alterei o conteudo de texto do meu
//elemento h1

//Tem como pegar ele também através do element.content
conmsole.log(element.textContent);


// innerText

element = documet.querySelector("h1");
element.innerText = "Olá Devs!"; // trocando o texto interno 



// innerHtml

element = documet.querySelector("h1");
element.innerHTML = "Olá Devs! <small></small>>"; // troccando o texto do html e adiocionando  html


// Value 

element.value = "esquece"; // mudando o valor dentro do objeto, ou atribuir valor 


// atributos

const header = document.querySelector("header");
header.setAttribute("id",  "header"); // aqui esta se criando um id chamado header

const headerID = document.querySelector("#header")
console.log(headerID.getAttribute('id'));