// models/post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.Mixed, // Allow mixed types (ObjectId or string)
        required: true,
    },
    createdDate: {
        type: Date,
    },
    innerContent: {
        type: String,
        required: true, // Assuming InnerContent is of type String
        // You can adjust the type according to your requirements
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
