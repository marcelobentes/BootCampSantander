//função autoinvocável

(
    function(){
        let name = "Marcelo Maia";
        return console.log (name);
    }
)();

//coleção arguments
function encontraMax(){
    let max = - Infinity;
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return console.log(`O maior o numero é ${max}.`);
}

encontraMax(1, 2 ,6, 8,74, 24, 15, 1006);

//Spread ...
function soma (num, num2, num3){
    return num+num2+num3;
}

const numeros = [1, 2, 3];
console.log(soma(...numeros));//usando o spread ...