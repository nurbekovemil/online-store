const Router = require('express')
const router = new Router()
const roleMiddleware = require('../middlewares/roleMiddleware')

const {create, getAll} = require('../controllers/brandController')
module.exports = router
   .post('/',roleMiddleware('ADMIN'), create)
   .get('/', getAll)
