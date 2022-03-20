import mongoose from 'mongoose';

const schema = mongoose.Schema;

const programschema = new schema({
    feestructureid : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "feeStruct"
    },
    name: {
        type: String,
        required:true
    },
    departement: {
        type: String,
        required: true
    },
    abreviation:{
        type:String,
        required:true
    },
    enabled:{
        type: Boolean,
        default:true
    },
    
    
    courses: String,

});


export default mongoose.model("program", programschema);