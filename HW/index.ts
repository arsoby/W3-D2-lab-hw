type userAndAdmin = User | Admin;
interface User {
  age: number;
  name: string;
  occupation: string;
}
let persons: userAndAdmin[] = [];
let user1: User = {
  name: "Salem",
  age: 55,
  occupation: "Developer",
};
let user2: User = {
  name: "Mohmmed",
  age: 20,
  occupation: "Student",
};
let user3: User = {
  name: "Naser",
  age: 35,
  occupation: "CEO",
};

interface Admin {
  age: number;
  name: string;
  specialty: string;
}
let admin1: Admin = {
  age: 43,
  name: "Yaser",
  specialty: "IT ",
};
let admin2: Admin = {
  age: 29,
  name: "Saad",
  specialty: "Data Analysis",
};
let admin3: Admin = {
  age: 65,
  name: "Jasem",
  specialty: "Admin Of DBMS",
};

persons.push(user1, admin1, user2, admin2, user3, admin3);


function print(arr: userAndAdmin[]) {
  persons.forEach((e) => {
    if ("occupation" in e) {
      console.log(`This Info Of User: 
          ${e.name}
          ${e.age}
          ${e.occupation}
          `);
    } else {
      console.log(`This Info Of Admin: 
     ${e.name}
     ${e.age}
     ${e.specialty}
     `);
    }
  });
}

print(persons);

function changeAge(newAge:number,obj:userAndAdmin) {
    obj.age=newAge;
    return
}
changeAge(25,user1)

