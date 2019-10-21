/**
 *
 * @type Module mongoose|Module mongoose
 */
var mongoose = require('mongoose');

/**
 *
 * @type .module.nm$_browser.exports.nm$_entity.Schema|Schema|Module mongoose.nm$_entity.Schema|Schema
 */
var Schema = mongoose.Schema;

/**
 *
 * @type Schema
 */
var EntitySchema = new Schema({

    name: {
        type: String,
        required: true,
        default: "",
        index: true,
        unique: true
    },
    display: {
        type: String,
        required: true,
        default: "",
        index: false,
        unique: false
    },
    entity: {
        type: Object,
        required: true,
        default: "",
        index: false,
        unique: false
    },
    generic_event: {
        type: Boolean,
        required: true,
        default: false,
        index: false,
        unique: false
    },
    is_seller_required : {
        type: Boolean,
        required: true,
        default: true,
        index: false,
        unique: false
    }

}, { toJSON: { virtuals: false}, collection: "entity"});

module.exports = mongoose.model('entity', EntitySchema);

