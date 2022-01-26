import mongoose from 'mongoose';
import {role, gender, language} from '../constants.js'
const schema = mongoose.Schema;

const userSchema = new schema({
    
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: role,
        default: 'STUDENT',
      },
    gender:{
        type: String,
        enum: gender,
        default: 'STUDENT',
      },
    birthday: { 
        type: Date,
        
    },
    phone: { 
        type: Number,
        
    },
    region:{ 
        type: String,
       
    },
    language:{ 
        type: String,
        enum:language,
        
    },
    civility:{ 
        type: String,
        
    },
    profession:{ 
        type: String,
        
    },
    situation: { 
        type: String,
        
    },
    isDeleted:{
        type:Boolean,
        default:false
    },

    deletedAt: Date,
    facebookUrl:String,
    linkedInUrl:String,

}, {timestamps: true}) 



export default mongoose.model("user", userSchema);