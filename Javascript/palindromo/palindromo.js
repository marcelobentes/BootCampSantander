//Solução 1

function verificaPalindromo(string){
    if(!string) return console.log("string inexistente.");

    if (string.split("").reverse().join("") === string){
        console.log(`A palavra ${string} é um palindromo.`);
    }
}

verificaPalindromo("");

//solução 2

function verificaPalindromo2(string){
    if(!string) return console.log("string inexistente.");

    for(let i = 0; i < string.length /2; i++){
        if(string [i] !== string[string.length -1 -i]){
            return console.log ("Não é um palindromo.")
        }
    }
    return console.log(`A palavra ${string} é um palindromo.`);
}

verificaPalindromo2("abba");