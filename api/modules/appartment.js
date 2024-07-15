import mongoose from 'mongoose'

const appartmentSchema = mongoose.Schema({
    name: {
        type: String,
        require: false
    },
    description:{
        type: String,
        require:true
    },
    picture:{
        type: String,
        require:true
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref:'Category',
        require:true
    },
    city:{
        type: mongoose.Types.ObjectId,
        ref:'City',
        require:true
    },
    address:{
        type: String,
        require:true
    },
    numBeds:{
        type: Number,
        require:true
    },
    more:[{
        type: String,
    }],
    price:{
        type: Number,
        require:true
    },
    advetisor:{
        type: mongoose.Types.ObjectId,
        ref:'Advetisor',
        require:true
    }
})
export default mongoose.model('Appartment',appartmentSchema)