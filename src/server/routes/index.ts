import { Router } from 'express';
import { cidadesController } from '../controllers';

const router = Router();

router.post('/', cidadesController.create);

export default router;
