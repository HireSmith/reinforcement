const mongoose = require('mongoose');

const MONGO_URI =
  "mongodb+srv://jukim98:XfKATZh69OpubsE7@cluster0.zmnzr.mongodb.net/hiresmith?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "hiresmith",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

// Non-auth, password will be hashed
const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});
const User = mongoose.model('user', userSchema);


const googleSchema = new Schema({
  googleId: { type: String, require: true, unique: true },
  username: { type: String, require: true },
});
const GoogleUser = mongoose.model('googleUser', googleSchema);


module.exports = {
  User,
  GoogleUser
}