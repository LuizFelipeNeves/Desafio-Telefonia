import express from 'express';

import { getSimulacao } from '../controllers/Simulacao';

const router = express.Router();

router.get('/', (req, res) => {
  const data = getSimulacao(req.query);
  return res.json(data);
});

export default router;
