const Course = require('../models/Course')

class SiteController {
    // GET /
    index(req, res, next) {
        // res.render('home')

        Course.find({})
            .then(courses => res.json(courses))
            .catch(next)
    }
}

module.exports = new SiteController
