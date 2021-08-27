// Async JS, fetch API

// setTimeout

// setTimeout(() => {
//     console.log('hi')
// }, 2000)

// Asynchronous Javascript

// Blocking
// func 1
// func 2 => get data from server => 10sec
// func 3
// func 4
// func 5

// Non blocking
// Request => Сервер лүү хүсэлт явуулах
// Response => Хариу

// req, ikon.mn
// res => ikon.html

// fetch
//  [{}]
fetch('https://jsonplaceholder.typicode.com/users') 
.then(res => res.json())
.then(result => {
    result.forEach(el => {
        if(el.id === 5){
            document.body.insertAdjacentHTML('afterbegin', `
                <h1>${el.name}</h1>
            `)
        }
    })
})