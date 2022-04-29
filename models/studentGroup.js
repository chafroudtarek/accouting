import mongoose from 'mongoose';
import {studentstatus} from '../constants.js'
const schema = mongoose.Schema;

const studentGroupschema = new schema({
    
    name:String,  
    academicterm:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"academicterm"

    },

    enabled:{
        type: Boolean,
        default:true
    },

    academicyear:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"academicyear"
    },
    students: [
        {
            firstname: {
                type: String,
              },
              lastname: {
                type: String,
               
              },
              username: {
                type: String,
                trim: true,
                unique: "username already registered",
              },
              
              email: {
                type: String,
                trim: true,
                required: "email is required",
                unique: "email already registered",
                match: [/.+\@.+\..+/, "Valid email required"],
              },
            
          
              
              
             
              enabled: {
                type: Boolean,
                default: true,
              },
              
              studentNiveauId: {
                type: mongoose.Types.ObjectId,
                
              }
            
        }],

    program: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "program"
    },
    feeStructureId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"feeStruct"
      
  },
    maxsize:String,
    
    instructor : [{
        code : String,
        name:String
        
    }]

   
});


export default mongoose.model("studentGroup", studentGroupschema);