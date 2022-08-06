const myMap = new Map();
const array = [1, 2, 3, 4, 5, 6, 7 ,8]

myMap.set('Marcelo', 'Admin');
myMap.set('Ricardo0', 'Membro');
myMap.set('Thati','Mem,bro');
myMap.set('Samuel', 'Admin');
myMap.set('Mabel', 'Admin');

function getAdmins (map){
    let admins = [];
    for ([key, value] of myMap) {
        if(value === 'Admin'){
            admins.push(key);
        }
       
    }
    return admins;

}

function filter (array){ 
    let pares = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            pares.push(array[i]);
        }

    }

    return pares;

}

//usando filter
function filterPares (array){ 
    return array.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}


const novoarray = array.map((item) => item *2); //usando o map

console.log(getAdmins(myMap));

console.log(array.map((item) => item *2));
console.log(novoarray);
console.log(`primeiro array ${array}`)

console.log(filter(array));
console.log(filterPares(array)); //usando filter