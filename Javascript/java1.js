console.log("Vamos la !!!");

function par(array){
    let numeros = [];
    for (let i = 0; i < array.length; i++ ){
        if(array[i] % 2 === 0){
            numeros.push(array[i]);
        }
    }
    console.log ('Os numeros pares: ',numeros);
}

let array = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10];

par(array);

const myMap = new Map();
myMap.set('banana', 'fruta');
console.log(myMap.get('banana'));