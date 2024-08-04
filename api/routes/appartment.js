import express from 'express';
import CityController from '../controllers/city';
const router = express.Router();

router.get('/getAll', CityController.getAll);
router.get('/:id', CityController.getById);
router.get('/getByCity/:id', CityController.getByCityId);
router.get('/getByCategory/:id', CityController.getByCategoryId);
router.get('/getByAdvetisor/:id', CityController.getByAdvetisorId);
router.get('getByNumBeds/:numBeds', CityController.getByNumBeds);
router.get('/getCheap', CityController.getCheap);
router.get('/getMedium', CityController.getMedium);
router.get('/getExpensive', CityController.getExpensive);

router.post('/create', CityController.create);
router.put('/:id', CityController.update);
router.delete('/:id', CityController.remove);

export default router