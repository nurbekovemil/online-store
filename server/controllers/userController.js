const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
   return jwt.sign({id, email, role},process.env.SECRET_KEY, {expiresIn: '24h'})
}

const registration = async (req, res, next) => {
   const {email, password, role} = req.body
   if(!email || !password) return res.status(400).send({message: 'Поля не может быть пустым!'})
   const condidate = await User.findOne({where: {email}})
   if(condidate) return res.status(400).send({message: `Пользователь c таким ${email} уже зарегистрирован!`})
   const hashPassword = await bcrypt.hash(password, 5)
   const newUser = await User.create({email, role, password: hashPassword})
   const basket = await Basket.create({userId: newUser.id})
   const token = generateJwt(newUser.id, newUser.email, newUser.role)
   return res.status(200).send({token})
}

const login = async(req, res) => {
   const {email, password} = req.body
   const user = await User.findOne({where: {email}})
   if(!user) return res.status(404).send({message: `Пользователь с таким ${email} не найден!`})
   const comparePassword = bcrypt.compareSync(password, user.password)
   if(!comparePassword) return res.status(400).send({message: `Не верный пароль!`})
   const token = generateJwt(user.id, user.email, user.role)
   res.json({token})
}

const auth = async(req, res) => {
   const token = generateJwt(req.user.id, req.user.email, req.user.role)
   return res.status(200).send({token})
}

module.exports = {registration, login, auth}