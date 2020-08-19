'use strict';
const Schema = require('mongoose').Schema;
const { ObjectId } = require('mongoose').Schema.Types;

const CategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    subCategories: [{
        type: ObjectId,
        ref: 'SubCategories'
    }]
}, {
    timestamps: true
});

CategorySchema.index({ categoryName: 1 });

module.exports = mongoose.model('Categories', CategorySchema);