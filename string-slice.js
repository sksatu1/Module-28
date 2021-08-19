// use of split 
const anthem = 'Amar Sonar Bangla Ami Tomai Valobasi';
const words = anthem.split(' ');
const WithoutA = anthem.split('a');
console.log(WithoutA);

// use of slice 
const smallSlice = anthem.slice(5, 7);
console.log(smallSlice);

// use of substr 
const anotherPart = anthem.substr(5, 7);
console.log(anotherPart);

// use of substring 
const anotherAnotherPart = anthem.substring(5, 7);
console.log(anotherAnotherPart);

// use of concat
const first = 'Amader';
const second = 'city';
// const total = first + second;
console.log(first.concat(second));

// use of join 
const friends = ['satu', 'mahfuz', 'sohel', 'robin'];
const joinAll_1 = friends.join('');
const joinAll_2 = friends.join(' ');
const joinAll_3 = friends.join(',');
console.log(joinAll_1);
console.log(joinAll_2);
console.log(joinAll_3);