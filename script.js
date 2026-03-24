//[X] Capturar o clique do botão
//[X] Pegar os valores dos inputs
//[] Fazer a conta
//[] Exibir o resultado

const button = document.querySelector('button');

function drawRandomNumber(){
    const min = Math.ceil(document.querySelector('#input1').value);
    const max = Math.floor(document.querySelector('#input2').value);

    const randomNumber = Math.random() * (max - min + 1) + min;
    console.log(randomNumber);

    document.querySelector('h3').textContent = `O número sorteado é: ${Math.floor(randomNumber)}`;

    // alert(`O número sorteado entre ${min} e ${max} é: ${Math.floor(randomNumber)}`);

}

button.addEventListener('click', drawRandomNumber);

