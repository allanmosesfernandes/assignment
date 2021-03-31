


var incrementButton = document.getElementsByClassName('plus-btn');
var decrementButton = document.getElementsByClassName('minus-btn');

console.log(incrementButton);
console.log(decrementButton);
////-----increment values---------///
for (let i = 0; i< incrementButton.length; i++) {
    let button = incrementButton[i];
    button.addEventListener('click', (e) => {
        let buttonClicked = e.target;
        //console.log(buttonClicked);

        let input = buttonClicked.parentElement.children[1];
        // console.log(input);

        let inputValue = input.value;
        // console.log(inputValue);

        let newValue = parseInt(inputValue) + 1;
        //console.log(newValue);

        input.value = newValue;

    })
}

////-----decrement values---------///
for (let i = 0; i< decrementButton.length; i++) {
    let button = decrementButton[i];
    button.addEventListener('click', (e) => {
        let buttonClicked = e.target;
        //console.log(buttonClicked);

        let input = buttonClicked.parentElement.children[1];
        // console.log(input);

        let inputValue = input.value;
        // console.log(inputValue);

        let newValue = parseInt(inputValue) - 1;
        //console.log(newValue);

    //stop decrement below zero 
        if(newValue >= 0 ) {
            input.value = newValue;
        }
    })
}
