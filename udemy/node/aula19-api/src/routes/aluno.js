import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import loguinRequired from '../middlewares/loguinRequired';

const router = new Router();

router.get('/', AlunoController.index);
router.post('/', loguinRequired, AlunoController.store);

router.get('/:id', AlunoController.show);
router.put('/:id', loguinRequired, AlunoController.update);
router.delete('/:id', loguinRequired, AlunoController.delete);

export default router;
