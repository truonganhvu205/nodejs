// Vu Truong Anh
// truonganhvu205@gmail.com

const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const routes = require('./routes')
const db = require('./config/db')

const app = express()

app.use(morgan('combined'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use(express.static(path.join(__dirname, 'public')))

db.connect()
routes(app)

app.listen(3000)
