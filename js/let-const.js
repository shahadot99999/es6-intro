//breakup with var
// no more use of var
// let : let it to reassign
// const do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'jan paki ';
// bird = 'moyna paki ';
//console.log(bird);
const message = bird + 'potas potas';
console.log(message);



//array conditiion
const numbers = [12, 89, 65, 45];
//reassign is not allowed
//numbers = [77, 66, 55, 22];
// it is not possible for constvariable.
// console.log(numbers);

//only possible for numbers push 
numbers.push(123);
numbers[1] = 88;
console.log(numbers);


//object condition
const student = {
    name: 'mofiz',
    address: 'Rogpur'
}
// you can not acess object  Mofazzol 
//student = {name: 'Mofazzol'}
// it only possible ob.name 
student.name = 'Mofazzol';
console.log(student);

// let and const are block scope . var not block scope. var is hoisting.
// for loop you can not console log use . It always time derclare.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    sum = sum + number;
}
console.log(number);