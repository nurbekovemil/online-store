const {Brand} = require('../models/models')
const create = async (req, res) => {
   try {
      const {name} = req.body
      const brand = await Brand.create({name})
      res.status(200).send({brand})
   } catch (error) {
      res.status(400).send({message: error.message})
   }
}

const getAll = async (req, res) => {
   res.status(200).send('getAllBrand')
}


module.exports = {create, getAll}