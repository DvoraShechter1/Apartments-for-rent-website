
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://d0583212560:Ds212560!@apartments.tibeepk.mongodb.net/?appName=apartments";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




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
