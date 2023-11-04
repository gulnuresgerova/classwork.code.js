//task1

// let numbers = [12, 45, 6, 78, 34, 99, 23];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

//task2
// let sum = 0;
// let numbers = [12, 45, 6, 78, 34, 99, 23];
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

//task3

// let elements = [ 1 , 2 , 3 , 4 , 5];
// elements[1]=3;
// elements[2]=2;
// console.log( elements)


//task4
let numbers = [ 12 , -5 , 6 , -3 , 34 , -1 ,23];
let posotive = [];
let sum =0;
for ( let i =0 ; i < numbers.length ; i++ )
{ if(numbers[i]>0){
    sum+= numbers[i];
    posotive.push(numbers[i]);
}
 
}
console.log(posotive);



//task5 
// let originalArray = [1 , 2 , 3 ,4];
//  let repeatedArray = [];
//  let n =3 ;

//  for ( let i =0 ;  i< originalArray.length; i++){
//     for(  let a =0 ; a<n ; a++){
// repeatedArray.push( originalArray[i]) 
//     }
//  }
//  console.log(  repeatedArray)


//task6
// let numbers= [12 , 45 , 6 , 78 , 34 , 99 , 23 ];
// let odd = numbers.filter( num => num % 2 ===0)
// let even = numbers.filter( num => num % 2 !== 0)
// console.log( odd)
// console.log( even)

//task7 
// let originalArray = [ 1 , 2 , 3 , 4 , 5];
// let reverseArray= originalArray.reverse();
// console.log(reverseArray)



//task8
// let arr = [3 , 8 , 2, 5 , 4, 10 , 7 , 6 ];
// for ( let i = 0 ; i <arr.length ; i++){
//     if ( arr[i] % 2 !==0){
//         console.log( `${arr[i]}`) 
//     }
// }

//task9
// let arr = [3 , 8 , 2, 5 , 4, 10 , 7 , 6 ];
// for ( let i = 0 ; i <arr.length ; i++){    
//     if ( i % 2 ===0 ){
//         console.log(arr[i]) ;
//     }
// }

//task10
// let arr = [3 , 8 , 2, 5 , 4, 10 , 7 , 6 ];
// let maxOdd = -Infinity;
//  for ( let i = 0 ; i <arr.length ; i++){    
//  if ( arr[i] % 2 ===0 && arr[i]>maxOdd ){
//     maxOdd=arr[i];
//     }
//  }
//  console.log( `${maxOdd}`) 

//task11
// let arr = [3 , 8 , 2, 5 , 4, 10 , 7 , 6 ];
// let num = 10;
//  let numArray = arr.includes(num);
//  if(numArray){
//     console.log(`${num} var`)
//  }
//  else{
//     console.log( `${num} yoxdur`)
//  }

