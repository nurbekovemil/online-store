const { Type } = require("../models/models")

const create = async (req, res) => {
   try {
      const {name} = req.body
      const type = await Type.create({name})
      res.status(200).send({type})
   } catch (error) {
      res.status(400).send({message: error.message})
   }
}

const getAll = () => {
   res.status(200).send('getAllType')
}


module.exports = {create, getAll}