import express from 'express';
import CityController from '../controllers/city';
const router = express.Router();
router.post('/create', CityController.create);
router.get('/getAll', CityController.getAll);
router.get('/:id', CityController.getById);
export default router