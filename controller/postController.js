const session = require('express-session');
const bodyParser = require('body-parser');
const urlenCodedParser = bodyParser.urlencoded({extended:false});
const { userData } = require('../model/userData');
const { user } = userData;

module.exports = (app)=>{

app.use(session({
    secret:'catsRule',
    resave:false,
    saveUninitialized:true
}))

app.post('/login' , urlenCodedParser ,(request , response) =>{
     //destructure the email and password from the request body
    let { email , password } = request.body;

 let userLogin = user.filter((element)=>{ 
      return element.emailUser === email
    });
     
    let findEmail = userLogin.find((element)=>{ return element.emailUser === email})
    
    if(findEmail){
 
        for( const { id , emailUser , passwordUser } of userLogin){
            if(emailUser === email && passwordUser === password){
  
                   request.session.user = email;
                   response.redirect(`/profile?id=${id}`)
  
            } else 
            if(emailUser === email && passwordUser !== password){
                  response.render('login');
            }//end of the if
        }//end of the for Of
   
    }else{
      response.redirect('/login')
    }
 
   
 
})//end of the 
}