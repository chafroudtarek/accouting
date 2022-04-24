import mongoose from 'mongoose';

const schema = mongoose.Schema;

const programschema = new schema({
    
    name: {
        type: String,
        trim: true,
        required: "name is required",
    },
    tag: {
        type: String,
        trim: true,
        default: ""
    },
    departement: {
        type: String,
       
    },
    designation:{
        type:String,
        
    },
    order: {
        type: Number,
        default: 0
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    enabled: {
        type: Boolean,
        default: true
    },
    
    courses: String,

});


export default mongoose.model("program", programschema);