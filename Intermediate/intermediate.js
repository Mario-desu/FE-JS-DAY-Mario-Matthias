// Car class


class Car {
    brand;
    model;
    yearBuilt;

    constructor(brand, model, yearBuilt){
        this.brand = brand;
        this.model = model;
        this.yearBuilt = yearBuilt;

    }
    carMessage(){
        return `My ${this.brand} ${this.model} was built in ${this.yearBuilt}<br>`;
    }
}

class Motorbike extends Car{
    horsepower;
    weight;

    constructor(brand, model, yearBuilt, hp, wt){
        super(brand,model,yearBuilt);
        this.horsepower = hp;
        this.weight = wt;
    }
    motorbikeMessage(){
        return super.carMessage() + " with" + " " + this.horsepower + "hp and a weight of "+ this.weight +" " + "kg.";
    }
    
}

let motorbike1 = new Motorbike("Suzuki","Hayabusa",2010,100,150)

console.log(motorbike1.motorbikeMessage());

document.getElementsByClassName("message")[0].innerHTML = motorbike1.motorbikeMessage();


// Animal class


class Animal {
    species;
    breed;
    originCountry;

    constructor(species, breed, originCountry){
        this.species = species;
        this.breed = breed;
        this.originCountry = originCountry;

    }
    animalMessage(){
        return `A ${this.breed} is a kind of ${this.species} and his habitat is ${this.originCountry}<br>`;
    }
}

class Fish extends Animal{
    typeWater;
    weight;

    constructor(species, breed, originCountry, typeWater, weight){
        super(species, breed, originCountry);
        this.typeWater = typeWater;
        this.weight = weight;
    }
    fishMessage(){
        return super.animalMessage() + "he prefers " + this.typewater + "and he has  a weight of "+ this.weight +" " + "kg.";
    }
    
}

let fish1 = new Fish("shark","Greenland shark","Artic Ocean","salt water",1000)

console.log(fish1.fishMessage());

document.getElementsByClassName("message")[1].innerHTML = fish1.fishMessage();

// Person class


class Person {
    firstName;
    lastName;
    age;

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    personMessage(){
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old<br>`;
    }
}

class Profession extends Person{
    jobPosition;
    company;

    constructor(firstName, lastName, age, jobPosition, company){
        super(firstName, lastName, age);
        this.jobPosition = jobPosition;
        this.company = company;
    }
    professionMessage(){
        return super.personMessage() + `and I work as a ${this.jobPosition} at ${this.company}.`
    }

}

let profession1 = new Profession("Michael","Smith",69,"web developer","Google");

console.log(profession1.professionMessage());

document.getElementsByClassName("message")[2].innerHTML = profession1.professionMessage();

