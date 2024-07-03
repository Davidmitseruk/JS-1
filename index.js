const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const fruits = ['apple', 'kiwio', 'mango'];
console.log(fruits);

const arr =  ['cat', 'dog', 'bird']; 
arr[10]= 'fish';
console.log(arr);

console.log(arr.length);

const lastIndex= fruits.length - 1;
console.log(lastIndex);



const string = 'hello, my friends!';
console.log(string.split(' '));

const name = ['Alex', 'David', 'Nika', 'Bob', 'Yahna', 'Arthur'];
console.log(name.join(','))

const names = ['Alex', 'David', 'Nika', 'Bob', 'Yahna', 'Arthur'];
console.log(names.indexOf('Bebee'));

const navne = ['Alex', 'David', 'Nika', 'Bob', 'Yahna', 'Arthur'];
console.log(navne.includes('David'));

const fruit = ['apple', 'kiwi', 'mango'];
const frugt = 'mango';

if (fruit.includes(frugt)){

    console.log('yes')

} else (console.log('no'));

const nummer = [1, 2];
nummer.push(5);
console.log(nummer);

nummer.push(8);
console.log(nummer)

nummer.push('one');
console.log(nummer)

console.log(nummer.pop());

const navn = ['Alex', 'David', 'Nika', 'Bob', 'Yahna', 'Arthur'];
console.log(navn.shift())

navn.unshift('Bogdan');
console.log(navn);

const nammes = ['bob', 'Anna', 'Alex', 'Nick', 'Nika'];
const newnammes = names.splice(0, 3);
console.log(names)

const add = (...arg) => {
    console.log(arg)
}
add(1, 2, 3, 4, 5);