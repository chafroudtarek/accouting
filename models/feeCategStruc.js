import mongoose from 'mongoose';

const schema = mongoose.Schema;

const feeCategStrucschema = new schema({
    feeStructureId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "feeStructure"
    },
    feeCategoruId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "feeCategory"
    },
   
});


export default mongoose.model("feeCategStruc", feeCategStrucschema);