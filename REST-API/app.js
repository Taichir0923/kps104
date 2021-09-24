const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bp = require('body-parser');
const postRouter = require('./routes/postRouter');
const cors = require('cors')

app.use(cors())
app.use(bp.json())

app.use(postRouter)

mongoose.connect('mongodb://127.0.0.1:27017/restapi')
    .then(result => {
        app.listen(3001, () => {
            console.log('server started on 3001')
        })
    });