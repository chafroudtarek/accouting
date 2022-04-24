import mongoose from 'mongoose';

const schema = mongoose.Schema;

const academicyearschema = new schema({
    feestructureid : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "feeStruct"
    },
    name: {
        type: String,
        required:true
    },
    startyear: {
        type: Date,
        required: true
    },
    endyear:{
        type:Date,
        required:true
    },
    enabled:{
        type:Boolean,
        default:true
    },
    terms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"academicterm"
    }]

});


export default mongoose.model("academicyear", academicyearschema);