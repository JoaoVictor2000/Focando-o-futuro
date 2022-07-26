const {EventEmitter} = require ('events') // estamos importando 

//EventEmitter é uma classe 
// a qual é um dos  conceitos mais importantes no Node, pois é com eles que emitimos eventos, que podem ser ouvidos por outros objetos no programa. Através dessa arquitetura é que podemos conectar pedaços de código distantes entre sí.


const events_emitt = new EventEmitter();

events_emitt.on('esquece', (message) => { //.on sempre fica ouvindo eventos
    // podemos passar argumentos tambem, como a 'message'    console.log('eu ouvi vc: ', message)
    console.log('fala comigo: ', message)

})

/*TAMBÉM TEM O ONCE  */  
events_emitt.once('esquece', (message) => { // Esse ouve apenas uma unica vez, não importa quantos estejam na fila 
    console.log('fala comigo: ', message)

})

//para disparar eventos 
events_emitt.emit('esquece', 'João'); 
events_emitt.emit('esquece', 'Julia'); 
// Apenas emitimos os eventos, mas não ouvimos eles 
//por isso, 'ligamos' na emissao de eventos


