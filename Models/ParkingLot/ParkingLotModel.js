var mongoose = require('mongoose');

var ParkingLotSchema = new mongoose.Schema({
    numberOfBlocks : {type:Number, required: true},
    isSlotAvaliable : Boolean,
    address: {
        type: [Number],required:true
    },
    zip: Number,
    isReentryAllowed: Boolean,
    operatingCompanyN: Number,
    isValletPaymentAvailable: Boolean,
    operationalInNight: Boolean,
    minimumHrToPay: Number,
    isMonthlyPassAllowed: Boolean,
    monthlyPassCost: Number
});

var ParkingLot = mongoose.model('parkinglots',ParkingLotSchema);
module.exports = ParkingLot;