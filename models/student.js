import mongoose from 'mongoose';

const schema = mongoose.Schema;

const studentschema = new schema({


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
        
      },
   
    // name:String,
    // code: String,
    // groupRollNumber : Number,
    // program: String,
    // status:{
    //     type: String,
    //     enum:["ACTIVE","DISABLED"]
    // },
    
    // academicterm:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"academicterm"

    // },
    // academicyear:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"academicyear"
    // },
   
    

},
 {timestamps:true}

);

export default mongoose.model('student',studentschema)