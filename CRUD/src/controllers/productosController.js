const productModel = require('../models/productos')

async function listarproductos(req,res){
const productModel = require('../models/productos')
    const resultado_producto = await productModel().listarproductos();
    //console.log(resultado_producto);
    res.render('productos/list_products',{resultado_producto})
} 
async function cargarProductos(req,res){
        const data = req.body;
        await productModel().crearProductos(data);
        res.redirect('/productos/listarproductos')
}
 async function borrarProductos(req,res){
        const data = req.params.id;
        await productModel().eliminarproductos(data);
        res.redirect('/productos/listarproductos')
    }

module.exports={
    listarproductos,
    cargarProductos,
    borrarProductos
} 