const mongoose = require('mongoose');

var ParkingPricingSchema = new mongoose.Schema({
    parkingLotId: {
        type: 'ObjectId', ref: 'parkinglots',
    },
    dayOfWeek: Number,
    MrCost: Number,
    MidDayCost: Number,
    eveningCost: Number,
    allDayCost: Number
});

var PriceModel = mongoose.model('parkprices', ParkingPricingSchema);

module.exports = PriceModel;