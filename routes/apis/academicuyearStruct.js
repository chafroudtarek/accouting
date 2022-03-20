import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import feeAcademicYearStruct from "../../models/academicuyearStruct.js"


const router = Router();


router.get('/', getAll(feeAcademicYearStruct));
router.post('/', createOne(feeAcademicYearStruct));
router.get('/:id',getOne(feeAcademicYearStruct));
router.put('/:id', updateOne(feeAcademicYearStruct));
router.delete('/:id', deleteOne(feeAcademicYearStruct));

export default router;