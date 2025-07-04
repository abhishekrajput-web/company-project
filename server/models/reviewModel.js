import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    subject: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

export default reviewSchema;