
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const feescheduleschema = new schema({
    feeStructureId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"feeStruct"
        
    },
    
    studentgroup: [
        {
            name:String,
            numtot:Number
            
        }
    ],
    dueDate : Date,
        

    
   
});


export default mongoose.model("feeschedule",  feescheduleschema);