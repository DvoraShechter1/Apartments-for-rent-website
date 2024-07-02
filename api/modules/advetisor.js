const { default: mongoose } = require("mongoose");

const advetisorSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    extraPhone: {
        type: String,
        require: false
    },
    extraPhone: [{
        type: mongoose.Types.ObjectId,
        ref:'Appartment',
        require: false
    }]

})