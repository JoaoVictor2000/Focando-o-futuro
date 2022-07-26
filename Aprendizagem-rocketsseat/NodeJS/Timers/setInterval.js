// setInterval  irá rodar uma função N vezes
// depois de x milissegundos


const timeout = 1000 //(1s)
const checking = () => console.log('cheching!');


setInterval(checking, timeout); // essa função vai rodar até cancelar 
