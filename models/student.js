import mongoose from 'mongoose';

const schema = mongoose.Schema;

const studentschema = new schema({
   
    name:String,
    code: String,
    groupRollNumber : Number,
    program: String,
    status:{
        type: String,
        enum:["ACTIVE","DISABLED"]
    },
    
    academicterm:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"academicterm"

    },
    academicyear:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"academicyear"
    },
   
    

},
 {timestamps:true}

);

export default mongoose.model('student',studentschema)