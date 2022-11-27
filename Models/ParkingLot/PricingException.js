const mongoose = require('mongoose');

var PricingExceptionSchema = new mongoose.Schema({
    parkingLotId: {type: 'ObjectId',ref: 'parkinglots',required:true},
    date: Date,
    MrCost:Number,
    MidDayCost: Number,
    eveningCost:Number,
    allDayCost:Number
});

var PricingExceptionModel = mongoose.model('paricingexceptions',PricingExceptionSchema);
module.exports = PricingExceptionModel;