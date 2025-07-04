// backend/routes/companyRoutes.js
import express from 'express';
import {
  getCompanies,
  getCompanyById,
  addCompany,
  addCompanyReview,
} from '../controllers/companyController.js';

const router = express.Router();

// router.route('/').get(getCompanies).post(addCompany);
// router.route('/:id').get(getCompanyById);
// router.route('/:id/reviews').post(addCompanyReview);

router.get('/', getCompanies);
router.post('/', addCompany);
router.get('/:id', getCompanyById);
router.post('/:id/reviews', addCompanyReview);

export default router;