const BASE_URL = 'https://thatcopy.pw/catapi/rest/';//trazendo a api
//muito comum entre os programadores criar constantes com esse nome
const botaoindex = document.getElementById('change-cat');//pegamos as coisas usando o dom



const carregar = async () => { //delarando como função

    try {
        const data = await fetch(BASE_URL); // pegamos o que era pedido
        //vamos converter nesse próximo para json
        const json = await data.json();//transformando em json

        return json.webpurl;//pegando um devido dado que contem na URL 
    } catch (e) {
        console.log(e.message);//pegando a mensagem do erro
       
    }
};

const loading = async ()  => {
    const catImg = document.getElementById('cat');
    catImg.src = await carregar(); //adicionando um local para a constante
}

botaoindex.addEventListener('click', loading); // adicionando envento de click

loading(); // pagina ja vai abri com uma imagem