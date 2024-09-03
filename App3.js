 const num1 = 10
 const num2 = 15

// // arithmetic operation
 const add = num1 + num2
 console.log(add);

 const subtract = num1 - num2
 console.log(subtract);

 const multoip = num1 * num2
 console.log(multoip);

 const divide = num1 / num2
 console.log(divide);

// string to number convert
const num1String = "6"
const num1Number = Number(num1String)
console.log(num1String);


console.log(num1Number);



// numbr to stri convert
const num1Num = 6
const num1Str = num1Num.toString()
console.log(num1Num);

console.log(num1String);

// add string
const str1 = "avinash"
const str2 = " kumar"
const newstring = str1 + str2
console.log(newstring);


// remove last char from strin
const letter = "mordhawaj"

// a
// m  o  r   d  h   a  w  a  j
// 0  1  2   3  4   5  6  7  8 index   forward
//-8 -7 -6  -5  -4   -3 -2 -1 backwq\ard index


const whT = letter.slice(0,-5 )
console.log(whT);


const stringMain = "1+2+3+4+20+10+8+2"

const splittedStr = stringMain.split("+")

//console.log("splittedstr -? ", splittedStr);


const splittedNum = splittedStr.map(item => Number(item))
//console.log("splittedNum -? ", splittedNum);

let result = 0;

splittedNum.forEach(item => result = result + item )

//console.log(result);
