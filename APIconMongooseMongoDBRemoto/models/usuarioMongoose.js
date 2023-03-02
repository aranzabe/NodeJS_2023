const mongoose = require("mongoose");

/**
 * A través de este esquema dialogaremos con MongoDB.
 */
const userSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    nombre: { type: String },
    edad: { type: Number }
}, { collection: 'usuarios' });


const User = mongoose.model('user', userSchema);

module.exports = User;