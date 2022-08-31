console.log('My javascript is working!');


//Step 1: Grab an html element
const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.querySelector('#reset-btn');
const counter = document.querySelector('#counter');

const themeBtns = document.querySelectorAll('.theme-buttons');
// console.log(themeBtns);

//Step 2: Write out function we want to run
let count = 0;

const increase = () => {
    count++;
    counter.textContent = count;
    console.log(count);
}

const decrease = () => {
    count--;
    counter.textContent = count;
    console.log(count);
}
const resetB = (event) => {
    console.log(event.target.id);
    count = 0;
    counter.textContent = count;
    console.log(count);
}

const selectTheme = (event) => {
     console.log(event.target.textContent)
     const theme = event.target.textContent;
     document.querySelector('body').className = theme;
     document.querySelector('main').className = theme;

}

//Step 3: Combine steps 1 and 2 using an event listener
plusBtn.addEventListener('click', increase);

minusBtn.addEventListener('click', decrease);

resetBtn.addEventListener('click', resetB);

for(let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', selectTheme);
    // console.log(themeBtns[i].textContent);
}