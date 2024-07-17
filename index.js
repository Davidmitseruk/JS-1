// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const fruits = ['apple', 'kiwio', 'mango'];
// console.log(fruits);

// const arr =  ['cat', 'dog', 'bird']; 
// arr[10]= 'fish';
// console.log(arr);

// console.log(arr.length);

// const lastIndex= fruits.length - 1;
// console.log(lastIndex);



// const string = 'hello, my friends!';
// console.log(string.split(' '));

// const name = ['Alex', 'David', 'Nika', 'Bob', 'Yahna', 'Arthur'];
// console.log(name.join(','))

// const names = ['Alex', 'David', 'Nika', 'Bob', 'Yahna', 'Arthur'];
// console.log(names.indexOf('Bebee'));

// const navne = ['Alex', 'David', 'Nika', 'Bob', 'Yahna', 'Arthur'];
// console.log(navne.includes('David'));

// const fruit = ['apple', 'kiwi', 'mango'];
// const frugt = 'mango';

// if (fruit.includes(frugt)){

//     console.log('yes')

// } else (console.log('no'));

// const nummer = [1, 2];
// nummer.push(5);
// console.log(nummer);

// nummer.push(8);
// console.log(nummer)

// nummer.push('one');
// console.log(nummer)

// console.log(nummer.pop());

// const navn = ['Alex', 'David', 'Nika', 'Bob', 'Yahna', 'Arthur'];
// console.log(navn.shift())

// navn.unshift('Bogdan');
// console.log(navn);

// const nammes = ['bob', 'Anna', 'Alex', 'Nick', 'Nika'];
// const newnammes = names.splice(0, 3);
// console.log(names)




// const add = (...arg) => {
//    console.log(arg)
// }
// add(1, 2, 3, 4, 5); 

// const num = [1, 2, 3, 4, 5, 6];
// const filterNum = [];

// for (let i = 0; i < num.length; i += 1){
// //    if (num[i] > 3 ){
//       filterNum.push(num[i]);
//    }
// }
// console.log(filterNum);  // [4, 5, 6]

// declerative

// const numbers = [1, 2, 3, 4, 5, 6];
// const filterNumbers = numbers.filter(value =>{
//    return value > 3;
// });
// console.log(filterNumbers);



// // const a = (array, value)=> {
 //   for (let i = 0; i < array.length; i += 1){
//      array[i]= array[i] * value;
// 
   // // }
// }
// const number = [1, 2, 3, 4, 5, 6];
// a(number, 2);
// console.log(number);


// const pure = (array, value) => {
//    const result = [];
//    for( let i =0; i < array.length; i += 1){
//       result.push(array[i] * value);
//    }
//    return result
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// const duoblenumbers = pure(numbers, 2);
// console.log(numbers);
// console.log(duoblenumbers);

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach(num => console.log(num));
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));


// const numbers = [1, 2, 3, 4, 5, 6];
// const duoble = numbers.map(num => num * 2)
// console.log(duoble);

const users = [
   {name: 'Bob', age: 17},
   {name: 'Nick', age: 27},
   {name: 'Alex', age: 47},
]
const names = users.map(user => user.name);
console.log(names) // ['Bob', 'Nick', 'Alex']