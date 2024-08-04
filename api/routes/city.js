import express from 'express';
import CityController from '../controllers/city';
import { checkAuth } from '../../middlewares';
const router = express.Router();

router.post('/create', checkAuth,CityController.create)
router.get('', CityController.getAll)
router.get('weather/:id', CityController.getWeather)

export default router