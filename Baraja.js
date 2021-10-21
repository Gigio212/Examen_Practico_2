const router = require("express").Router();
const BarajaController = require('../controllers/Baraja');

router.post('/agregarBaraja',BarajaController.postAgregarBaraja)
router.get('/obtenerBaraja',BarajaController.getObtenerBaraja)
module.exports = router