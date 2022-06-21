require('dotenv').config({ path: __dirname + '/./../../.env' });
// Import mongoose for MongoDB object modeling
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_LINK;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo DB Successfully'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

// Saving user's username/password
const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const User = mongoose.model('user', userSchema);

// Saving Google username/password
const googleSchema = new Schema({
  googleId: { type: String, require: true, unique: true },
  username: { type: String, require: true },
});

const GoogleUser = mongoose.model('googleUser', googleSchema);

module.exports = {
  User,
  GoogleUser
}