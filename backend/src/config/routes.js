import express from 'express';
import licenceController from '../api/controllers/licence.controller';

export const router = express.Router();

// Lcences

router.get('/licences', licenceController.findAll);
router.get('/licences/:id', licenceController.findOne);
router.delete('/licences/:id', licenceController.delete);
router.put('/licences/:id', licenceController.update);
router.post('/licences', licenceController.create);