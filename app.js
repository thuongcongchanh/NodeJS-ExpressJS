const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const apiPath = '/api/';

// //Create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.json());
app.use(express.urlencoded());

//website
app.use(express.static('client'));

//routers
app.use(apiPath + 'users', require('./routes/users.route'));

// app.get('/', function(req,res){
//     res.sendFile(__dirname + '/' + 'index.html');
// });
// app.get('/', function(req,res){
//     res.send('Hello World ! Chào các bạn');
// });
// app.get('/users', function(req,res){
//     res.send([{name:'Thượng Công Chánh', age: '35'},
//             {name:'Lâm Huỳnh Thùy Trang', age: '31'}
// ]);
// });

// app.get('/Test', function(req, res){
//     res.send('Bạn đang trong trang Test');
// });

const server = app.listen(port, function(){
    const host = 'localhost';
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})