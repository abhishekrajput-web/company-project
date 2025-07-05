import mongoose from 'mongoose';
import reviewSchema from './reviewModel.js';



const companySchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    city: { type: String, required: true },
    foundedOn: { type: Date, required: true },
    logo: { type: String, required: true, default: '/assets/company-logo-1.png' },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

export default Company;
