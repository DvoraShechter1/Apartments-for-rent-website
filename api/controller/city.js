import City from "../modules/city"

export const getAll = (req,res)=>{
    City.find()
    .then(cities=>{
        res.status(200).send({cities})
    })
    .catch(err=>{
        res.status(500).send({ error: error.message })
    })
}

export const create = (req, res) =>{
    
    const { name } = req.body

    const city = new City({
        name,
        appartments: []
    })

    city.save()
    .then(c=>{
        res.status(200).send({ message: `create city ${c._id} succeed!` })
    })
    .catch(error => {
        res.status(500).send({ error: error.message })
    })
    
}