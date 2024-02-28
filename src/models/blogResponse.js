const mongoose = require('mongoose');

const blogResponse = new mongoose.Schema({
    comments: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
});

const blogresponse = mongoose.model('blogresponse', blogResponse);

module.exports = blogresponse;