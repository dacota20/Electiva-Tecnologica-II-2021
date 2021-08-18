const express= require('express');
const router=express.Router();
const pool= require('../database');

router.get('/add',async(req,res)=>{
    //res.send('Todo Bien');
    const usua = await pool.query('select * from usuarios');
    res.render('links/add',{usua});
});

router.get('/editar/:id',async(req,res)=>{
    const {id} = req.params
    const usua = await pool.query('select * from usuarios where id='+id);
    console.log (usua[0])
    res.render('links/editar',{pro:usua[0]});
});

router.post('/editar',async(req,res) =>{
    const { id,usuario, contra} = req.body
    const usua = await pool.query(`update usuarios set usuario='${usuario}', contra='${contra}' where id=${id}`);
    res.redirect('/links/add');
});

router.post('/add',async(req,res) =>{

        const {usuario,contra} = req.body;
        const newUser = {usuario,contra};

        await pool.query('insert into usuarios set ?', [newUser]);
        res.redirect('/links/add');
});

router.post('/add',async(req,res)=>{
    //res.send('Todo Bien');
    //console.log(req.body);

        const {usuario,contra} = req.body;
        const newUser = {usuario,contra};
        await pool.query('insert into usuarios set ?', [newUser]);
        res.redirect('/links/add');

    //const usua = await pool.query('select * from usuarios');
    //res.render('links/add',{usua});
});

router.get('/delete/:id',async(req,res)=>{
    const {id}= req.params;
    const usua = await pool.query('delete from usuarios where id=?',[id]);
    res.redirect('/links/add');
});


//Producto
router.get('/add_pro/:id_producto',async(req,res)=>{
    const {id_producto} = req.params
    const prod = await pool.query('select * from productos where id_producto='+id_producto);
    console.log (prod[0])
    res.render('links/add_pro');
});

router.post('/editar',async(req,res) =>{
    const { id_producto,nom_producto, cantidad} = req.body
    const prod = await pool.query(`update productos set nombre='${nom_producto}', precio='${cantidad}' where id=${id_producto}`);
    res.redirect('/links/add_pro');
});

router.post('/add_pro',async(req,res) =>{

        const {nom_producto,cantidad} = req.body;
        const newPro = {nom_producto,cantidad};

        await pool.query('insert into productos set ?', [newPro]);
        res.redirect('/links/add_pro');
});

router.get('/add_pro',async(req,res)=>{
    //res.send('Todo Bien');
    const prod = await pool.query('select * from productos');
    res.render('links/add_pro',{prod});
});

router.post('/add_pro',async(req,res)=>{
    //res.send('Todo Bien');
    //console.log(req.body);

        const {nom_producto,cantidad} = req.body;
        const newUser = {nom_producto,cantidad};
        await pool.query('insert into productos set ?', [newUser]);
        res.redirect('/links/add_pro');
});

router.get('/delete/:id_producto',async(req,res)=>{
    const {id_producto}= req.params;
    const prod = await pool.query('delete from productos where id_producto=?',[id_producto]);
    res.redirect('/links/add_pro');
});

module.exports= router;