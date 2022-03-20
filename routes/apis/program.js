import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import program from "../../models/program.js"


const router = Router();


router.get('/', getAll(program));
router.post('/', createOne(program));
router.get('/:id',getOne(program));
router.put('/:id', updateOne(program));
router.delete('/:id', deleteOne(program));


export default router;