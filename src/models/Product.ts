import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Men', 'Women', 'Kids', 'Accessories'],
  },
  sizes: {
    type: [String],
    default: ['S', 'M', 'L', 'XL'],
  },
  colors: {
    type: [String],
    default: ['Black', 'White', 'Blue'],
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  images: {
    type: [String],
    default: [],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: String,
    rating: Number,
    comment: String,
    date: {
      type: Date,
      default: Date.now,
    },
  }],
}, {
  timestamps: true,
});

// Add text search index
productSchema.index({ name: 'text', description: 'text' });

export default mongoose.models.Product || mongoose.model('Product', productSchema);
