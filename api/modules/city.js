const { default: mongoose } = require("mongoose");

const citySchema = mongoose.Schema({
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

export default mongoose.model('City',citySchema)