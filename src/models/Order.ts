import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    name: String,
    price: Number,
    quantity: {
      type: Number,
      required: true,
    },
    size: String,
    color: String,
    image: String,
  }],
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  shippingAddress: {
    name: String,
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    phone: String,
  },
  paymentMethod: {
    type: String,
    default: 'COD', // Cash on Delivery
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed'],
    default: 'Pending',
  },
  deliveryDate: Date,
  notes: String,
}, {
  timestamps: true,
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
