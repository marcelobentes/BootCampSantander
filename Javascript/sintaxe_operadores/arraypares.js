function substituipares (array){
    if (!array) return -1;
    if (!array.length) return -1;
    
    for (let i = 0; i < array.length; i++){
        if (array[i] === 0){
            console.log("Voce ja é zero !");
        }else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0 ...`);
            array[i] = 0;
        }
    }
    return console.log(array);
}

let array = [1, 2, 3, 4, 6, 7, 23, 26, 27, 28, 32, 33];
substituipares(array);