//Arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
const xNumbers = [numbers, 4];


console.log(newNumbers);
// [1, 2, 3, 4]
console.log(newNumbers);
// [[1, 2, 3], 4]


//Object
const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 2
};

console.log(newPerson);
// [object Object] { age 28, name: "Max"}

//Function
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));
//[1]