//process.stdout.write("Alguma coisa "); //escreve alguma coisa de saida

// comecemos o app 

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudeis hoje?"
];

const ask = (index=0) =>{
   process.stdout.write(questions[index] + "\n\n") // aprendemos com isso o processo de saida do processo
   // agora vamos pegar o processo de entrada do processo
   
}

ask();
const asnwers = []// vai receber as respostas

process.stdin.on("data", data => {//esse 'on' vai servir para pegar todos os eventos e que vai rodar a func data
    asnwers.push(data.toString().trim() + "\n")// Esse "TRIM" tira os espaços vazios  
    if(asnwers.length < questions.length){
        ask(asnwers.length) // passando o numero para pegar a proxima pergunta
    } else{
        for( i =  0; i < questions.length ;i++){
        console.log("Pergunta:" + questions[i] + "\n" + 
                    "Respostas:" + asnwers[i])
        }
        process.exit()//fechando o processo 
    }
    
})

