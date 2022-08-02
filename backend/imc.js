function imc(peso, altura){
    let imc = peso / (altura * altura);

    if(imc < 18.5){
        console.log('Abaixo do Peso');
    }else if(imc >= 18.5 && imc < 25){
        console.log('Peso Normal');
    }else if(imc >= 25 && imc < 30){
        console.log('Sobrepeso');
    }else if(imc >= 30 && imc < 35){
        console.log('Obesidade Grau I');
    }else if(imc >= 35 && imc < 40){
        console.log('Obesidade Grau II');
    }else{
        console.log('Obesidade Grau III ou Mórbida')
    }

    return imc.toFixed(0);
}

console.log(imc(105, 1.60))