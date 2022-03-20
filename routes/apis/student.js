import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import student from "../../models/student.js"


const router = Router();


router.get('/', getAll(student));
router.post('/', createOne(student));
router.get('/:id',getOne(student));
router.put('/:id', updateOne(student));
router.delete('/:id', deleteOne(student));


export default router;