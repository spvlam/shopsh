// create function route 
const newRoute = require('./news');
const siteRoute= require('./site');
const courseRoute = require('./course')
const meRoute = require('./me');
const LogInRoute = require('./logIn');
function routes(app){
    app.use('/test',function(req,res){
        res.send('abc')
    })
    app.use('/home',siteRoute);
    app.use('/',courseRoute);
    app.use('/news',newRoute);
    app.use('/me',meRoute);
    app.use('/login',LogInRoute);
    // app.get('/news',function(req,res){
    //     res.render('news');
    //     console.log(req.query.password)
    // });
    // app.post('/search',(req,res)=>{
    //     res.send("")
    //     console.log(req.body)
    // })
    app.get('/search',function(req,res){
        res.render('search');
    });
    
}

module.exports = routes;
