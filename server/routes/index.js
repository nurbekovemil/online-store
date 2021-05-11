const Router = require('express')
const router = new Router()

module.exports = router
   .use('/user', require('./userRoutes'))
   .use('/brand', require('./brandRoutes'))
   .use('/type', require('./typeRoutes'))
   .use('/device', require('./deviceRoutes'))
