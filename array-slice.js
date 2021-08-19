const numbers = [1, 2, 3, 4, 5, 6, 9, 10, 12, 13, 14];
const part1 = numbers.slice(4, 8);
console.log('array of the sliced part = ', part1);

// slice korle origibnal array change hoi na 
console.log('array of the total numbers = ', numbers);

// use of splice 
// splice korle main or total array theke j element remove kora hoi segula r main array te thake na 
/* const splicedNumber = numbers.splice(1, 2);
console.log('removed or spliced digits are = ', splicedNumber);
console.log('total array after spliced = ', numbers); */

// delete and push new item by using slice 
const spliced2 = numbers.splice(2, 3, 333, 444, 777);
console.log(spliced2);
console.log(numbers);