const express = require('express');
const app = express();
const  getController  = require('./controller/getController');
const postController = require('./controller/postController');


app.set('view engine' , 'ejs');
app.use(express.json());

getController(app);
postController(app);
app.listen(8000 , ()=>{ console.log('server has started in port 8000')})