const mongoose = require('mongoose');

var VhicleSchema = new mongoose.Schema({
    userId: {type: 'ObjectId',ref:'users'},
    vhicleNumber: Number,   
});

var Vhicle = mongoose.model('vhicles',VhicleSchema);
module.exports = Vhicle;