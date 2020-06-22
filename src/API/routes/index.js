import express from 'express';

import docsRoutes from './docs.route';
import planosRoutes from './planos.route';
import simulacaoRoutes from './simulacao.route';
import taxasRoutes from './taxas.route';

const router = express.Router();

/**
 * @swagger
 * path:
 *  /v1/status/:
 *    get:
 *      summary: Get status of application
 *      tags: [Status]
 *      responses:
 *        "200":
 *          description: Ok
 */
router.get('/status', (req, res) => res.send('OK'));

router.use('/docs', docsRoutes);
router.use('/planos', planosRoutes);
router.use('/taxas', taxasRoutes);
router.use('/simulacao', simulacaoRoutes);

export default router;
