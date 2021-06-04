require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/models')
const app = express()
const PORT = process.env.PORT || 5000
const router = require('./routes/index')
app.use(cors())
   .use(express.json())
   .use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection database successfully.');
        await sequelize.sync()
        app.listen(PORT,() => console.log(`Server started on port ${PORT}.`))
    } catch (error) {
        console.log(error)
    }
}
start()
