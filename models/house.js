const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  price: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: String,
    required: true,
  },
  bathrooms: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  houseNumber: {
    type: String,
    required: true,
  },
  numberAddition: {
    type: String,
    required: false,
  },
  zip: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  constructionYear: {
    type: String,
    required: true,
  },
  hasGarage: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  imageId: {
    type: String,
    required: false,
  },
  alt: {
    type: String,
    required: false,
  },
  madeByMe: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('House', houseSchema);
