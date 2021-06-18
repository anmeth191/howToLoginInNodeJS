const assert = require('assert');
const User = require('../model/userInfo');
describe('finding a record in dataBase' , ()=>{
  let newUser , anotherUser;
  beforeEach((done)=>{

     newUser = new User({ name:'Bacon' , email:'bacon@gmail.com', password:'1234', level:'USER'});
     anotherUser = new User({name:'Mushy' , email:'mushy@gmail.com' , password:'1234' , level:'USER'});
   
    newUser.save()
    anotherUser.save()
    .then(()=>{
        done();
    })

    console.log(newUser)
    console.log(anotherUser)

  })

     it('find record' , async ()=>{
         const users = await User.findOne({name:'Mushy'});
          assert(users.name === 'Mushy')

})
});