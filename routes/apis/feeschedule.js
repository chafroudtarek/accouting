import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import feeschedule from "../../models/feeschedule.js"


const router = Router();


router.get('/', getAll(feeschedule));
router.post('/', createOne(feeschedule));
router.get('/:id',getOne(feeschedule));
router.put('/:id', updateOne(feeschedule));
router.delete('/:id', deleteOne(feeschedule));

export default router;