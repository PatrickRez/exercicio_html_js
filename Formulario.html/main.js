document.getElementById('calc-sum').addEventListener('click', function() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    
    
    num1 = Number(num1.value);
    num2 = Number(num2.value);
    
    const formiValid =(num1, num2)
        if (num1 > num2){
            alert ("o numero maior é: " + num1);
        }else if (num1 < num2){
            alert ("o numero maior é: " + num2);
        }if (num1 == num2){
        alert ("Ambos os numero sao iguais: " + num1);
        }
});


