const myResultFlag = require("./exports");//pegando a função que está sendo exportada 

console.log(`Oi ${myResultFlag('--name')}. ${myResultFlag('--greeting')}`)// passando as duas greetings aqui