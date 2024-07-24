
// const c = "5";
//console.log(Number(c));
// console.log(typeof Number(c));

// const b = 'hello';
// console.log(Number(b));
// console.log(typeof Number(b));

// console.log(Number.parseInt('20px'));
// console.log(Number.parseInt('puv'))
// console.log(Number.parseFloat('12.57'))
// console.log(Number.parseFloat('20px'))



// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// console.log((0.1 *10 + 0.2*10) / 10);

// console.log(Math.floor(3.8));
// console.log(Math.ceil(1.3));
// console.log(Math.round(1.4));
// console.log(Math.round(99.6));
// console.log(Math.max(15, 100, 25, 48, 152, 14));
// console.log(Math.min(25, 3.5, 69, 26));
// console.log(Math.pow(2, 4));
// console.log(Math.random() * (10 - 1) + 1);

// const a = ('welcome to bahamas!');
// console.log(a.startsWith('w'));
// console.log(a.endsWith('s'));

// console.log(a.padEnd(22, "!" ));
// console.log(a.padStart(20, "!" ));

// const s = '   hello    ';
// console.log(s.trim());

// const name = 'David';
// const age = 13;

// const message = `my name is ${name},and i am ${age} years old`
// console.log(message)
// const message = 'My name is' + ' ' + name + ' ' +'i am' + ' ' + age + 'years old.';
// console.log(message);

// let value = 'hello';
// let boolValue = Boolean(value);
// console.log(boolValue);


// const number = 15;
// const result = number > 10 && number < 20;
// console.log(result);

// const number = 15;
// const result = number > 16 && number < 20;

// const number = 15;
// const result = number < 20 || number > 30;
// console.log(result);

// console.log(!true);
// console.log(!0);


// let cost = 0;
// const sub = 'normal';
// if(sub === 'pro') {
//     cost = 100
// }
// console.log(cost)

// let cost;
// const sub = 'pro';
// if (sub === 'pro'){
 //    cost = 100;
    
// }
// else {
 //    cost = 0;
// }

// let cost;
// const sub = 'premium';

// if (sub === 'normal'){
//    cost = 0
// }
// else if(sub === 'pro'){
//     cost = 100
// }
// else if (sub === 'premium'){
 //    cost = 200
// }
// else {
//    console.log('fail')
// }
// console.log(cost)

// let cost;
// const sub = 'premium';
// switch (sub){
 //    case 'free' :
 //        cost - 0;
 //        break;
 //    case 'pro':
 //        cost = 50;
 //        break;
  //   case 'premium': 
 //       cost = 200;
  //       break   
 //    default :
 //        console.log('answer not right');
// }
// console.log(cost)
// 
// if (a === 0) {
//     p.textContent = 0;
//     }
//     if (a === 1) {
//     p.textContent = 1;
 //    }
    
    
//     if (a === 2 || a === 3) {
 //    p.textContent = '2,3';
//     }

// let a = parseInt(prompt('enter number'));
// let letter;
// switch (a){
//     case 0 :
 //        letter = 0;
 //        break;
 //    case 1 :
 //        letter = 1;
 //        break;
  //   case 2:
 //    case 3 :
 //        letter = 2,3;
 //        break;
 //    default :
 //   console.log('wrong');                
// }
 //console.log(a)

 // const user = {
//     name: 'Bob',
//     age: 15,
//     class: 10,
// }

// for ( const key in user){
 //    console.log('keys: ', key);
// }
// for ( const key in user){
//     console.log('meaning ', user[key]);
// }

// const keys = Object.keys(user)
// console.log(keys);

// const values = Object.values(user);
// console.log(values);

// const entries = Object.entries(user);
// console.log(entries);

// const hotel = {
// //     name: 'hillton',
 //    stars: 5,
 //    capacity: 250,

// }
// const keys = Object.keys(hotel);
// console.log(keys);
// for (const key of keys){
//     console.log('Value: ', hotel[key]);
// }

// const entries = Object.entries(hotel)

// for(const entry of entries){
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
// }


// const string = 'Hello, my friends';
// console.log(string.split(' '));

// const names = ['Alex', 'David', 'Nika', 'Bob', 'Yana'];
// console.log(names.join(' '));

// const navne = ['Alex', 'David', 'Nika', 'Bob', 'Yana'];
// console.log(navne.indexOf('Bob'));

// const navne = ['Alex', 'David', 'Nika', 'Bob', 'Yana'];
// console.log(navne.includes('David'))

// const nammes = ['bob', 'Anna', 'Alex', 'Nick', 'Nika'];
// const newnammes = nammes.splice(0, 3);
// console.log(nammes)

// const sum = function (a, b, c){
//     return a + b + c;
// }

// const add = (a, b, c) => a + b + c;
// const add1 = ( a, b, c) =>{
//     return a + b + c;
// }

// const a = x => {
//     return x + 5
// }


// const b = () => {
//     console.log('hello!')
// }

// const user = {
//     name: 'bob',  
// }
   

// filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers.filter(num => num < 5));
// console.log(numbers.filter(num => num > 5));
// console.log(numbers.filter(num => num === 5));

// const users = [
//     {name: 'alex', isActive: true},
//     {name: 'Bob', isActive: false},
//     {name: 'nick', isActive: true},
//     {name: 'anna', isActive: true},
//     {name: 'dilan', isActive: false},
// ];
// const userActive = users.filter(user => user.isActive);
// console.log(userActive);

// const userNotActive = users.filter(user => !user.isActive);
// console.log(userNotActive);


// find

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers.find (num => num > 6));

// const users = [
// {name: 'alex', isActive: true, id: '1'},
// {name: 'Bob', isActive: false, id: '2'},
// {name: 'nick', isActive: true, id: '3'},
// {name: 'anna', isActive: true, id: '4'},
// {name: 'dilan', isActive: false, id: '5'},
//  ];
//  console.log(users.find(user => user.id === "3"));

// every

//const numbers = val => val >= 15; 
//console.log([20, 135, 96, 10, 88, 74, 64].every(numbers)); // false
//console.log([20, 135, 96, 100, 88, 74, 64].every(numbers)); //true
//console.log([1, 10, 8, 12, 6, 9, 5].some(numbers)); // false   
//console.log([17, 10, 8, 12, 6, 9, 5].some(numbers));// true

//const fruits = [
//    {name: 'orange', amount: 40},
//    {name: 'kiwi', amount: 100},
//    {name: 'apple', amount: 48},
//    {name: 'banana', amount: 0},
//]
//console.log(fruits.every(fruit => fruits.amount > 0));
//console.log(fruits.some(fruit => fruits.amount > 0));


//const players = [
//    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//    ];

//console.log(players.map(player => {
//    return player.name;
//}))

//console.log(players.filter(player => player.online));

//console.log(players.filter(player => player.timePlayed > 250));

//console.log(players.find(player => player.id === "player-3"));

// CALLBACK (EXTRA)


const callback =() => console.log('Hello');
// ...
function fun(callback){
    // ...
    callback();
}
fun(callback); // Hello

const numbers = [11, 24, 31, 14, 51, 36, 27, 8, 9];
const cost = numbers.map(function(number){
    return number * 1.6;
})
console.log(cost);

function allElements(arr, callback){
    for (let i = 0; i < arr.length; i++){
        if(!callback(arr[i])){
            return false;
        }
    }
    return true
}

const allEven = allElements([2, 4, 6, 8, 10], function(element){
    return element % 2 === 0;
})
console.log(allEven); // true


function filter(arr, callback){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;


}
const nummers = filterArray([3, 17, 15, 25, 88, 98, ,23], function ( element){
    return element % 2 === 1;
});
console.log(nummers);