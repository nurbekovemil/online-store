const Router = require('express')
const router = new Router()
const {create, getAll, getOne} = require('../controllers/deviceController')
module.exports = router
   .post('/', create)
   .get('/', getAll)
   .get('/:id', getOne)
