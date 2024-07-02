import city from "../modules/city"

export const getAll = (req,res)=>{
    city.find()
    .then(cities=>{
        res.status(200).send({cities})
    })
    .catch(err=>{
        
    })
}