class Car {
    brand;
    model;
    yearBuilt;

    constructor(br, md, yb){
        this.brand = br;
        this.model = md;
        this.yearBuilt = yb;

    }
    carMessage(){
        return `My ${this.brand} ${this.model} was built in ${this.yearBuilt}.<br>`;
    }
}

let car1 = new Car("Ford", "Focus", 2001);
let car2 = new Car("BMW", "i3", 2013);
let car3 = new Car("Mercedes", "E-class", 2019);

document.getElementsByClassName("message")[0].innerHTML = car1.carMessage();
document.getElementsByClassName("message")[0].innerHTML += car2.carMessage();
document.getElementsByClassName("message")[0].innerHTML += car3.carMessage();

class Animal {
    type;
    country;
    yearBirth;

    constructor(type, country, yb1){
        this.type = type;
        this.country = country;
        this.yearBirth = yb1; //just an example that you can change the parameter names, but only this.yearBirth can be called in a function
    }

    animalMessage(){
        return `My ${this.type} from ${this.country} was born in ${this.yearBirth}.<br>`;
    }
}
let animal1 = new Animal("Lion", "Tanzania", 2010);
console.log(animal1.animalMessage());
let animal2 = new Animal("Giraffe", "Kenya", 2000);
console.log(animal1.animalMessage());
let animal3 = new Animal("Cat", "Austria", 2017);
console.log(animal1.animalMessage());

document.getElementsByClassName("message")[1].innerHTML += animal1.animalMessage();
document.getElementsByClassName("message")[1].innerHTML += animal2.animalMessage();
document.getElementsByClassName("message")[1].innerHTML += animal3.animalMessage();

class Person {
    fName;
    lName;
    age;

    constructor(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    personMessage(){
        return `The person's name is ${this.fName} ${this.lName} and they are ${this.age} years old. <br>`;
    }
}
let person1 = new Person("Peter", "Jackson", 235);
let person2 = new Person("Matthias", "Mauritz", 24);
let person3 = new Person("Mario", "Hartleb", 19);
document.getElementsByClassName("message")[2].innerHTML += person1.personMessage();
document.getElementsByClassName("message")[2].innerHTML += person2.personMessage();
document.getElementsByClassName("message")[2].innerHTML += person3.personMessage();