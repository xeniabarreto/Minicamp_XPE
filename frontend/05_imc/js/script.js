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

function handleButtonClick(){
    let inputWeight = document.querySelector('#input-weight');
    let inputHeight = document.querySelector('#input-height');
    let imcResult = document.querySelector('#imc-result');

    let weight = Number(inputWeight.value);
    let height = Number(inputHeight.value);

    let imc = calculateImc(weight, height);
    let fomarttedImc = imc.toFixed(2).replace('.', ',');
    
    imcResult.textContent = fomarttedImc

}

start();