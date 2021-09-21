const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'student',
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    comments: [
        {
            guest: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ]
});

// articleSchema.methods.addComment = function(comment){

// }

// 

module.exports = mongoose.model('article', articleSchema)