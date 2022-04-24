
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const programStructschema = new schema({
    feeStructureId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "feeStructure"
    },
    programId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "program"
    },
   
});


export default mongoose.model("programStruct",  programStructschema);