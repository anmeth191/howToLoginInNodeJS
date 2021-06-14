const express = require('express');
const app = express();



const appController = require('./controller/appController');
app.use(express.json());

app.set('view engine' , 'ejs');
appController(app);
app.listen(8080 , ()=>{ console.log('server has started in port 8080')})