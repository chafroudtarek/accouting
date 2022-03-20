import { Router } from 'express';
import {getAll,getOne,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import studentGroup from "../../models/studentGroup.js"
import { searchprograms } from '../../controllers/program.controller.js';
import { deletestudent } from '../../controllers/studentgroup.controllers.js';


const router = Router();


router.get('/', getAll(studentGroup));
router.post('/', createOne(studentGroup));
router.get('/:id',getOne(studentGroup));
router.put('/:id', updateOne(studentGroup));
router.delete('/:id', deleteOne(studentGroup));
router.post('/search', searchprograms);
router.delete('/student/:id', deletestudent);


export default router;