import express from 'express';
import {getAll, getById, getByCityId, getByCategoryId, getByAdvetisorId, getByNumBeds, getCheap, getMedium, getExpensive, create, update, remove} from '../controller/appartment.js'
const router = express.Router();

router.get('', getAll);
router.get('/:id', getById);
router.get('/getByCity/:id', getByCityId);
router.get('/getByCategory/:id', getByCategoryId);
router.get('/getByAdvetisor/:id', getByAdvetisorId);
router.get('getByNumBeds/:numBeds', getByNumBeds);
router.get('/getCheap', getCheap);
router.get('/getMedium', getMedium);
router.get('/getExpensive', getExpensive);

router.post('', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router