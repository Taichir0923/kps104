// Regular Expression;
// Password Strength;
// abc,ABC,!@#$%^,_. ;

// || or logic => |

// . buh 

// carret ^;



// let text = 'Mongol ulsiin hun am__ 3.3 hun sayd hun !@#$%^&* hurlee...';

// let regEx = /\W/g;

// console.log(text.match(regEx));

// HEX Code - # + 6temdegt; 0-9, A-F;

// const btn = document.querySelector('#changeColor');


// btn.addEventListener('click', function(){
//     let color = prompt('HEX Code oruul...');
//     let regEx = /^#[A-Fa-f0-9]{3,6}$/;
//     if(regEx.test(color)){
//         document.body.style.backgroundColor = color;
//     } else {
//         console.log('HEX code Error...');
//     }
// })

// Password Strength;

// Dor hayj ng tom useg;
// Dor hayj ng jijig useg;
// Dor hayj ng special char; !@#$%^&&*;
// zaaval too oruulna;
// hamgiin bagadaa 12 temdegt;

const btn = document.querySelector('#check');

btn.addEventListener('click', function(){
    let password = 'Bl3%Bla123%$#';

    let capLetter = /[A-Z]/;
    let smallLetter = /[a-z]/;
    let number = /[0-9]/;
    let specialChar = /\W/;
    let length = /[a-zA-Z0-9_\W]{12,}/;

    if(
        capLetter.test(password) &&
        smallLetter.test(password) &&
        number.test(password) &&
        specialChar.test(password) &&
        length.test(password) 
    ) {
        console.log('Powerful password...');
    } else {
        console.log('Nuuts ug shaardlaga hangahgui baina...');
    }
});


// SASS// LESS// JSX, JS, WOFF TFF