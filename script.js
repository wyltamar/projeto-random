const button = document.querySelector('button');

function drawRandomNumber(){
    const min = Math.ceil(document.querySelector('#input1').value);
    const max = Math.floor(document.querySelector('#input2').value);

    const randomNumber = Math.random() * (max - min + 1) + min;
    console.log(randomNumber);

    document.querySelector('h3').textContent = `Número sorteado: ${Math.floor(randomNumber)}`;


}

button.addEventListener('click', drawRandomNumber);

