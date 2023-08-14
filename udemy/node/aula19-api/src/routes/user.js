import { Router } from 'express';
import userController from '../controllers/UserController';
import loguinRequired from '../middlewares/loguinRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loguinRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
