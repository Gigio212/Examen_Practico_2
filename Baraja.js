const mongoose = require('mongoose')
const Baraja = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Color:{
        type: String,
        required: true
    },
    Palo:{
        type: String,
        required: false
    },Numeracion:{
        type: String,
        required: false
    }
},{collection:'Baraja'})

module.exports = mongoose.model('Baraja',Baraja)