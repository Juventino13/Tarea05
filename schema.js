var mongoose = require ('mongoose');
module.export = new mongoose.Schema({
    name:{
        type:String, 
        required: true
    },
        email: {
            type:String ,
            required:true, 
            match:/ .+@.+\..+/,
            lowercase:true 

        },
        loggedinCount : {
            type:Number,
            default:0
        }
}); 

///STRING, NUMERIC,BOOLEAN,ARRAY, OBJECT 