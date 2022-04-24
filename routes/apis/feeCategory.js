import { Router } from 'express';
import {getAll,getAllDisabled,getOne,createOne, updateOne,deleteOne,restore} from "../../utils/factory.js"
import feeCategory from "../../models/feeCategory.js"


const router = Router();

router.get('/disabledfeecat', getAllDisabled(feeCategory));
router.get('/', getAll(feeCategory));
router.post('/', createOne(feeCategory));
router.get('/:id',getOne(feeCategory));
router.put('/:id', updateOne(feeCategory));
router.put('/restore/:id', restore(feeCategory));

router.delete('/:id', deleteOne(feeCategory));


export default router;