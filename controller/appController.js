//require the body parser middleware in order to create a post request
const bodyParser =  require('body-parser');
let urlenCodedParser = bodyParser.urlencoded({extended:false});

//require express
const express = require('express');

//using express router to redirect in the website
const router = express.Router();

//using a session with express-session
const session = require('express-session');

//require users from the data file that contain in this case only one user 
let { Users } = require('../data');


module.exports = (app)=>{
    

  app.use(bodyParser.json());
//create the session 
  app.use(session({
    secret:'inventory',
    resave:false,
    saveUninitialized:true
  }))

  //use the route from the router variable in order to redirect once the post is made and send to the next page
  app.use('/route' , router);

  // create an get request to render the index page
   app.get('/' , (request , response) =>{
     const message = 'welcome to the server'
     response.render('index' , {message});
   })

   //create a get request for the login component 
   app.get('/login' , (request , response) =>{
     response.render('login');
   })  

   //and create another get request for the register component
   app.get('/register' , (request , response)=>{
           response.render('register')
   })

   //we user router post from express.Router to create our post once the user enter the username and password
  router.post('/login' ,urlenCodedParser, (request , response)=>{

    // destructure the username and passowrd from the request body
        const { username , password } = request.body
      //validate the data from the user
         if(username === Users.name){
           //if the username is correct we create a session and with that session we can render the next page 
              request.session.name = username;
              //in this case we just sent  a message saying that the loging is fine
               response.redirect('/register');
         }else{
           //else send an error message
          response.end('username is invalid')

         }


      });
    //set my session
    //set my body parser middleware
    //app.use(bodyParser.json());
    // app.use(session({
    //   secret:'Your secret key',
    //   resave:true,
    //   saveUninitialized:true

    // }))


     
    // app.get('/' , (request, response )=>{
    //     const message = 'welcome to me server'
    //     request.session.name = 'NodeJS is good';
    //      return response.send('session started')
    //     // response.render('index' , {message})
    
    // })
    
    // app.get('/login', (request , response )=>{
      
    //   let session = request.session.name;
    //   return  response.send(session);
    
    // })

    // app.get('/destroy' , (request , response) =>{
    //   request.session.destroy((error)=>{
    //     console.log('session has been destroyed')
    //   })

    //   response.end();
    // })

    // app.post('/login' ,urlenCodedParser , (request , response) =>{
    //   const { email , password} = request.body;

    //   response.end(`your user email is ${email} and password is ${password}`)
    
    // })


   

}