const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    confirmpassword: { type: String, require: true },
    date: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('User', UserSchema);

class User {
    criar(body) {
        const { name, email, password, confirmpassword } = body;

        if (!name || !email || !password || !confirmpassword) return false
        if (password !== confirmpassword) return false

        return { name, email, password, confirmpassword };
    }
}

module.exports = new User();