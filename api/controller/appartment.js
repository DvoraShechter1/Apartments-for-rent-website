import Appartment from '../modules/appartment'

export const getAll = (req, res) =>{
    Appartment.find()
    .then(ap =>{
        res.status(200).send({ap})
    })
    .catch(error=>{
        res.status(500).send({ error: error.message })
    })
}

export const getById = (req, res) =>{
    const _id = req.params.id

    Appartment.findById(_id)
    .then(ap=>{
        if(!ap)
            return res.status(404).send({ error: `appartment not found!` })
        return res.status(200).send({ap})
    })
    .catch(error=>{
        res.status(500).send({ error: error.message })
    })
}



/////////////////////

export const create = (req, res) => {

const { name, description, picture, category, city, address, numBeds, more, price, advetisor } = req.body

const appart = new Appartment({
    name,
    description, 
    picture: picture.replace('\\', '/'), 
    category, 
    city, 
    address, 
    numBeds, 
    more, 
    price, 
    advetisor
})

appart.save()
    .then(a => {
        res.status(200).send({ message: `create Appartment ${a._id} succeed!` })
    })
    .catch(error => {
        res.status(500).send({ error: error.message })
    })
}

export const update = (req, res) => {

const _id = req.params.id

if (!_id) {
    return res.status(400).send({ error: `id is required!` })
}

//אם נשלח ID לעדכון
if (req.body._id) {
    return res.status(400).send({ error: `update id is forbidden!` })
}

Appartment.findByIdAndUpdate(_id, req.body, { new: true })
    .then(a => {
        res.status(200).send({ message: `update Appartment ${a._id} succeed!`, a })
    })
    .catch(error => {
        res.status(500).send({ error: error.message })
    })
}

export const remove = (req, res) => {

const _id = req.params.id

if (!_id) {
    return res.status(400).send({ error: `id is required!` })
}

Appartment.findByIdAndDelete(_id)
    .then(appartment => {
        res.status(200).send({ message: `delete Appartment ${appartment._id} succeed!` })
    })
    .catch(error => {
        res.status(500).send({ error: error.message })
    })
}