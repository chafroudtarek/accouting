import mongoose from 'mongoose';

const schema = mongoose.Schema;

const feeAcademicYearStructschema = new schema({
    feeStructureId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "feeStructure"
    },
    academicyearId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "academicyear"
    },
   
});


export default mongoose.model("feeAcademicYearStruct",  feeAcademicYearStructschema);