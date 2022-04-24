import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import programStruct from "../../models/programStruct.js"


const router = Router();


router.get('/', getAll(programStruct));
router.post('/', createOne(programStruct));
router.get('/:id',getOne(programStruct));
router.put('/:id', updateOne(programStruct));
router.delete('/:id', deleteOne(programStruct));


export default router;