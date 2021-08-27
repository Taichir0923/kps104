// const fs = require('fs');
// const http = require('http');

// fs.writeFileSync('./test.txt', "file uusgeh module")
// const data = fs.readFileSync('./test.txt', 'utf-8')
// console.log(data)
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('Home page')
//     } else if(req.url === '/contact') {
//         res.end('Contact')
//     } else if(req.url === '/about'){
//         res.end('about')
//     } else {
//         res.end('404 page not found')
//     }
// })

// server.listen(3000, () => {
//     console.log('3000 portiig sonsoj bna')
// });

const express = require('express');
const mainRouter = require('./router/mainRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(mainRouter);


app.listen(3000)