// DOM - Document Oriented Model

// Object this;
// array [56,56,23,12]

// Object function
// this keyword

// let obj = {
//     ner: 'Narada',
//     mergejil: 'Engineer',
//     nasTootsoh: function(){
//         console.log(this);
//     }
// }

// [{}, {}, {}, {}]


// console.log(this)

'use strict';

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const huis = document.querySelector('#huis');
const registrate = document.querySelector('#registrate');
const users = document.querySelector('.users');

const data = [];

registrate.addEventListener('click', function(){
    let user = {
        username: username.value,
        email: email.value,
        number: number.value,
        huis: huis.value,
        id: Math.random().toString().split('.')[1],
        generatePassword: function(){
            let firstLetter = this.username.toUpperCase()[0];
            this.password = firstLetter + this.number;
        },
        displayUsername: function(){
            const userContainer = document.createElement('p');
            userContainer.className = "user";
            userContainer.id = this.id;
            userContainer.textContent = this.username;
            users.appendChild(userContainer);
        }
    };

    // console.log(user);
    user.generatePassword();

    data.push(user);

    user.displayUsername();

    reset()
});

function reset(){
    username.value = '';
    email.value = '';
    number.value = null;
    huis.value = 'male';
}

document.addEventListener('click', function(e){
    if(e.target.classList.contains('user')){
        let userId = e.target.id;
        let userFound = data.find(function(el){
            return el.id === userId;
        });
        console.log(userFound);
    }
})

// let arr = [56, 25, 16, 34, 76, 123];

// let indx = arr.find(function(el){
//     return el === 34;
// })