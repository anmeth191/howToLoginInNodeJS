const express = require('express');
const router = express.Router();
const bodyParser  = require('body-parser');
const urlenCodedParser = bodyParser.urlencoded({extended:false});
const session = require('express-session');
const { Users } = require('../data');
const { render } = require('ejs');
const { user } = Users;
module.exports = (app)=>{

app.use(session({
    secret:'cat bacon',
    resave:false,
    saveUninitialized:true
}))
app.use('/component' , router);

app.get('/' , (request , response) =>{
    request.session.destroy((error) =>{
        console.log('you have destroyed your session')
    })
    response.render('index' , {message:'Welcome to my little local server'});
})

app.get('/login' , (request , response)=>{
response.render('login');
})


router.post('/login' ,urlenCodedParser ,  (request , response) =>{

    const userLogin = user.filter( element =>{ return element.email === request.body.username;})

    for( const { email , password } of userLogin){
         
        
        if(email === request.body.username && password !== request.body.password){
             response.render('login');
 
          } else
        if(email === request.body.username && password === request.body.password){
             request.session.username = request.body.username;
             response.redirect('/component/loggedIn');
         }
         //end of the if
        
    }//end of the for of
});//end of the post

router.get('/loggedIn' , (request , response) =>{
    if(request.session.username){
        response.render('successPage');
    }else{
        const message = "Please log in"
        response.render('login');
    }
})
 
}//end of the module exports