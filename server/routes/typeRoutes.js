const Router = require('express')
const router = new Router()
const {create, getAll} = require('../controllers/typeController')
module.exports = router
   .post('/', create)
   .get('/', getAll)
