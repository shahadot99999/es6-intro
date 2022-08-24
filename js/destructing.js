const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '017176588899',
    price: 4000
}

// you can declare object. first boject.property. this property store in variable ex. const phone 

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone } = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const { age, name } = { name: 'Almas', age: 56, profession: 'makeup artist' }
console.log(age);

// you can declare. firstly object name last and property are store in variable and call ..It is called destructing obect. 
const { address } = fish;
console.log(address);

// array destructuring different 
const [first, another] = [44, 99, 88, 456];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames() {
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getNames();
console.log(chacha, baba);