import { Router } from 'express';
import { getLoggenInUser, login, register } from '../controllers/account.js';
import auth from '../middlewares/auth.js';

const router = Router();

router.post('/login', login);

router.post('/register', register);

router.get('/', auth, getLoggenInUser);

export default router;