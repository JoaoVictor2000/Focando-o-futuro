/*Scope */

/*Escopo determina a visibilidade de alguma variavel
no codigo JS */


/*Block statement (declaração de bloco) */

//vamos iniciar um bloco
{
    //Aqui dentro é um bloco e posso colocar qualquer codigo

}//fechamos um bloco

alert("O bloco também criará um novo escopo. Chamamos de `block-scoped`");
 


/*VAR*/

// Var é global e podera funcionar fora do bloco


/*LET E CONST*/

//cibst e ket são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco?', y)

{
    let y = 0;
}
console.log('>existe x  depois do bloco', y)