//ES6
class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        //must call super constructor
        super();
        this.name = 'Max';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();


//ES7
class Human {
    constructor() {
        gender = 'male';
    }

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    name = 'Max';
    

    printMyName= () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();