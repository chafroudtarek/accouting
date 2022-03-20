import mongoose from 'mongoose';

const schema = mongoose.Schema;

const academictermschema = new schema({
   
    name:String,
    description: String,
    

},
 {timestamps:true}

);

export default mongoose.model('academicterm',academictermschema)