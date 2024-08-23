//const title = document.createElement('h1');
//console.log(title);

//title.textContent = 'Hello World!'
//console.log(title)


//const image = document.createElement('img');
//console.log(image)
//image.src = 'https://...'
//image.alt = 'Cat'

//const list = document.querySelector('.username');

//const lastItem = document.createElement('li');
//lastItem.textContent = 'Bob';
//list.append(lastItem);

//const firstItem = document.createElement('li');
//firstItem.textContent = 'alex'
// list.prepend(firstItem);

const title = document.querySelector('.article .title');
title.innerHTML = 'Allahuagbar'
const tech = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODE']
const list = document.querySelector('.list');

const markup = tech.
map((tech) => `<li class='list-item'>${tech}</li>`)
.join('');

console.log(markup);
list.innerHTML = markup;

list.insertAdjacentHTML('beforeend', '<h3>New Title</h3>');

const saveButton = document.querySelector('button[data-action="save"]')
console.log(saveButton.dataset.action);

const closeButton = document.querySelector('button[data-action="close"]')
console.log(closeButton.dataset.action);