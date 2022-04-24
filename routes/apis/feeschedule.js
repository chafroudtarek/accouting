import { Router } from 'express';

import {getAll,getOne,createOne,restore, updateOne,deleteOne} from "../../utils/factory.js"
import feeschedule from "../../models/feeschedule.js"
import { getwithname ,getAllDisabled} from '../../controllers/feeschedule.controllers.js';
const router = Router();

router.get('/disabledfeeschedule', getAllDisabled);
router.get('/byname', getwithname);

router.get('/', getAll(feeschedule));
router.post('/', createOne(feeschedule));
router.get('/:id',getOne(feeschedule));
router.put('/:id', updateOne(feeschedule));
router.delete('/:id', deleteOne(feeschedule));

router.put('/restore/:id', restore(feeschedule));


export default router;