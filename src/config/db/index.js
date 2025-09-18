const mongoose = require('mongoose')

async function connect(req, res) {
    try {
        await mongoose.connect('mongodb://localhost:27017/my_db')
    } catch(err) {
        res.status(500)
    }
}

module.exports = {connect}
