import Joi from '@hapi/joi';
import express from 'express';
import { createValidator } from 'express-joi-validation';

import { getSimulacao } from '../controllers/Simulacao';

const validator = createValidator();

const router = express.Router();

const querySchema = Joi.object({
  plano: Joi.string().required(),
  origem: Joi.string().required(),
  destino: Joi.string().required(),
  minutos: Joi.string().required(),
});

router.get('/', validator.query(querySchema), (req, res) => {
  const data = getSimulacao(req.query);
  return res.json(data);
});

export default router;
