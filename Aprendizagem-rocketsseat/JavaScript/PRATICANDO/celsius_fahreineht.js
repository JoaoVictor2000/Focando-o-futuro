/*

    ### Celsius em fahreinheit

    Crie uma função que receba uma string em celsius ou fahrenithn e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
    */


function conversion(degree) {
    // Vendo se é fahnreinht ou celsius
    const celsiusExists = degree.toUpperCase().includes('C');

    const FahnreintExists = degree.toUpperCase().includes('F');

    //fluxo de erro 
    if (!celsiusExists && !FahnreintExists) {
        throw new Error('Degree não identificado');
    }

    //fluxo ideal, F --> C
    let updateDegree = Number(degree.toUpperCase().replace("F", "")); // o numero de Fanhreithn ficara nessa variavel
    // o F sera retirado para futuramente colocar o C
    let formula = (Fahnreint) =>  // criamos uma funçao
        (Fahnreint - 32) * 5 / 9; // devolve um numero 
    let degreeSign = 'C'; // aqui faz o esquema de trocar a leta
  


    //Fluxo Alternativo
    if (celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", "")); // o numero ficara nessa variavel, o numero tanto de celsius ou de f
        // o C sera retirado para futuramente colocar o F
        formula = Celsius => Celsius * 9/5 + 32; // criamos uma function
        degreeSign = 'F'; // aqui faz o esquema de trocar a leta
    }

        
    return formula(updateDegree) + degreeSign;// um return para duas funçoes, E AONDE adicionamos o numero com a Letra


    
}


try {
    console.log('Degree celsius é: ' + conversion('10C'));
    console.log('Degree F é: ' + conversion('50F'));
    console.log('Degree  é: ' + conversion('50z'));
} catch (error) {
    console.log(error.message);
}