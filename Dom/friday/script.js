
//const singleBtn = document.querySelector('#single'); 
//const handleClick = () => alert('Hello!'); 
//singleBtn.addEventListener('click', handleClick); 
 
//const multiBtn = document.querySelector('#multiple'); 
//const firstCall = () => alert('First callback'); 
//const secondCall = () => alert('Second Callback'); 
//const thirdCall = () => alert('Third Callback'); 
 
//multiBtn.addEventListener('click', firstCall); 
//multiBtn.addEventListener('click', secondCall); 
//multiBtn.addEventListener('click', thirdCall);



//const addBtn = document.querySelector('button[data-action="add"]');
//const removeBtn = document.querySelector('button[data-action="remove"]');
//const btn =document.querySelector('#btn');

//const handleClick = () => {
 //   alert('Click Event listener alert');
//}

//addBtn.addEventListener('click', () => {
 //   btn.addEventListener('click',handleClick);
////});

//removeBtn.addEventListener('click', () => {
 //   btn.removeEventListener('click', handleClick);
//});

// const btn = document.querySelector('#btn');

// const handleClick = event => {
//     console.log('event:'. event);
//     console.log('event type:', event.type);
// }

// btn.addEventListener('click', handleClick)

// function changeColor (button) {
//     const colors = ['red', 'blue', 'green', 'orange', 'black', 'brown'];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
// 
//     button.style.backgroundColor = randomColor;
// }

// function addAlert(){
//     alert('hello')
// }

// document.addEventListener("keydown", event => {
//     console.log("keydown:", event);
// }

// )
// document.addEventListener("keyup", event => {
   // console.log("keyup:", event);
// }

// )

// document.addEventListener("keydown", event => {
//     console.log('key:', event.key);
//     console.log('code:', event.code);
// })

// document.addEventListener("keydown", event => {
//     event.preventDefault();

// if((event.ctrlKey || event.altKey) && event.code === "KeyS"){
//     console.log("ctrl+s or command+s")
// }
    
// })

const element = document.getElementById('mousedown-up')
element.addEventListener('mousedown', () => {
    element.textContent = 'mouse button clicked'
});
element.addEventListener('mouseup', () => {
    element.textContent = 'mouse button realesed'
})