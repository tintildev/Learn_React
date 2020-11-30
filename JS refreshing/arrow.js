//Old Way
function printMyName(name){
    console.log(name);
}

printMyName('Martin');

//New Way
const printMyName = (name) => {console.log(name)};

//or with just one argument
const printAnyName = name => {console.log(name)};

//multiple argument
const printAnyName = (name, age) => {console.log(name)};

//return Way
const multiplyOld = (number) =>{number * 2};
console.log(multiply(2));

//new
const multiply = number => number * 2;
console.log(multiply(2));