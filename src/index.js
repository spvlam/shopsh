// const { application } = require('express');
const express = require('express')
const morgan= require('morgan')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const app =express()
const path = require('path')
const hdb = require('handlebars')
const port = process.env.PORT || 3000

// or we can use ./routes because the computer will automatic put index.js file 
const routes = require('./routes/index.js')

//change path to layouts
const layoutPath = path.join(__dirname,'resource','views');

//changes the views directory

app.set('views',layoutPath);

//use urlencoded because req.body do not have middleware
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
// use overMethod
app.use(methodOverride('_method'))

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));
// set helper by my own
hdb.registerHelper('sum',function(a,b){
    return a+b;
})

app.set('view engine','hbs');

// use static files
//we can use : app.use(express.static(path.join(__dirname, 'public'))); or
app.use(express.static(__dirname+'/public'))
// use morgan to log http req and res
// HTTP logger
app.use(morgan('tiny'));

// routes init
routes(app)

// connect to data (moogoDB)
const db = require('./config/db/index');
db.connect();
app.listen(port,()=> console.log("App is listening on port 3000."))


