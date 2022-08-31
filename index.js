console.log('My javascript is working!');


//Step 1: Grab an html element
const plusBtn = document.querySelector('#plus-btn')

const minusBtn = document.querySelector('#minus-btn');

//Step 2: Write out function we want to run
let count = 0;

const increase = () => {
    count++;
    console.log(count);
}

const decrease = () => {
    count--;
    console.log(count);
}


//Step 3: Combine steps 1 and 2 using an event listener
plusBtn.addEventListener('click', increase);

minusBtn.addEventListener('click', decrease);