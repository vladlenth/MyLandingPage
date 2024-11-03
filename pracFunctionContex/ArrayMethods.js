// Declaring arrays in two ways.
const cars = ["Volvo", "BMW", "Mercedes"];
const fruits = new Array('Banana', 'Orange');


//          1. forEach()
//array.forEach(callback[, thisObject]); 

const array1 = ['a','b','c'];
array1.forEach(element => console.log(element));

//          2. map()
//array.map(callback[, thisObject]); 

let arr2 = [3,4,5,6];
let modifiedArr = arr2.map(function(element){
    return element *3;
});
console.log(modifiedArr); 

//          3.concat
//array.concat(value1, value2, ..., valueN); 

const array31 = ['a','b','c'];
const array32 = ['d','e','f'];
const arrya33 = array31.concat(array32);
console.log(arrya33);

//          4.push
//array.push(element1, ..., elementN); 

const arrbuz = new Array('arbuz');
arrbuz.push('ewe arbuz');
console.log(arrbuz);

//          5.pop - del last elem; array.prototype.shift() - del first elem
//array.pop(); 
//array.prototype.shift(); 

arrbuz.pop();
console.log(arrbuz);

//          6.splice()
//array.splice(index, howMany, [element1][, ..., elementN]); 

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits6);

//          7. slice
//array.slice( begin [, end]); 

const animals = ['bee-run','G.O.A.T','lion','bee','crocodile','elephant','ant'];
console.log(animals.slice(2));
console.log(animals.slice(2,4));

//          8.shift()
//array.shift() 

const array8 = [1,2,3];
const firstElement = array8.shift();
console.log(array8);
console.log(firstElement);

//          9.unshift - first; array.prototype.push() - last
//array.unshift( element1, ..., elementN ); 

const array9 = [1,2,3];
console.log(array9.unshift(4,5));
console.log(array9);

//          10.join()
//array.join(separator); 

const elements = ['air','water','fire','earth'];
console.log(elements.join(', '));
console.log(elements.join(' '));
console.log(elements.join('-'));

/*          11.every() - tests whether all elements in the array
pass the test implemented by the provided function.
It returns a Boolean value.
*/
//array.every(callback[, thisObject]); 

const isBelowValue = (currentValue) => currentValue < 40;
const array11 = [1, 30, 39, 29, 10, 13]; //array44 = true; 40 >= false
console.log(array11.every(isBelowValue));

//          12. filter()
//array.filter(callback[, thisObject]);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//          13 indexOf()
//array.indexOf(searchElement[, fromIndex]);

const beasts = ['ant','bison','camel','duck','bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2))
console.log(beasts.indexOf('giraffe'));

//          14.reduce()
//array.reduce(callback[, initialValue]);

const array14 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array14.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumWithInitial);

//          15.reverse()
//array.reverse();

const array15 = ['one', 'two', 'three'];
console.log('array15:', array15);

const reversed = array15.reverse();
console.log('reversed:', reversed);
console.log('array15:', array15);

//          16.sort()
//array.sort( compareFunction ); --UTF-16

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array16 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array16);

//          17.toString()
//array.toString();

function Dog(name) {
    this.name = name;
  }  

  const dog1 = new Dog('Gabby'); 

  Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
  };  
  console.log(dog1.toString());

//          18.at()
//array.at(index)

const array18 = [5, 12, 8, 130, 44];
let index = 2;
console.log(`Using an index of ${index} the item returned is ${array18.at(index)}`);

index = -2;
console.log(`Using an index of ${index} item returned is ${array18.at(index)}`);

//          19.find()
//array.find(function(currentValue, index, arr),thisValue)

const array19 = [5, 12, 8, 130, 44];
const found = array19.find(element => element > 10);
console.log(found);

//          20.some()
//array.some(callback[, thisObject]);

const array20 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array20.some(even));