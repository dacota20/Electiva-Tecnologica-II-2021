const express= require('express');
const morgan= require('morgan');
const exphbs= require('express-handlebars');
const path= require('path');

//Inicio
const app= express();

//Configuraciones
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');

//Peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Variables Globales
app.use((req,res,next)=>{
    next();
});

//Rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

//Rutas para la implementacion de MVC
app.use('/productos',require('./routes/productos/productos'));

//Public
app.unsubscribe(express.static(path.join(__dirname,'public')));
//Inicia el server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});