const create = async (req, res) => {
   res.status(200).send({message:'created'})
}

const getAll = async (req, res) => {
   res.status(200).send('getAllBrand')
}


module.exports = {create, getAll}