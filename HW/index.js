"use strict";
let persons = [];
let user1 = {
    name: "Salem",
    age: 55,
    occupation: "Developer",
};
let user2 = {
    name: "Mohmmed",
    age: 20,
    occupation: "Student",
};
let user3 = {
    name: "Naser",
    age: 35,
    occupation: "CEO",
};
let admin1 = {
    age: 43,
    name: "Yaser",
    specialty: "IT ",
};
let admin2 = {
    age: 29,
    name: "Saad",
    specialty: "Data Analysis",
};
let admin3 = {
    age: 65,
    name: "Jasem",
    specialty: "Admin Of DBMS",
};
persons.push(user1, admin1, user2, admin2, user3, admin3);
function print(arr) {
    persons.forEach((e) => {
        if ("occupation" in e) {
            console.log(`This Info Of User: 
          ${e.name}
          ${e.age}
          ${e.occupation}
          `);
        }
        else {
            console.log(`This Info Of Admin: 
     ${e.name}
     ${e.age}
     ${e.specialty}
     `);
        }
    });
}
print(persons);
function changeAge(newAge, obj) {
    obj.age = newAge;
    return;
}
changeAge(25, user1);
