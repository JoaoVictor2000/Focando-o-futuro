// clearInterval  irá cancelar uma função de N vezes feita com setInterval



const timeout = 1000 //(1s)
const checking = () => console.log('cheching!');


let interval  = setInterval(checking, timeout); // essa função vai rodar até cancelar 


setTimeout(() => clearInterval(interval) /* cancelamos esse intervalo*/, 3000)