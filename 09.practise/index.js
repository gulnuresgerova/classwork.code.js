
// // 1. arrayın içindəki müsbət ədədləri tapın
// let arr = [2, 4, -3, 43, 41, -3];
// let posotive = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     posotive.push(arr[i]);
//   }
// console.log(posotive);
// }

// // 2. üçbucağın tərəfləri verilib, düzbucaqlı üçbucaq olub olmamasını tapın
// function isRectangle(a, b, c) {
//     let result="";
//     if(a**2 +b**2 === c**2 ||
//         a**2 + c**2 === b**2 ||
//         b**2 + c**2 === a**2 ){
//             result = `${a} ,${c} , ${b}  duzbuqaxlidir`;

//         }
//         else{
//             result = `${a} ,${c} , ${b}  duzbuqli dol `;
//         }
// return result
// }

// console.log(isRectangle(3, 4, 5)); //yes
// console.log(isRectangle(3, 6, 5)); //no
// console.log(isRectangle(4, 5, 3)); //yes

// 3. arrayın içindəki bütün hərfləri böyük olan elementin indexini tapın
// const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];
// let result = webTechs.findIndex( item => item === item.toLocaleUpperCase());
// console.log( result) 
// 4. arrayın içindəki bütün hərfləri böyük olan elementləri başqa bir array şəklində return edin
// const webTechs2 = ["HTML", "CSS", "JS", "REACT", "Redux", "Node", "MongDB"];
// let results = webTechs2.filter( item => item === item.toLocaleUpperCase());
// console.log( results) 
// 5. Reverse the Case
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// function reverseCase(str) {

//     if( str=== str.toLocaleUpperCase() ){
//      return str.toLocaleLowerCase();
//     }
//     else if ( str=== str.toLocaleLowerCase()){
//         return str.toLocaleUpperCase();
//     }
  
// }

// console.log(
//     reverseCase("MANY THANKS")
// )
// console.log(
//     reverseCase("many thanks")
// )



const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male', salary: '3001' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'GDU', gender: 'male', salary: '200' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female', salary: '300' },
    { name: 'Hikmet', surname: 'Hesenov', age: '22', uni: 'UNEC', gender: 'male', salary: '320' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'GDU', gender: 'male', salary: '420' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female', salary: '3210' },
]


// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.

// let result = users.filter( (item) => item.uni==="UNEC" && item.surname[0].toLocaleLowerCase()==="r");
// console.log ( result)

// 2.2.Show users whose age is eqaul to 22 and name start 'a'.

//  let result = users.filter( (item) => item.age==="22" && item.name[0].toLocaleLowerCase()==="a");
//  console.log ( result)

// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
//  let updateUser = users.map( (element) =>
//     { if ( element.gender === "male"){
// return { ...element , name : `mr. ${element.name}`};
//     }
//     else {
//         return { ...element , name : `mrs. ${element.name}`};
//             }

// })
// console.log( updateUser)
// 2.4.Sort users by age (ascending)
// let result = users.sort ( (a,b) => a.age-b.age);
// console.log ( result)


let employees = [
    {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30,
    },
    {
      email: "asab@asab.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Redux",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 25,
      isLoggedIn: false,
      points: 50,
    },
    {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50,
    },
    {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"
    ],
      age: 20,
      isLoggedIn: true,
      points: 50,
    },
    {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    {
      email: "paul@paul.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
        "Express",
        "React",
        "Node",
        "React",
     
      ],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
  ];
  
  //   Find the employee who has many skills in the employees object.

let maxSkills = employees.reduce((prev, current) => {
    return prev.skills.length > current.skills.length ? prev : current;
  });
  console.log( maxSkills);

  // isLoggedIn true olanları array şəklində return edin

  let isLoggedInEmployees = employees.filter(employee => employee.isLoggedIn);
  console.log( isLoggedInEmployees);

  // age'ə görə sort edin
let result = users.sort ( (a,b) => a.age-b.age);
console.log ( result)

  // Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
numArr = [2 , 6 ,3 ,9 ,7]
  function checkRandomInArray(array){
     let randomNumber = Math.floor (Math.random() *10)
if(array.includes (randomNumber)){
return `${randomNumber} number includes in[${array}]`;
}
else {
    return `${randomNumber} number does not includes in[${array}]`;
}
 }
 

  console.log(checkRandomInArray(numArr));