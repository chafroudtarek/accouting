import { Router } from 'express';

import {getAll,getOne,restore,createOne, updateOne,deleteOne} from "../../utils/factory.js"
import feeStruct from "../../models/feeStructure.js"
import {getitemsbyname, getAllDisabled} from '../../controllers/feestruct.controllers.js'

const router = Router();

router.get('/disabledfeeStruct', getAllDisabled);

router.get('/byname', getitemsbyname);

router.get('/', getAll(feeStruct));
router.post('/', createOne(feeStruct));
router.get('/:id',getOne(feeStruct));
router.put('/:id', updateOne(feeStruct));
router.delete('/:id', deleteOne(feeStruct));

router.put('/restore/:id', restore(feeStruct));


export default router;