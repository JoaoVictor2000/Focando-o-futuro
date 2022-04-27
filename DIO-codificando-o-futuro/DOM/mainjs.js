//precisamos mudar de light para dark e dark para ligth

//func principal
function changemodel() {
    changeclass();
    changetext();
}
function changeclass() {
    //modifca as classes
    button.classList.toggle(darkmodeClass);//classlist é as listas que contem o buttom
    //toggle vai colocar se n ter o dark model, e caso tenha, vai retirar
    h1.classList.toggle(darkmodeClass);
    footer.classList.toggle(darkmodeClass);
    body.classList.toggle(darkmodeClass);
}

function changetext(){//mudando os textos, o conteudo
    const lightMode = 'Ligth Mode';
    const darkMode = 'Darke Mode';

    if (body.classList.contains(darkmodeClass)) {//se o body
        button.innerHTML = lightMode; // o conteudo do html
        h1.innerHTML = darkMode +' On';
        return;
    }//constains vai ver se dentro dessa classlist existe alguma coisa 
    
    button.innerHTML= darkMode; // o conteudo do html
    h1.innerHTML = lightMode +' On';
}


const darkmodeClass = 'dark-mode';
const button = document.getElementById('mode');
const body = document.getElementsByTagName('body')[0];//pegando o unico body pelo indice, essa chamada feita pelo document
//faz com que venha uma 'lista ' de elemntos, como o nomne ja diz
const h1 = document.getElementById('page-title');

const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changemodel);//declarando como clic e deixando a funcao avista
