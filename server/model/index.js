const mongoose = require('../database/db');
const Schema = mongoose.Schema

var UserSchema = new Schema({
    username: {
        type: String,
    },
    game_level: {
        type: String,
    },
    // mobile: {
    //     type: Number,
    // },
    // email: {
    //     type: String,
    //     // unique: true
    // },
    score: {
        type: Number,
    },
    status: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

const UserDetail = mongoose.model('userdetail', UserSchema);
module.exports = UserDetail;