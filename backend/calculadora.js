function calculo(operacao, num1, num2){
    let resultado;

    if(operacao === 'SOMA'){
        resultado = num1 + num2;
    }else if(operacao === 'SUBTRACAO'){
        resultado = num1 - num2;
    }else if(operacao === 'MULTIPLICACAO'){
        resultado = num1 * num2;
    }else if(operacao === 'DIVISAO'){
        resultado = num1 / num2;
    }else if(operacao === 'RESTO'){
        resultado = num1 % num2;
    }else if(operacao === 'PORCENTAGEM'){
        resultado = num1 * num2 / 100;
    }else{
        console.log('Operação inválida.');
    }
    return resultado;
}
console.log(calculo('SOMA', 1, 1))
console.log(calculo('SUBTRACAO', 6, 1))
console.log(calculo('MULTIPLICACAO', 5, 5))
console.log(calculo('DIVISAO', 10, 2))
console.log(calculo('RESTO', 10, 1))
console.log(calculo('PORCENTAGEM', 100, 50))
console.log(calculo())