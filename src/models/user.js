const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    cpf: String,
    sale: Boolean,
});

module.exports = mongoose.model('user', userSchema);