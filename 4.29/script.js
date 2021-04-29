const input = document.querySelector('#input');
const insert = document.querySelector('#insert');
const todoBody = document.querySelector('.todoBody');

const list = [];
const done = [];
const deleted = [];

insert.addEventListener('click', () => {
    let date = new Date();

    if(input.value === '') return false;

    const todo = {
        id: Math.random().toString().split('.')[1],
        todoNer: input.value,
        status: false,
        deleted: false,
        createdDate: {
            onSar: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
            time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }
    }

    list.push(todo);

    input.value = '';

    showTodos();
});


const showTodos = () => {
    todoBody.innerHTML = '';
    list.forEach(el => {
        todoBody.insertAdjacentHTML('beforeend', `
            <div class="todoItems relative w-4/5 mx-auto flex justify-between items-center p-2 transition duration-300 hover:bg-opacity-60 rounded-xl hover:bg-gray-300 font-bold text-white cursor-pointer hover:text-black overflow-hidden mb-4">
                <p id="${el.id}" class="todoNer">${el.todoNer}</p>
                <button id="btn" class="absolue rounded-full border-2 border-red-500 hover:bg-red-500 hover:text-white font-bold text-red-500 transition duration-300 w-8 h-8 transform translate-x-14 focus:outline-none">&times;</button>
            </div>
        `)
    })
};

document.addEventListener('click', e => {
    if(e.target.id === 'btn'){
        const todoId = e.target.previousElementSibling.id;
        const deleteTodo = list.find(el => el.id === todoId);
        const todoIndex = list.findIndex(el => el.id === todoId);
        deleteTodo.deleted = true;
        list.splice(todoIndex, 1);
        deleted.push(deleteTodo);
    }

    if(e.target.className === 'todoNer'){
        const id = e.target.id;
        const todoDone = list.find(el => el.id === id);
        todoDone.status = true;
        done.push(todoDone);
    }

    showTodos()
});