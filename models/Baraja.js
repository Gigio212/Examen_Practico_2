const mongoose = require('mongoose')
const Baraja = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //Formato con el que se recibira el Json y se tendra la BD 
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
//Modulo para exportar la base
module.exports = mongoose.model('Baraja',Baraja)