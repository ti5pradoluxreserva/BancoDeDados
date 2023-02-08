const bodyParser = require('body-parser')
const setup = require('./setupRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(setup)

}