const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categorytype: {
        type: String,
        unique: true,
        sparse: true,
    },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
