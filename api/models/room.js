var mongoose = require('mongoose')

let songSchema = new mongoose.Schema({
    title: { type: String, require: true, unique: false },
    artist: { type: String, require: true, unique: false},
    uri: { type: String, require: true, unique: true },
    length: { type: Number, require: true, unique: false },
    likes: { type: Number, default: 0 },
    image: { type: String, require: true, unique: false}
})

let roomSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    room_owner_email: { type: String, require: true },
    access_token: String,
    refresh_token: String,
    token_expiry: Date,
    device_id: String,
    song_queue: [songSchema],
})

module.exports = mongoose.model('Room', roomSchema)
