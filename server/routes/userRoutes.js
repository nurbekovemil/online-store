const Router = require('express')
const router = new Router()
const authMiddleware = require('../middlewares/authMidddleware')

const {registration, login, auth} = require('../controllers/userController')
module.exports = router
   .post('/registration', registration)
   .post('/login', login)
   .get('/auth',authMiddleware, auth)
