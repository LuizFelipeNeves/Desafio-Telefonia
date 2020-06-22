import express from 'express';

import Planos from '../models/Planos';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json(Planos);
});

export default router;
