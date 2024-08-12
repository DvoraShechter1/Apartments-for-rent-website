import Advetisor from '../modules/advetisor.js'
import jwt from 'jsonwebtoken'


export const login = (req, res)=>{
    const { email, password } = req.body

    Advetisor.find({ email: { $eq: email } })
        .then(advetisors => {
            if (advetisors.length == 0) {
                return res.status(404).send({ error: `email and password are not match!` })
            }

            const [advetisor] = advetisors

            if (advetisor.password != password) {
                return res.status(404).send({ error: `email and password are not match!` })
            }

            const token = jwt.sign({ email }, process.env.SECRET)
            res.status(200).send({ message: `login successfully!`, token })
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
        })
}

export const register = () =>{
    const { email, password, phone, extraPhone} = req.body

    const advetisor = new Advetisor({
        email,
        password,
        phone,
        extraPhone,
        appartments: []
    })

    //בדיקה שלא קיים משתמש על אימייל זה
    Advetisor.find({ email: { $eq: email } })
    .then(a=>{
        if (advetisors.length > 0) 
            return res.status(400).send({ error: `There is already a user on this email` })
    })
    .catch(error => {
        res.status(500).send({ error: error.message })
    })

    advetisor.save()
    .then(a=>{
        const token = jwt.sign({ email }, process.env.SECRET)
        res.status(200).send({ message: `register successfully!`, token })
    })
    .catch(error=>{
        res.status(500).send({ error: error.message })
    })
}