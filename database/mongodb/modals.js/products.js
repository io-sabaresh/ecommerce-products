'use strict';
const Schema = require('mongoose').Schema;
const { ObjectId, Decimal128 } = require('mongoose').Schema.Types;

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    productId: {
        type: String,
        required: true,
        trim: true
    },
    productCategory: {
        type: ObjectId,
        required: true,
        ref: 'SubCategories'
    },
    owner: {
        type: ObjectId,
        required: true
    },
    description: {
        type: String
    },
    tags: [{
        type: String,
        trim: true
    }],
    price: {
        type: Decimal128,
        min: 0
    },
    discountPerc: {
        type: Decimal128,
        min: 0,
        max: 100
    },
    similarProducts: [{
        type: String,
        trim: true
    }],
    images: [{
        type: String,
        trim: true
    }],
    coverImage: String
}, {
    timestamps: true
});

ProductSchema.index({ productId: 1 });
ProductSchema.index({ productCategory: 1 });
ProductSchema.index({ owner: 1 });


module.exports = mongoose.model('Products', ProductSchema);