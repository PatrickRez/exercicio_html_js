const form = document.getElementById ('formValid');// formValid foi retirado do html para que o main.js funcione 

function validForm(num1){
    const numeroComoArray = num1.split('');
    return numeroComoArray.length >= Number;  
}
function validForm1(num2){
    const numeroComoArray = num2.split('');
    return numeroComoArray.length >= Number;
}

form.addEventListener('calc-sum', function(e){
    e.preventDefault();

    const input1number = document.getElementById ('num1');
    formeValio = validForm (input1number.value)
    if (validForm > validForm1){
        alert ("q32");
    } else if (validForm < validForm1) {
        alert ("voae2");}
    if (validForm = validForm1){
        alert ("soanv");
    }
})

/*/ Fiz dois arquivos JS, o main.js que deu funcionou com sucesso
e o Document.js que fiz segundo as aulas não sei o que nao deu certo/*/
