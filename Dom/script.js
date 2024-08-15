const title = document.createElement('h1');
console.log(title);

title.textContent = 'Hello World!'
console.log(title)


const image = document.createElement('img');
console.log(image)
image.src = 'https://...'
image.alt = 'Cat'

const list = document.querySelector('.username');

const lastItem = document.createElement('li');
lastItem.textContent = 'Bob';
list.append(lastItem);

const firstItem = document.createElement('li');
firstItem.textContent = 'alex'
list.prepend(firstItem);