 //criando elementos

 //createElement
const div = document.createElement('div');
div.innerText = "Colocando texto";

// append prepend

const body = document.querySelector('body');
body.append(div);// append adiciona uma coisa despois, nesse caso aqui. a div

body.prepend(div); // adiciona antes 


// insertBefore (adiciona no meio )
const script = document.querySelector('script');
body.insertBefore(div, script)//dois Elementos, qual é o novo elemento e qual é a referencia para colocar 