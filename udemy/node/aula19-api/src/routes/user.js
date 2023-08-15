import { Router } from 'express';
import userController from '../controllers/UserController';
import loguinRequired from '../middlewares/loguinRequired';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loguinRequired, userController.update);
router.delete('/', loguinRequired, userController.delete);

export default router;
