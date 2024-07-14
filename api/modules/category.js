import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: false
    },
    appartments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Appartments',
        require: false
    }]
})