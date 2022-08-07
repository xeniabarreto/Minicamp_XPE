function start(){
    let buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleButtonClick);

    let inputWeight = document.querySelector('#input-weight');
    let inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);

    handleButtonClick();
}

function calculateImc(weight, height){
    return weight / (height * height);
}

function tableImc(){

    let message = 'inválido'

    if(imc < 16 && imc < 17){
        message = 'Muito abaixo do peso';
    }else if(imc >= 17 && imc < 18.5){
        message = 'Abaixo do Peso'
    }else if(imc >= 18.5 && imc < 25){
        message = 'Peso Normal'
    }else if(imc >= 25 && imc < 30){
        message = 'Sobrepeso';
    }else if(imc >= 30 && imc < 35){
        message = 'Obesidade Grau I';
    }else if(imc >= 35 && imc < 40){
        message = 'Obesidade Grau II';
    }else{
        message = 'Obesidade Grau III ou Mórbida'
    }

    return message;
}


function handleButtonClick(){
    let inputWeight = document.querySelector('#input-weight');
    let inputHeight = document.querySelector('#input-height');
    let imcResult = document.querySelector('#imc-result');
    let imcTable = document.querySelector('#imc-table');

    let weight = Number(inputWeight.value);
    let height = Number(inputHeight.value);

    let imc = calculateImc(weight, height);
    let fomarttedImc = imc.toFixed(2).replace('.', ',');
    let table = imc.toFixed(2)

    imcResult.textContent = fomarttedImc
    

    if(table < 16 && table < 17){
        imcTable.textContent = 'Muito abaixo do peso';
    }else if(table >= 17 && table < 18.5){
        imcTable.textContent = 'Abaixo do Peso'
    }else if(table >= 18.5 && table < 25){
        imcTable.textContent = 'Peso Normal'
    }else if(table >= 25 && table < 30){
        imcTable.textContent = 'Sobrepeso';
    }else if(table >= 30 && table < 35){
        imcTable.textContent = 'Obesidade Grau I';
    }else if(table >= 35 && table < 40){
        imcTable.textContent = 'Obesidade Grau II';
    }else if(table >= 40){
        imcTable.textContent = 'Obesidade Grau III ou Mórbida'
    }else{
        imcTable.textContent = 'Inválido'
    }
}

start();