import express from 'express';

import Taxas from '../models/Taxas';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json(Taxas);
});

export default router;
