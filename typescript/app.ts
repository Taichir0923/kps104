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

const input:HTMLInputElement = document.querySelector('#input')! as HTMLInputElement;

const btn:HTMLButtonElement = document.querySelector('#btn') as HTMLButtonElement;

const container:HTMLDivElement = document.querySelector('#container') as HTMLDivElement;

interface Todo {
    taskName: string,
    id: string,
    isCompleted: boolean
}

const todos: Todo[] = [];

var x: number | string = 123;

x = "432"

function getNum():number | string {
    return "fjdskl"
}

btn.addEventListener('click' , function(): void {
    const todo:Todo = {
        taskName: input.value,
        id: Math.random().toString().split('.')[1],
        isCompleted: false
    }
    todos.push(todo);
    updateUI();
});

function updateUI():void {
    container.innerHTML = '';
    todos.forEach(todo => {
        container.insertAdjacentHTML('afterbegin' , `
            <h1>${todo.taskName}</h1>
        `)
    })
};