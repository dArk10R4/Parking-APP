const mongoose =require('mongoose');

var OffersSchema = new mongoose.Schema({
    parkingLotId :{
        type: 'ObjectId',ref:'parkinglots',
        
    }
});

var OffersModel = mongoose.model('parkprices',OffersSchema);

module.exports = OffersModel;