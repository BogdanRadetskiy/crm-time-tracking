const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectData = new Schema(
    {
        time: {
            type: [String],
            required: true
        },
        date: {
            type: [String],
            required: true
        },
    },
    {
        timestamps: true,
        collection: 'projectsData'
    }
);

module.exports = mongoose.model('ProjectData', ProjectData);