import { Router } from 'express';

import {getAll,getOne,getAllDisabled, updateOne,restore} from "../../utils/factory.js"

import academicterm from "../../models/academicterm.js"
import {createterm,deleteOneById} from'../../controllers/academicterm.controllers.js'

const router = Router();

router.get('/disabledacademicterm', getAllDisabled(academicterm));


router.get('/', getAll(academicterm));
router.post('/:id', createterm);
router.get('/:id',getOne(academicterm));
router.put('/:id', updateOne(academicterm));
router.delete('/:id/', deleteOneById);

router.put('/restore/:id', restore(academicterm));


export default router;