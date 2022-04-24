import mongoose from 'mongoose';

const schema = mongoose.Schema;

const academictermschema = new schema({
   
    academicyear: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "academicyear"
    },
    name:String,
    description: String,
    enabled:{
        type:Boolean,
        default: true
    }
    

},
 {timestamps:true}

);

export default mongoose.model('academicterm',academictermschema)