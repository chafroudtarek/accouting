import mongoose from 'mongoose';
import {studentstatus} from '../constants.js'
const schema = mongoose.Schema;

const studentGroupschema = new schema({
    
    name:String,  
    academicterm:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"academicterm"

    },
    academicyear:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"academicyear"
    },
    students: [
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"student"
    }],
    program: String,
    maxstrength:String,
    instructor : [{
        code : String,
        name:String
        
    }]

   
});


export default mongoose.model("studentGroup", studentGroupschema);