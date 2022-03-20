import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import feeCategStruc from "../../models/feeCategStruc.js"


const router = Router();


router.get('/', getAll(feeCategStruc));
router.post('/', createOne(feeCategStruc));
router.get('/:id',getOne(feeCategStruc));
router.put('/:id', updateOne(feeCategStruc));
router.delete('/:id', deleteOne(feeCategStruc));

export default router;