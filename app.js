// express - ספריה שמאפשרת יצירת שרת
import express from 'express'
// ספריה שממירה ממחרוזות לג'סון
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// import dotenv from 'dotenv'

import connectToDB from './connectDB.js'

// dotenv.config()

const app=express() //יצירת שרת

app.use(bodyParser.json())



app.get('', (req, res) => {
    res.status(200).send('😍👍❤')
})

//יצירת מאזין
app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
})
