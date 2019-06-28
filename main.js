var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var User= mongoose.model('User2',schema,'user2'); 


var user1 = new User ({
    name: ' John Wick ',
    email:'john@Wick.com'
});

user1.save(function(error){

    if(error){
        console.log(error); 
        process.exit(1);
    }
    console.log("Saved");
   
});


User.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1); 
    }
    console.log("<--------Consulta general-------->");
    console.log (docs); 

});

User.update({ _id:'5d15957b46b8892f30b79f33'}, {$set: {email:'changed@ittepic.edu.mx'}},
function(error,docs){ 
    if (error){
        console.log(error); 
        process.exit(1);
    }
    console.log ("<------Acualizado-------->");
    console.log(docs);
    process.exit(1);
});

User.findByIdAndRemove({_id:'5d15957b46b8892f30b79f33'}, function(error,docs){
    if(error){
        console.log(error); 
        process.exit(1); 

    }
    console.log(docs); 
    process.exit(0);
});