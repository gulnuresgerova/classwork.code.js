//task1
// const text = "Java is awesome . Java is fun"
// console.log(text.replaceAll( "Java" , "Javascript"));
//task2

// function mixUp(a, b) {
//     console.log(b.slice(0 , 2) + a.slice(2) + " " +a.slice(0 , 2) +b.slice(2) )
// }
// mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.

// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'
// mixUp("val", "pur");
// function mixUp(a, b) {
//     console.log(b.slice(0 , 2) + a.slice(2) + " " +a.slice(0 , 2) +b.slice(2) )
// }
// mixUp("donce", "gevlet")



//task3
function verbing(word) {
if ( word.length <3 ) {
return word
}
else  if ( word.slice(-3)=== "ing") {
    return word + "ly"
} else {
    return word + "ing"
}
}


// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.

console.log(verbing('go')); // go
console.log(verbing('swim')); //swiming
console.log(verbing('swiming')); //swimingly


//task4
// Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(string) {
  if(string.split("").reverse().join("")) {
    console.log("polindromdadi senol");
  } else {
    console.log("polindromdadi dol");
  }
 }
console.log(isPalindrome("hello"));
// isPalindrome("hello");



