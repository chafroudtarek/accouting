import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import academicyear from "../../models/academicyear.js"
import {getacademicyearterms, getallacademicyearterm} from '../../controllers/academicyear.controllers.js'

const router = Router();


router.get('/', getAll(academicyear));
router.get('/terms', getallacademicyearterm);
router.get('/terms/:id', getacademicyearterms);
router.post('/', createOne(academicyear));
router.get('/:id',getOne(academicyear));
router.put('/:id', updateOne(academicyear));
router.delete('/:id', deleteOne(academicyear));

export default router;