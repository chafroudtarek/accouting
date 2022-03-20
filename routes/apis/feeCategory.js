import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import feeCategory from "../../models/feeCategory.js"


const router = Router();


router.get('/', getAll(feeCategory));
router.post('/', createOne(feeCategory));
router.get('/:id',getOne(feeCategory));
router.put('/:id', updateOne(feeCategory));
router.delete('/:id', deleteOne(feeCategory));

export default router;