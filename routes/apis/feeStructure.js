import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import feeStruct from "../../models/feeStructure.js"


const router = Router();


router.get('/', getAll(feeStruct));
router.post('/', createOne(feeStruct));
router.get('/:id',getOne(feeStruct));
router.put('/:id', updateOne(feeStruct));
router.delete('/:id', deleteOne(feeStruct));

export default router;