import express from 'express';

import planosRoutes from './planos.route';
import simulacaoRoutes from './simulacao.route';
import taxasRoutes from './taxas.route';

const router = express.Router();

router.use('/planos', planosRoutes);
router.use('/taxas', taxasRoutes);
router.use('/simulacao', simulacaoRoutes);

export default router;
