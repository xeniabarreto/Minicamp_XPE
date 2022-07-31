// Criar uma função que recebe uma palavra como parâmetro e retorna esta palavra invertida

// 1- Receber a palavra como parâmetro
// 2- Criar uma variável temporária para armazenar o resultado
// 3- Iterar a palavra de tras para frente, armazenando letra por letra na variavel temporária
// 4- Retornar a variavel temporária
function ordemInversa(palavra){

    let palavraInvertida = '';
    for(let i = palavra.length -1; i >= 0; i--){
        palavraInvertida = palavraInvertida + palavra[i];
    }
    return palavraInvertida;
}
console.log(ordemInversa('xenia'))