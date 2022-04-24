
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const feeschema = new schema({
    // feeStructureId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "feeStructure"
    // },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "program"
    // },
    studentemail: String,
    name:String,
    duedate:Date,
    postingdate:Date,
   
});


export default mongoose.model("fee",  feeschema);