import express from 'express';
import {create,getAll,getWeather} from '../controller/city.js';
import { checkAuth } from '../../middlewares.js';
const router = express.Router();

router.post('', checkAuth,create)
router.get('', getAll)
router.get('weather/:id', getWeather)

export default router