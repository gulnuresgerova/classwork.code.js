//task1
function fullName(lastNAme = "apple", firstNAme = " lemon") {
  return `i'm ${lastNAme} ${firstNAme}`;
}
console.log(fullName("Leman", "Sema"));

//task2
function sum(num1 = 0, num2 = 0) {
  let sum = num1 + num2;
  return sum;
}
function multiply(num1 = 0, num2 = 0) {
  let multiply = num1 * num2;
  return multiply;
}
function subtruct(num1 = 0, num2 = 0) {
  let subtruct = num1 - num2;
  return subtruct;
}
function divide(num1 = 0, num2 = 0) {
  let divide = num1 / num2;
  return divide;
}

console.log(sum(2, 3)); //5
console.log(multiply(2, 3)); //6
console.log(subtruct(2, 3)); //-1
console.log(divide(2, 3)); //0.666666

//task3
function calculation(num1 = 0, num2 = 0, operator) {
  if (operator === "+") {
    sum = num1 + num2;
    return sum;
  } else if (operator === "*") {
    multiply = num1 * num2;
    return multiply;
  } else if (operator === "-") {
    let subtruct = num1 - num2;
    return subtruct;
  } else if (operator === "/") {
    let divide = num1 / num2;
    return divide;
  } else {
    console.log(`duz dol`);
  }
}
console.log(calculation(2, 5, "+")); //7
console.log(calculation(2, 5, "*")); //10
console.log(calculation(2, 5, "/")); //0.4
console.log(calculation(2, 5, "-")); //-3

//task4
let employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];
function filterEmployees(arr) {
  let empity = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].salary > 60000) {
      empity.push(arr[i]);
    }
  }
  return empity;
}
console.log(filterEmployees(employees));

//task5
function reverseString(string) {
  let str = "";
  for (i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  return str;
}
console.log(reverseString(`hello`));

//task6
let str =
  " salam meleykum. ey menim balalarim, ho ho ho men sizin saxda babanizam, size hediyyeler getirmisem coxlu. deyin gorum - kimin aiesi varlidi ho ho ho ho";
function letter(array) {
  let letters = 0;
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] != "" &&
      array[i] != "," &&
      array[i] != "." &&
      array[i] != "-"
    ) {
      letters = letters + 1;
    }
  }
  return letters;
}
console.log(letter(str));

//task7
function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
let longestWord = findLongestWord(str);
console.log(longestWord);
