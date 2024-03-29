const mongoose = require('mongoose');
const ScholarshipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: false,
    },
    study_level: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    origin_country: {
        type: String,
        required: true,
    },
    deadline_day: {
        type: String,
        required: false,
    },
    photo: {
        type: String,
        required: false,
    },
    premium_tier: {
        type: Boolean,
        required: true,
        default: false,
    }
}, { timestamps: true }
);

module.exports = mongoose.model('Scholarship', ScholarshipSchema);