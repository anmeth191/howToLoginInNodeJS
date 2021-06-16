const session = require('express-session');
const { userData } = require('../model/userData');
const { user } = userData;

module.exports = (app)=>{
app.use(session({
  secret:'catsRule',
  resave:false,
  saveUninitialized:true
}))

app.get('/' , (request , response) =>{
  response.render('index');
})

app.get('/login' , (request , response) =>{
    response.render('login');
})

app.get('/register' , (request , response) =>{
    response.render('register');

})

app.get('/profile' , (request , response) =>{
     if(request.session.user){
       
      const userLogged = user.find((element) =>{ return element.id ===  parseInt(request.query.id)});
       
       const { id , name , emailUser } = userLogged;

      response.render('profile' , {id , name , emailUser});
     } else {
       response.redirect('/login');
     }
})
}