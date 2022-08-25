// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log('---ANSWER---')
console.log(typeof(a))
console.log(typeof(b))
console.log('a is a String while b is an Array, a is enclosed in single quote making it a string literal while b is enclosed in square brackets making it an array.')
//TODO


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
const a2 = a.map(element => element * 2)
console.log('---ANSWER 2---')
console.log(a2)
// TODO should output [2,4,6,8,10]


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
console.log('---ANSWER 3---')
console.log('Case 1')
console.log(colors.join(" "));
console.log('Case 2')
console.log(colors.join("+"));
console.log('Case 3')
console.log(colors.join());
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
console.log('---ANSWER 4---')
console.log(a.sort((a, b) => a - b));
//TODO should output: [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const distinct = a.filter((item, index, array) => array.indexOf(item) === index )
let mostFrq = 0;
console.log('---ANSWER 5---')
console.log(distinct.reduce((prev, curr) => {
    const prevElem = a.filter(data => data === prev)
    const currElem = a.filter(data => data === curr)
    mostFrq =  currElem.length > prevElem.length ? curr : prev
    return mostFrq 
}));
//TODO should output: 'a'