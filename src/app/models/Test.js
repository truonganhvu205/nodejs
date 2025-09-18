const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Test = new Schema({
    name: {type: String, maxLength: 255},
    description: {type: String, maxLength: 600},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Test', Test)
