const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const { Op } = require("sequelize");

const create = async(req, res) => {
   try {
      let {name, price, brandId, typeId, info} = req.body
      const {img} = req.files
      let fileName = uuid.v4()+'.jpg'
      img.mv(path.resolve(__dirname, '..','static', fileName))
      const device = await Device.create({name, price, brandId, typeId, img: fileName})
      if (info) {
         info = JSON.parse(info)
         info.forEach(el => {
            DeviceInfo.create({
               title: el.title,
               description: el.description,
               deviceId: device.id
            })
         });
      }
      return res.status(200).send({device})
   } catch (error) {
      return res.status(400).send({message: error.message})
   }
}

const getAll = async (req, res ) => {
   try {
      let {brandId, typeId, limit, page} = req.query
      limit = limit || 9
      page = page || 1
      let offset = page * limit - limit
      let devices;
      
      if(brandId && typeId) {
         devices = await Device.findAndCountAll({where: {brandId, typeId}, limit: offset})
      }
      if(!brandId && typeId) {
         devices = await Device.findAndCountAll({where: {typeId}, limit: offset})
      }
      if(brandId && !typeId) {
         devices = await Device.findAndCountAll({where: {brandId}, limit: offset})
      }
      if(!brandId && !typeId) {
         devices = await Device.findAndCountAll({limit: offset})
      }
      return res.status(200).send({devices})
   } catch (error) {
      
   }

}

const getOne = async (req, res) => {
   const {id} = req.params
   const device = await Device.findOne({
      where: {id}, 
      include: [{model: DeviceInfo, as: 'info'}]
   })
   res.status(200).send({device})
}

module.exports = {create, getAll, getOne}