import { Router } from 'express';
import academicuyearStruct from './apis/academicuyearStruct.js';
import academicyear from './apis/academicyear.js';
import fee from './apis/fee.js';
import feeCategory from './apis/feeCategory.js';
import feeCategoryStruc from './apis/feeCategoryStruc.js'
import feeStructure from './apis/feeStructure.js';
import program from './apis/program.js';
import programStruct from './apis/programStruct.js';
import studentGroup from './apis/studentGroup.js';
import feeschedule from './apis/feeschedule.js';
import  academicterm from'./apis/academicterm.js';
import  student from'./apis/student.js'

const router = Router();


router.use('/api/academicyearStruct',academicuyearStruct);
router.use('/api/academicyear', academicyear);
router.use('/api/academicterm', academicterm);
router.use('/api/fee', fee);
router.use('/api/feeCategory', feeCategory);
router.use('/api/feeCategoryStruc', feeCategoryStruc);
router.use('/api/feeStructure', feeStructure);
router.use('/api/program', program);
router.use('/api/programStruct', programStruct);
router.use('/api/feeschedule', feeschedule);
router.use('/api/studentGroup', studentGroup);
router.use('/api/student', student);

export default router;