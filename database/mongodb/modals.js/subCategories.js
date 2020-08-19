'use strict';
const Schema = require('mongoose').Schema;
const { ObjectId } = require('mongoose').Schema.Types;

const SubCategorySchema = new Schema({
    subCategoryName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    category: {
        type: ObjectId,
        required: true,
        ref: 'Categories'
    },
}, {
    timestamps: true
});

SubCategorySchema.index({ category: 1 });

module.exports = mongoose.model('SubCategories', SubCategorySchema);