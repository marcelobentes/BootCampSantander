function compararNumeros (num1, num2){
    var soma = num1 + num2;
    if (num1 === num2){
        console.log("Os numeros ",num1,"e",num2," são iguais");
             
    }
    else if(num1 != num2){
        console.log("Os numeros ",num1,"e",num2," não são iguais");
    }
    else if (soma > 10 && soma < 20 ){
        console.log("Sua soma é ",soma, " que é maior que 10 e menor que 20");
    }
    else console.log("Sua soma é ",soma," que é menor que 10 e menor que 20");

}

compararNumeros(10,10);