
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


// const callback =() => console.log('Hello');
// ...
// function fun(callback){
    // ...
//     callback();
// }
// fun(callback); // Hello

// const numbers = [11, 24, 31, 14, 51, 36, 27, 8, 9];
// const cost = numbers.map(function(number){
//     return number * 1.6;
// })
// console.log(cost);

// function allElements(arr, callback){
 //    for (let i = 0; i < arr.length; i++){
//         if(!callback(arr[i])){
//             return false;
 //        }
 //    }
 //  return true
 // }

 // const allEven = allElements([2, 4, 6, 8, 10], function(element){
  //    return element % 2 === 0;
 // })
 // console.log(allEven); // true


 // function filter(arr, callback){
  //    const result = [];
  //    for(let i = 0; i < arr.length; i++){
  //        if(callback(arr[i])){
  //            result.push(arr[i]);
  //       }
  //   }
  //    return result;


 // }
 // const nummers = filterArray([3, 17, 15, 25, 88, 98, ,23], function ( element){
 //     return element % 2 === 1;
 // });
 // console.log(nummers);

  //const numbers = [17, 52, 65, 41, 12, 9];
  //const sum = numbers.reduce((acc, value)=> acc + value, 0);
  //console.log(sum); 

  //const tweets = [
  //   {id: '012', likes: 23, tags: ['css', 'sass']},
  //   {id: '017', likes: 33, tags: ['js', 'javascript']},
   //  {id: '018', likes: 87, tags: ['css', 'html']},
   //  {id: '011', likes: 47, tags: ['react', 'js']},
   //  {id: '019', likes: 98, tags: ['nodejs', 'js']},
  //]
  //const likes = tweets.reduce((totallikes, tweet)  => totallikes + tweet.likes, 0)
  //console.log(likes)


  //const like = tweets => tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
  //console.log(like(tweets));

  //const tags = tweets.reduce((alltags, tweet) => {
  //  alltags.push(...tweet.tags)
  //  return alltags;
  //}, []);
  //console.log(tags)

   //const tagsSum = tweets =>tweets.reduce((alltags, tweet) => {
   //  alltags.push(...tweet.tags)
   //    return alltags;
   //  }, []);
   //  const tags = tagsSum(tweets);
   //  const tgasCount = (acc, tag) => {
   //      if(!acc.hasOwnProperty(tag)){
   //          acc[tag] = 0;
 //
   //      }
   //      acc[tag] += 1;
   //      return acc;
   //  };
   //  const totalTags = tags => tags.reduce(tgasCount, {});
   //  const tagcount = totalTags(tags);
   // //  console.log(tagcount);


   //  const nummer = [5, 6, 1, 3, 4, 2];
   //  console.log(nummer.sort());
 //
   // //  const names = ['Alex', 'Nick', 'Bob', 'Jhon'];
   //  console.log(names.sort());



      //   const letters = [5, 6, 1, 3, 4, 2];
    //  console.log(letters.sort()) // ['A', 'F', 'a', 'h']
     //    const newLetters = letters.sort((curEl, nextEl) =>{
    //       return curEl - nextEl
    //     //     });
    //     console.log(newLetters);


  //  const fruits = ['kiwi', 'apple', 'orange', 'banana'];
    //     fruits.sort(function(a, b){
     //      return a.localeCompare(b)
     //    })
     //    console.log(fruits);

    //    const copy = [...fruits];
    //    console.log(copy);
    //    console.log(copy === fruits);


          //const num = [5, 6, 1, 3, 4, 2];
      //const even = num.filter(x => x%2 === 0);
      //console.log(even);
      //const nezNum = even.map (x => x * 3);
      //console.log(nezNum);
      //const reverse = nezNum.reverse();
      //console.log(reverse);
            //const result = num
            //.filter(x => x%2 === 0)
            //.map(z => z * 3)
            //.reverse();
            //console.log(result);




      //const players = [
        //{ id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
        //{ id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
        //{ id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
        //{ id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
        //{ id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
        //];

        //players.sort((a, b) => a.timePlayed - b.timePlayed)
        //console.log(players)



//const arr = [
//{ name: 'John', age: 32 },
//{ name: 'Jane', age: 26 },
//{ name: 'Mike', age: 42 },
//{ name: 'Emily', age: 29 }
//];

//arr.sort((a, b) => {
//  if(a.name < b.name){
//    return -1;
//  }
//  if( a.name > b.name){
//    return 1;
//  }
//  return 0;
//})
//console.log(arr);




//////////////// OOP

//const baseSalary = 20000;
//const overtime = 15;
//const rate = 20;
//const getWage =(baseSalary, overtime,  rate) => {
//  return baseSalary + overtime * rate;
//}
//getWage(baseSalary, overtime, rate);


//const employee = {
//  baseSalary:30000,
//  overtime: 15,
//  rate: 20,
//  getWage(){
//    return this.baseSalary + this.overtime * this.rate;
//  }
//}
//employee.getWage();


//const animal = {
//  legs: 4,

//}
//const cat = Object.create(animal);
//cat.name='Bob';
//console.log(cat);

//const animal = {
//  eats: true,
//}
//const dog = Object.create(animal);
//dog.barks = true;

//for(const key in dog){
//  if(!dog.hasOwnProperty(key)) continue
//  console.log(key)
//}

//const animal = {
//     eats: true,
// }
//const dog = Object.create(animal);
////dog.barks = true;
//const keysDog = Object.keys(dog);
//console.log(keysDog);

//class User {
//  #mail;
 //// constructor({name, age, mail}){
 //   this.name = name;
 //   this.age = age;
 //   this.#mail = mail;
 // }
//  getMail(){
//    return this.#mail;
//  }
//  changeMail(newMail){
 //   return this.#mail = newMail;
//  }
//}
//const a = new User('David', '13');
//console.log(a);
//const b = new User('Alfredo di stefano', '93');
//console.log(b);

//const a = new User({
//  name: 'Bob',
//  age: '22',
//  mail: 'David@gmail.com',
//})
//a.changeMail('newDavid@gmail.com')
//console.log(a.getMail());



//const b = new User({
//  name: 'David',
//  age: '13',
//})
//console.log(b); 
//const c = new User({
//  name: 'Alfredo di stefano',
//  age: '93',
//})
//console.log(c); 

//class User{
//  static Roles = {
  //  ADMIN: 'admin',
    //USER: 'user',
  //}//
//  #role
//  #mail
//  constructor({name, age, mail, role}){
//    this.name = name;
//    this.age = age;
//    this.#mail = mail;
//    this.role = role;
//  }
//  get role(){
//    return this.#role;
//  }
//  set role(newrole){
//    if(newrole === ""){
//      console.log("Error")
//      return;
//    }
 //   this.#mail = newrole
 // }
 
//}

//const c = new User({
//  mail: 'newDavid@gmail.com',
//  role: User.Roles.ADMIN,
//});
//console.log(c.Roles);
//console.log(User.Roles);
//console.log(c.Roles);
//c.role = User.Roles.USER;
//console.log(c.role);

//element.querySelector(selector)
//const item = document.querySelector('.list__item');
//const listItems = document.querySelectorAll('.list__item');
//console.log(listItems);

//const listWidth = 
//document.querySelector('#menu');
//listWidth.style.textTransform = 'uppercase';
//listWidth.style.fontSize = '26px';
//listWidth.style.color = 'tomato'
//console.log(listWidth)

document.addEventListener('keydown', (event) => {
  const cat = document.getElementById('box');
  const step = 100;
  let left = parseInt(window.getComputedStyle(cat).left);
  
  if (event.key === 'ArrowLeft') {
    cat.style.left = `${left - step}px`;
  } else if (event.key === 'ArrowRight') {
    cat.style.left = `${left + step}px`;
  }
});

//document.addEventListener('keydown', function(event){
//  const element = document.getElementById('box');
//  if (event.key === 'y'){
//   element.style.backgroundColor = 'yellow';

//  } else if (event.key === 'g'){
//    element.style.backgroundColor = 'green';
//  }else if (event.key === 'p'){
//    element.style.backgroundColor = 'pink';
//    
//}
//else if (event.key === 'b'){
// element.style.backgroundColor = 'blue';}})

//const links = document.querySelectorAll('ul li a')
//links.forEach(link => {
//  const href = link.getAttribute('href')
//  if(href.startsWith('https:') || href.startsWith('http:') || href.startsWith('ftp:')){
//    link.computedStyleMap.color = 'orange'
//  }
//})
//if(links.length > 0){
// links[0].classList.add('li_link');
//  links[links.length = 1].classList.add['li_link']
//}

//const text = document.querySelector('h1')
//text.textContent = 'Title';
//text.classList.add('title')
//text.style.color = 'red';
//text.style.fontSize = '20px';

//text.classList.replace('title', 'newTitle')


//links.forEach(link => {
//  if (link.classList.contains('list')){
//    alert('contains class list');

//  } else{
//    alert('does not contain class list');
// }
//});

//const array1 = [5, 10, 15, 20];
//const array2 = [10, 20, 30];

//const sumOne = array1.reduce((acc, num) => acc + num, 0)
//const sumTwo = array2.reduce((acc, num) => acc + num, 0)
//const total = sumOne + sumTwo
//console.log(`totalsum = ${total}`)

//const products = [
//  {name: 'Macbook', price: 1000, category: 'Eletroniks', stock: 56},
//  {name: 'Iphone', price: 899, category: 'Eletroniks', stock: 30},
//  {name: 'Ipad', price: 699, category: 'Eletroniks', stock: 21},
//  {name: 'Airpods', price: 399, category: 'Eletroniks', stock: 67}
//]
//function calc(products, category){
// return products.filter(product => product.category === category)
 // .reduce((total, product) => total + (product.price * product.stock), 0)
//}
//const totalValue = calc(products, 'Eletroniks');
//console.log(`Eletroniks = ${totalValue}`);
