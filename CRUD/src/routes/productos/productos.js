const express= require('express');
const router=express.Router();
const productController = require('../../controllers/productosController')

//Rutas para cargar el hbs
router.get('/listarproductos',productController.listarproductos )
router.post('/agregarProductos',productController.cargarProductos )
router.get('/eliminarproductos/:id',productController.borrarProductos )

module.exports = router;