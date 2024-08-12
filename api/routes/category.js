import express from 'express';
import {create, getAll, getById} from '../controller/category.js';
import { checkAuth } from '../../middlewares.js';
const router = express.Router();
router.post('',checkAuth ,create);
router.get('', getAll);
router.get('/:id', getById);
export default router