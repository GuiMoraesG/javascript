import { Router } from 'express';
import FotoController from '../controllers/FotoController';
import loguinRequired from '../middlewares/loguinRequired';

const router = new Router();

router.post('/', loguinRequired, FotoController.store);

export default router;
