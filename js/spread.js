// find maximum number
const max = Math.max(12, 85, 999, 78);
// console.log(max);
const numbers = [12, 85, 999, 78];

//... converting array to number then highest number show
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);


//it can acess array number input . you can easy way inside number array you put 55 and another array you can put 7777 number
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];

//you can copy another array ...array name. it show new array number beside previous copy number. 
const numbers4 = [444, 78, ...numbers, 111, 33]

