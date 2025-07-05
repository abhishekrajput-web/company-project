import express from 'express';
import {
  getCompanies,
  getCompanyById,
  addCompany,
  addCompanyReview,
} from '../controllers/companyController.js';

const router = express.Router();

router.get('/', getCompanies);
router.post('/', addCompany);
router.get('/:id', getCompanyById);
router.post('/:id/reviews', addCompanyReview);

export default router;