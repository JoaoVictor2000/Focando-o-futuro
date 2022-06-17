/* 
    Crie um algoritmo que transforme as notas do sistema numerico para sistema de notas em caracteres tipo A B C 

* DE 90 PARA CIMA - A 
* Entre 80 e 89 - B
* Entre 70 e 79 - C
* Entre 60 e 69 - D
* menor que 60  - F
*/

function notas(nota){

    let A = nota >= 90;
    let B = nota >= 80 && nota <= 89;
    let C = nota >= 70 && nota <= 79;
    let D = nota >= 60 && nota <= 69;
    let F = nota < 60;


    if(A){
        console.log9("Meus parabéns, vocë teve conceito A");
    }else if(B) {
        console.log("Meus parabéns, vocë teve conceito B");
    } else if(C) {
        console.log("Meus parabéns, vocë teve conceito C");
    } else if(D) {
        console.log("Vai ter que buscar melhorar em meu filho, teve conceito D");
    } else if(F) {
        console.log("Horrivel, conceito F carinha");
    }
}
notas(50)