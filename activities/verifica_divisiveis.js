// PSEUDOCODIGO

// Verificar se um numero é divisivel por 3 ou 5
// Caso seja, retornar 'true'
// Caso não seja, retornar 'false'

function verificaDivisivel(numero){
    return (numero % 3 === 0 || numero % 5 === 0)
}



function verificaIntervalo(inicial, final){
    let contador = 0;
    let soma = 0;
    let multiplicacao = 1;

    for(let controle = inicial; controle <= final; controle++){
        if(verificaDivisivel(controle)){
            console.log(controle);
            contador++
            soma += controle;
            multiplicacao *= controle;
        }
    }

    console.log('Quantidade: ' + contador);
    console.log('Soma: ' + soma);
    console.log('Multiplicação: ' + multiplicacao);

}

console.log(verificaIntervalo(10, 20))