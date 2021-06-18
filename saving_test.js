//we need to require our model
const User = require('../model/userInfo');
//require asset librarie to test and submit our request at the database
const assert = require('assert');

//describe is the method that we use to initialize the request
describe('Save a new User in the data base' , ()=>{

  //and with it we create a new schema in our model with new data of User type  
    it('save user' , (done)=>{
        //create a variable with User model and pass in an object the data we want to save
        let newUser = new User({ name:'Bacon' , email:'bacon@gmail.com' , password:'1234' , level:'USER'})
        //with method save we say to  mongoose to save this in the database
        newUser.save().then(()=>{
            //then we verify with assert to pass the test when the user is not new or is not a new register
            assert(!newUser.isNew)
             done();//and then we tell that we are donde 
        })//end of the then (done is passed in the argumen of the calbback function of it)
      })//end of the it
})//end of the describe