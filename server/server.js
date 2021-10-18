const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();


app.use(cors());

app.get('/test', (req, res) => {
    res.json({title: 'fhdsjkhfsdkj'})
})

mongoose.connect('mongodb://localhost:27017/react')
    .then(result => {
        app.listen(3001, () => {
            console.log('server started on port 3001')
        })
    })
    .catch(err => console.log(err))