const router = require("express").Router();

//nos permite saber que camino tomar para llegar al controlador
const BarajaController = require('../controllers/Baraja');

//metodos a ocupar para usar y probar la BD
router.post('/agregarBaraja',BarajaController.postAgregarBaraja)
router.get('/obtenerBaraja',BarajaController.getObtenerBaraja)

//crear un modulo llamado router para ser consumido en otro lado 
module.exports = router