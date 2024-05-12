"use strict";
// stages of life : write an if -else chain that determines a person's stage of life.
//set a value for the veriable age, and then:
let age = 25;
// if the person is less than two years old, print a meesage that the person is baby
//if the person least 2 years old but less than 4 , print a message that the person is toddler.
//if the person is at least 4 years ols but less than 13 print a meesage that the person is kid
//if the person at least 13 years old but less  than  20 print a message that the person is a teenager,
//if the person is at least 20 years old but less  than 65 print a message that the person is an adult
//if the person is 65 or older print a message that the person is an older
if (age < 2) {
    console.log("person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("person is a adult");
}
else {
    console.log("person is an elder");
}
