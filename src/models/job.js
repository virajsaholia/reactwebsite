const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobimg: {
        type: String,
        required: true,
    },
    jobname: {
        type: String,
        required: true,
    },
    positionnumber: {
        type: Number,
        required: true,
    },
});
const careerSchema = mongoose.model('careerSchema', jobSchema);

module.exports = careerSchema;