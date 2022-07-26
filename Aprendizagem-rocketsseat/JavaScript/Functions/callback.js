//callback function (chamar de volta )
/* Callbacks garantem que uma função não seja *executada* antes 
que uma tarefa seja concluída, mas logo depois dessa tarefa ser concluída. 
Elas nos ajudam a desenvolver código JavaScript assíncrono e evitam que tenhamos problemas e erros
*/

function sayMyName(name){
    console.log(name);
}
sayMyName(//posso passar até uma função para outra func
() =>{ //callback é uma func que esta passando para outra

}
)
