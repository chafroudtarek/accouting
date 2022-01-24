import mongoose from 'mongoose';

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
    gender:String,
    birthday: { type: Date },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:String,
    phone: Number,
    region:String,
    language:String,
    civility:String,
    profession:String,
    situation: String,
    role: {
        type: String,
        enum: ['STUDENT', 'EMPLOYER', 'AGENT'],
        default: 'STUDENT',
      },
    facebookUrl:String,
    linkedInUrl:String,

}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})



export default mongoose.model("user", userSchema);