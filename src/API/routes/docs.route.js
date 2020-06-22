import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';

import swaggerSpec from '../configs/swagger';

const router = Router();

router.use('/', serve, setup(swaggerSpec));

export default router;
