
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const feeStructschema = new schema({
    program: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "program"
    },
    name:{
        type:String,
    },
    academicyear: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "academicyear"
    },
    academicterm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "academicterm"
    },
    studentCategory: {
        type: String
    },
    feeCategory:[  {
        feecatid: mongoose.Schema.Types.ObjectId,
        amount:String,
        description: String,
    }],
    description: {
        type:String,
    },
    enabled: {
        type:Boolean,
        default:true
    },
   amount : String,
});


export default mongoose.model("feeStruct",  feeStructschema);