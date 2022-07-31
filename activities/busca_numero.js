// Receber um numero como parâmetro
// Executar um for na lista e para cada elemento verificar se é igual ao numero buscado
// Quando encontrar, interromper a execução e retornar true
// Se chegar até o fim sem encontrar, retornar false

let lista = [19, 54, 18, 11, 47, 98, 36, 44, 87];

function verificaNumero(numero){
    let existe = false;
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] === numero){
            existe = true;
            break;  //assim que acha o numero ele interrompe a verificação
        }
        //console.log(lista[i]); // mostra os numeros que ele passou para chegar ao indicado
    }
    return existe;
}

console.log(verificaNumero(18));