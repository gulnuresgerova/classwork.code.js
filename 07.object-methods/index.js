// ---------------------------------------------------------- TASK 1 ----------------------------------------------------------

import { allText } from "../08.Dom.BOm";

const person = {
  firstName: "Michael",
  lastName: "Pam",
  age: 26,
  city: "Poland",
};

// 1. employees object-nin sadəcə key-lərini console-a çıxardın.
console.log(Object.keys(person));
// 2. employees object-nin sadəcə value-lərini console-a çıxardın.
console.log(Object.values(person));
// 3. Aşağıdakı kimi console-a çıxardın.
//     [firstName: 'Michael']
//     [lastName: 'Pam']
//     [age:26]
//     [city: 'Poland']
Object.keys(person).forEach((key) => {
  console.log([`${key} : ${person[key]}`]);
});
// 4. object-in age propertysini silin.
delete person.age;
// 5. Ən uzun string value-nu console-a çıxardın.
let newArray = Object.values(person);
console.log(newArray);
let longName = newArray[0];
newArray.forEach((elem) => {
  if (elem.length > longName.length) {
    longName = elem;
  }
});

console.log(longName);
allText.forEach((element) => {
  console.log(element.innerText);
});

// ---------------------------------------------------------- TASK 2 ----------------------------------------------------------

// var library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     readingStatus: true,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     readingStatus: true,
//   },
//   {
//     title: "Suzanne Collins",
//     author: "Mockingjay: The Final Book",
//     readingStatus: false,
//   },
// ];

// "library" adlı array yaradın. İçərisində title, author və readingStatus adlı key-ləri olan objectlər yaradın.
// Əgər readingStatus true olarsa console-a "Already read 'title' by author' Əgər false
// olarsa "You still need to read 'title' by author' yazsın

// Nəticə ====>>
// Already read 'The Road Ahead' by Bill Gates.
// Already read 'Walter Isaacson' by Steve Jobs.
// You still need to read 'Suzanne Collins' by Mockingjay: The Final Book.

// ---------------------------------------------------------- TASK 3 ----------------------------------------------------------

// let employee = {
//     name: '',
//     jobTitle: '',
//     salary: ,
//     promote: function(p1, p2) {

//     }
//   };

// "employee" adlı object yaradın. Object-in name, jobTitle, salary və promote adında key-ləri var.
// promote bir anonim function-dır, 2 parametr qəbul edir. jobTitle-in value-ı ilk dəfə "Software Developer" salary isə 75000.
// Ən sonda employee.promote-a bir yeni vəzifə və yeni maaş göndərin.

// employee.promote('Senior Software Engineer', 90000);

// // Nəticə: Promotion: Alice is now Senior Software Engineer with a salary of $90000

// ---------------------------------------------------------- TASK 4 ----------------------------------------------------------

// const name = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// Object methodu ilə character objecti təyin edib aşağıdakı kimi console-a çıxardın.

// console.log(character); ====>> // {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

// ---------------------------------------------------------- TASK 5 ----------------------------------------------------------

// ladder adlı object yaradın. step adında dəyəri 0-olan key yazın. Bundan əlava object-in 2 ayrı function-ı olsun. up və down.
// up function step-in dəyərin +1 artırsın. down isə -1 azaltsın.
