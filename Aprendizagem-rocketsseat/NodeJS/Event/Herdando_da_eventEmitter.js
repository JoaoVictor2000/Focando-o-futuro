const {EventEmitter} = require('events');
const { inherits } = require('util') //modulo util existe dentro do core do js 
// inherits é uma função que vai herdar as funcionalidades da event emitter 
//para essa function aqui: 
function Character(name){
    this.name = name
}
 
inherits/*herdamos*/(Character, EventEmitter ) // dentro da character vai ter opções do eventemitter


const chapolim = new Character('Chapolim')

// criando um evento 

chapolim.on('help', () => console.log(`Eu! o ${chapolim.name} colorado!`)) // deixando on para receber emissoes de evnetos 


console.log("Oh, agora quem poderá me defender???")
chapolim.emit('help') // emitindo eventos