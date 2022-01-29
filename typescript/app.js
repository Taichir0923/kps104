// var x:number[] = [];
// var y:string[] = [];
// var isValid:boolean = true;
// x.push(123);
// x.push(234);
// y.push("gjkfdl");
// console.log(x , y);
// // object
// interface hun {
//     ner: string,
//     nas: number
// }
// interface hun1 {
//     name: string,
//     age: number
// }
// var person:hun = {
//     ner: "Narada",
//     nas: 24
// }
// var person1:hun1 = {
//     name: "John",
//     age: 23
// }
// var members:hun[] = [];
// var member:{} = {
//     ner: "narada"
// }
// console.log(members);
var input = document.querySelector('#input');
var btn = document.querySelector('#btn');
var container = document.querySelector('#container');
var todos = [];
var x = 123;
x = "432";
function getNum() {
    return "fjdskl";
}
btn.addEventListener('click', function () {
    var todo = {
        taskName: input.value,
        id: Math.random().toString().split('.')[1],
        isCompleted: false
    };
    todos.push(todo);
    updateUI();
});
function updateUI() {
    container.innerHTML = '';
    todos.forEach(function (todo) {
        container.insertAdjacentHTML('afterbegin', "\n            <h1>".concat(todo.taskName, "</h1>\n        "));
    });
}
