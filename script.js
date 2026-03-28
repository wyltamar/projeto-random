const button = document.querySelector('button');

function drawRandomNumber(){
    const min = Math.ceil(document.querySelector('#input1').value);
    const max = Math.floor(document.querySelector('#input2').value);

    const randomNumber = Math.random() * (max - min + 1) + min;

    if(max > min){
        document.querySelector('h3').textContent = `Número sorteado: ${Math.floor(randomNumber)}`;
    }  
    else{
        document.querySelector('h3').textContent = 'O número máximo deve ser maior que o mínimo.';
    }


    


}

button.addEventListener('click', drawRandomNumber);

