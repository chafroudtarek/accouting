
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const feeStructschema = new schema({
    program: {
        type: String,
    },
    name:{
        type:String,
    },
    academicyear: {
        type: String
    },
    academicterm: {
        type: String
    },
    studentCategory: {
        type: String
    },
    feeCategory: {
        type: String
    },
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