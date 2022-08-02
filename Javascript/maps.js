const myMap = new Map();

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

console.log(getAdmins(myMap));