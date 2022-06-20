

 function getFlags(flag) { // function com parametro
    const index =  process.argv.indexOf(flag) + 1; //procurando qual o numero da flag aqui dentro
    return process.argv[index] // retornando  o valor  da flag

} 
module.exports = getFlags; // enviando conteudo