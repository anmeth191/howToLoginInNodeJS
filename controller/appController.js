const bodyParser =  require('body-parser');
let urlenCodedParser = bodyParser.urlencoded({extended:false});
let { Users } = require('../data');

module.exports = (app)=>{
 
    app.use(bodyParser.json());

    app.get('/' , (request, response )=>{
        const message = 'welcome to me server'
        response.render('index' , {message})
    
    })
    
    app.get('/login', (request , response )=>{
          
      response.render('login');
    
    })

    app.post('/login' ,urlenCodedParser , (request , response) =>{
      validateUser(request.body.username)
      response.render('login')

    })


    const validateUser = (name)=>{
    console.log(name)
    }

  

}