// 1 .
const arr = ["hello", "hey", "hello world"]
arr[2]= "world hello"
console.log(arr);
//yes , you can reassign the values but  cannot re declare the array itself


//2
console.log(arr.length);


//3 
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));     //   -1
console.log(myArr1.indexOf(3));     //   1

//4.
let myArr = [1,3,5,6,8,9,15] ;
myArr[3] = 4 ;
console.log(myArr);

//5.
 const myArr2 = [];
 myArr2[10] = 'test' 
 console.log(myArr2);  //undefined  till last one is test
 console.log(myArr2[2])// undefined

 //6
  const myArr3 = [3,6,8,9,3,55,553,434];
 myArr3.sort(); // 3 3 6 8 9 55 434 553
 myArr3.length = 0;  
 console.log(myArr3[0]) //  undefined