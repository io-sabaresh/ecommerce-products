'use strict';
const Schema = require('mongoose').Schema;
const { ObjectId } = require('mongoose').Schema.Types;

const BrandSchema = new Schema({
    brandName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    description: String,
    origin: String
}, {
    timestamps: true
});

BrandSchema.index({ brandName: 1 });

module.exports = mongoose.model('Brands', BrandSchema);