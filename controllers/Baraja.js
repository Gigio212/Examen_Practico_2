const Baraja = require('../models/Baraja')
const mongoose = require("mongoose")

//insertar nuevos elementos a la BD
exports.postAgregarBaraja = async (req,res)=>{
    const baraja = new Baraja(req.body)
    baraja._id = new mongoose.Types.ObjectId() //se le asigna un id al objeto 
        try{
            // Agregar documento a la coleccion y verifica que no se repitan los valores
            const userExists = await Baraja.exists({ Color: req.body.Color, Palo: req.body.Palo , Numeracion: req.body.Numeracion});
            if (!userExists){
                await baraja.save()
                console.log(baraja)
                console.log("Baraja registrada")
                res.send({operacion:"correcta"})
            }else{
                res.send({operacion:"incorrecta repetido"})
            }
    
        }catch(err){
            console.log(err)
            res.send({operacion:"incorrecta"})
        }
    }

//consultar el status de la BD
exports.getObtenerBaraja = async (req,res)=>{
    const Bar = await Baraja.find()
    console.log(Bar)
    res.json(Bar)
}
