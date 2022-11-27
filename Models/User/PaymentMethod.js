const mongoose = require('mongoose');

var PaymentSchema = new mongoose.Schema({
    user_id: { type: 'ObjectId', ref: 'users' },
    payment_type: String,
    provider: String,
    account_no: Number,
    expiry: Date,
    CCV: Number,
}, { timestamps: true });

var Payment = mongoose.model('payments',PaymentSchema);
module.exports = Payment;