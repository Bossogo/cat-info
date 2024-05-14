import mongoose, { Schema } from "mongoose";

const breedRatingSchema = new Schema({
  breedID: { type: String, required: true },
  breedName: { type: String, required: true },
  rating: { type: Number, required: true },
});

const breedRating = mongoose.models.Rating || mongoose.model("breedRating", breedRatingSchema);

export default breedRating;