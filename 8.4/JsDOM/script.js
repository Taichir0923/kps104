// querySelector = hamgiin tutuund taarsan element
// querySelectorAll => DDL ( nextElementSibling )
// getElementsByClassName => List
// getElementById => gantshan el songono

// DOM - Document oriented Model

// const tags = document.querySelector('.pTag');

// background-color => backgroundColor
// line-through
// const imgContainer = document.querySelector('.imgContainer');
// const modal = document.querySelector('.modal');

// let imgURL = '';

// imgContainer.onclick = function(){
//     modal.classList.remove('hidden');
//     imgURL = imgContainer.style.backgroundImage.split('"')[1];

//     modal.children[0].children[1].children[0].src = imgURL
// }

// document.addEventListener('click', e => {
//     if(e.target.id === 'close'){
//         modal.classList.add('hidden')
//     }

//     if(e.target.classList.contains('modal')){
//         modal.classList.add('hidden')
//     }
// })


// onChange, onInput - input


// Regular Expression  /yl;rthkye;lk/
// Input Validation - nuutsugA3$^^*

// 
// i - ignore the case;
// g - taarch bui buh case-uudiig tsugluulj butsaana
// | - or logic
// * - 0 bolon tuunees ih niilemj
// + - dor hayj neg udaa bna
// ^ - carret - temdegt moriin hamgiin ehnii character
// $ - temdegt moriin hamgiin suuliin element
// []
// a-z - buh jijig useg;
// A-Z - buh tom useg;
// 0-9 - buh toonuud
// \ - escape operator
// \W - [^a-zA-X0-9_] special character   ()!@#$%^&*-=+. 
// \w - [a-zA-X0-9_];
// \D - [^0-9];
// \d - [0-9];
// \S - [^ ];
// \s - [ ];

// {8} - temdegtiin urt
// {8,} - hamgiin bagadaa 8 shirhet element
// {1,8} - intervals
// {,12} - 12-s ihgui 

// let regEx = /\S/g;
// let sentence = 'Mongol uls 3.5 say hun amtai. Mongol uls 21 aimagtai. I"m sportsman';

// console.log(sentence.match(regEx));

const passwordInput = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password--confirm');
const smallLetter = document.querySelectorAll('.check');
const btn = document.querySelector('#btn');

const fullnameInput = document.querySelector('#fullname');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#number');

class User {
    constructor(email, fullname, password, number){
        this.email = email;
        this.fullname = fullname;
        this.password = password;
        this.number = number
    }
}

let formIsValid = false;
let passwordIsValid = false;
let passwordMatched = false;

const users = [];

passwordInput.addEventListener('input', () => {
    let regExp =[/[a-z]/, /[A-Z]/, /\d/, /\W/, /.{8,}/];

    let regExInput = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?=.{8,})/;

    if(regExInput.test(passwordInput.value)){
        passwordInput.classList.add('border-green-400');
        passwordInput.classList.remove('border-red-400');
        passwordIsValid = true;
    } else {
        passwordInput.classList.remove('border-green-400');
        passwordInput.classList.add('border-red-400');
        passwordIsValid = false;
    }

    regExp.forEach((exp, index) => {
        if(exp.test(passwordInput.value)){
            addClasses(index)
        } else {
            removeClasses(index)
        }
    })
})

function addClasses(index){
    smallLetter[index].classList.add('text-gray-500');
    smallLetter[index].classList.add('line-through');
    smallLetter[index].classList.remove('text-red-500');
}

function removeClasses(index){
    smallLetter[index].classList.remove('text-gray-500');
    smallLetter[index].classList.remove('line-through');
    smallLetter[index].classList.add('text-red-500');
}

passwordConfirm.addEventListener('input', () => {
    if(passwordInput.value === passwordConfirm.value){
        passwordConfirm.classList.remove('border-red-400')
        passwordConfirm.classList.add('border-green-400')
        passwordMatched = true
    } else {
        passwordConfirm.classList.add('border-red-400')
        passwordConfirm.classList.remove('border-green-400')
        passwordMatched = false
    }
})



btn.addEventListener('click', e => {
    e.preventDefault();
    if(fullnameInput.value === ''){
        fullnameInput.classList.add('border-red-400');
        formIsValid = false
    } else {
        fullnameInput.classList.remove('border-red-400');
        formIsValid = true
    }

    if(emailInput.value === ''){
        emailInput.classList.add('border-red-400');
        formIsValid = false
    } else {
        emailInput.classList.remove('border-red-400');
        formIsValid = true
    }

    if(numberInput.value === ''){
        numberInput.classList.add('border-red-400');
        formIsValid = false
    } else {
        numberInput.classList.remove('border-red-400');
        formIsValid = true
    }

    if(formIsValid && passwordIsValid && passwordMatched){
        const user = new User(
            emailInput.value,
            fullnameInput.value,
            passwordInput.value,
            numberInput.value
        )

        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        resetForm();
    }
})


function resetForm(){
    fullnameInput.value = '';
    emailInput.value = '';
    numberInput.value = null;
    passwordInput.value = '';
    passwordConfirm.value = '';
}







// console.log("jijig useg: " + jijigUseg.test(password));
// console.log("tom useg: " + tomUseg.test(password));
// console.log("number: " + number.test(password));
// console.log("char: " + char.test(password));
// console.log("len: " + len.test(password));

