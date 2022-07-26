'use strict';

const userNumber = prompt('введите простое число');

    let flag = true;
    for(let i = 2; i < userNumber; i += 1) {
        if (userNumber % i === 0) {
            flag = false;
            break;
        } 
    }

console.log(flag)


 
     

