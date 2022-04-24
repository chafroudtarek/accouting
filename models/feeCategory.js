import mongoose from 'mongoose';

const schema = mongoose.Schema;

const feeCategorySchema = new schema({
    
    feestructureid : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "feeStruct"
    },
    name: {
        type: String,
        required:true
    },
    description : {
        type: String,
        
    },
    enabled:{
        type:Boolean,
        default: true
    }
    

});


export default mongoose.model("feeCategory", feeCategorySchema);