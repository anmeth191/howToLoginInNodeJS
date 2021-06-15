const express = require('express');
const app = express();



const appController = require('./controller/appController');
const mainController = require('./controller/mainControler');
app.use(express.json());

app.set('view engine' , 'ejs');
mainController(app);
app.listen(8080 , ()=>{ console.log('server has started in port 8080')})