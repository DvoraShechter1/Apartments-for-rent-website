import mongoose from 'mongoose'

// import dotenv from 'dotenv'
// dotenv.config()


// פונקציה מובנית שמתחברת למסד
// לפי המחרוזת שמקבלת בסוגריים
const connectToDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/ApartmentsDB')
    // await mongoose.connect(process.env.URI)
}

// משתנה מכיל את המסד
const database = mongoose.connection

// במקרה של כשלון
database.on('error', (error) => {
    console.log('error');
    console.log(error.message);
})

// במקרה של הצלחה
database.once('connected', () => {
    console.log('connection succeed!');
})

export default connectToDB