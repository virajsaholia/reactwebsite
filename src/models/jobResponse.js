const mongoose = require('mongoose');

const jobResponse = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    jobName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    coverletter: {
        type: String,
        required: true,
    },
    Resume: {
        type: String,
        required: true,
    },
});

const jobresponse = mongoose.model('jobresponse', jobResponse);

module.exports = jobresponse;