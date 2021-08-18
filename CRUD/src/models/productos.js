const pool = require("../database")

module.exports = function(){
    async function listarproductos(){
        let query= "select * from productos"
        return await pool.query(query);
    } 
    async function crearProductos(datos){
        let sql= "insert into productos set ?"
        return await pool.query(sql,datos);
    }
    async function eliminarproductos(datos){
        let sql= "delete from productos where id_producto= ?"
        return await pool.query(sql,datos);
    }
    return{
        listarproductos,
        crearProductos,
        eliminarproductos
    }   
} 