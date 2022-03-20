import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import fee from "../../models/fee.js"


const router = Router();


router.get('/', getAll(fee));
router.post('/', createOne(fee));
router.get('/:id',getOne(fee));
router.put('/:id', updateOne(fee));
router.delete('/:id', deleteOne(fee));

export default router;