import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import advertisorRouter from './api/routes/advetisor.js'
import apartmentRouter from './api/routes/appartment.js'
import categoryRouter from './api/routes/category.js'
import cityRouter from './api/routes/city.js'

const app = express()
const port = 3001

// הכרת משתני הסביבה
dotenv.config()

// mongoose.connect(process.env.URI, {})
// חיבור למונגו לוקאלי
mongoose.connect(process.env.LOCAL_URI, {})
    .then(() => {
        console.log({ success: `connect to mongoDB!` })
    })
    .catch(error => {
        console.log({ error })
    })
    
app.get('', (req, res) => {
    res.status(200).send('😍👍❤')
})
app.use('/advertisor', advertisorRouter)
app.use('/appartment', apartmentRouter)
app.use('/category', categoryRouter)
app.use('/city', cityRouter)

app.listen(port, () => {
    console.log(`my application's port ${port}`)
})