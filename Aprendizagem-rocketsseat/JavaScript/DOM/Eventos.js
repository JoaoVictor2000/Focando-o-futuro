 //eventos 

 /* 
 * Caso queira fazer qualquer coisa no html, como um evento de mouse ou de teclado,
 basta declarar antes no html, no elemento, escolhendo qual evento quer e fazendo ele se
 referenciar direto ao js 
 
 * Não são todos que funcionam em todos os casos, depende
 */

 ///Eventos de Teclado

 const input = document.querySelector("input");
// uma outra forma de adicionar evento, essa por meio do js mesmo 
 input.onkeydown = function (){
    console.log("rodei");
 }

 // criando uma lista de eventos
 const h1 = document.querySelector('h1');
 h1.addEventListener('click',  Listener)// primeiro fala o tipo de elemento e depois qual função ele vai executar

 function Listener(){
    console.log("rodei");
 }
