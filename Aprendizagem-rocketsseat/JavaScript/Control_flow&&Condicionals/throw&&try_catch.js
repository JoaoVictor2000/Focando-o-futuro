//throw ( disparar/ lançar)
function sayMyName(name = ""){
    if(name ===""){
        throw new Error("Nome é necessário");
    }
}

//try(tentar)...catch(pegar)

try{
    sayMyName()
}catch(e){// o 'e' captura e armazena o erro
console.log(e)
}

// disparar e tentar pegar o erro