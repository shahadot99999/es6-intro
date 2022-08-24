// es6 before function can use one parameter number call 

/* function add(first, second){
    console.log(first, second);
    // second = second || 0;
    // if(second === undefined){
    //     second = 0;
    // }
    const total = first + second;
    return total;
    const result = add(10);
console.log(result);
} */


//after es6 it see easily function call 
function add(first, second = 0) {
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);

//you can also object declare  es6 apply done
function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Gelam');
console.log(name);