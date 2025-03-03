"use strict";
var myname = "Yeachen Abir";
var numberOfWheel = 4;
var isStudent = true;
var personOne = {
    name: "Abir",
    age: 24,
    isStudent: true,
    address: {
        steet: "123 Main",
        city: "Anytown",
        country: "USA"
    }
};
var personTwo = {
    name: "Yeachen",
    age: 24,
    isStudent: false,
};
// display info function
var displayInformation = function (person) {
    var _a;
    console.log("".concat(person.name, " live in the ").concat((_a = person.address) === null || _a === void 0 ? void 0 : _a.steet));
};
displayInformation(personTwo);
console.log(myname, numberOfWheel, isStudent);
