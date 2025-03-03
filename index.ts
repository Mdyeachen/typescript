"use strict";

let myname: string = "Yeachen Abir";
const numberOfWheel: number = 4;
const isStudent: boolean = true;

// define type
type Address = {
    steet : string
    city : string
    country : string
}

type Person = {
    name : string
    age : number
    isStudent : boolean
    address?: Address
}

let personOne: Person = {
    name : "Abir",
    age : 24,
    isStudent : true,
    address : {
        steet : "123 Main",
        city : "Anytown",
        country : "USA"
    }
}

const personTwo: Person = {
    name : "Yeachen",
    age : 24,
    isStudent : false,
}


// display info function
const displayInformation = (person) => {
    console.log(`${person.name} live in the ${person.address?.steet}`)
}

displayInformation(personTwo);
console.log(myname, numberOfWheel, isStudent);