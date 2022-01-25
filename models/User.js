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
        require: true
    },
    phone: { 
        type: Number,
        require: true
    },
    region:{ 
        type: String,
        require: true
    },
    language:{ 
        type: String,
        enum:language,
        require: true
    },
    civility:{ 
        type: String,
        require: true
    },
    profession:{ 
        type: String,
        require: true
    },
    situation: { 
        type: String,
        require: true
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