function validaarray(arr, numb) {
  /*! é um não lógico*/
  //Assim que prototipa um erro em tela usando um if
  try {
    //usando um erro  que ja contem o js
    if (!arr && !numb) throw new ReferenceError("Envie os parametros");

    if (typeof arr !== 'object')
     throw new TypeError("Array não é do tipo objeto");

    if (typeof numb !== 'number')
     throw new TypeError("Número náo é number");

    if (arr.length !== numb) throw new RangeError("Tamanho diferente do numero o array");

   return arr;//caso ele n entre em nenhum erro
  } catch (e) {
    //agora vamos selecionar cada devido erro fazendo uma coisa pelo instanceof
    if(e instanceof ReferenceError){
      console.log("Este erro é um ReferenceError");
      console.log(e.message);//deixando a mensagem lá de cima exposta ao usuario
    }
    if(e instanceof TypeError){
      console.log("Esse erro é um TypeError");
      console.log(e.message);
    }
    if(e instanceof RangeError){
      console.log("Esse erro é um RangeError");
      console.log(e.message);
    }else{
      console.log("erro desconhecido: "+e);
    }
  }
}
//testando o reference error
//console.log(validaarray());

//testando o typeerror
//console.log(validaarray([],'a'));   

//testando o range error
//console.log(validaarray([],5));

//nenhum erro
console.log(validaarray([1,2,3,4,5],5));