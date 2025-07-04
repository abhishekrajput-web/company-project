// backend/models/companyModel.js
import mongoose from 'mongoose';
import reviewSchema from './reviewModel.js'; // Import the review schema

// const reviewSchema = mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     rating: { type: Number, required: true },
//     subject: { type: String, required: true },
//     comment: { type: String, required: true },
//   },
//   { timestamps: true }
// );

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
