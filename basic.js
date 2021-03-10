let car = {
    brand: "Ford",
    model: "Focus",
    yearBuilt: 2005,

    carMessage: function(){
        return `My ${this.brand} ${this.model} was built in ${this.yearBuilt}<br>`;

    }

}

console.table(car);

document.getElementById("message").innerHTML = car.carMessage();



let animals = {
    type: "Lion",
    country: "Tanzania",
    yearBirth: 2010,

    animalMessage: function(){
        return `My ${this.type} from  ${this.country} was born in ${this.yearBirth}<br>`;

    }

}

console.table(animals);

document.getElementById("message").innerHTML += animals.animalMessage();



let person = new Object();

person.firstName = "Peter";
person.lastName = "Jackson";
person.age = 25;

person.personMessage = function() {
    return `My name is ${this.firstName}${this.lastName} and I am ${this.age} years old`;
}

console.table(person);

document.getElementById("message").innerHTML += person.personMessage();

