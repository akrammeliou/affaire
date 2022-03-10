const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  password: String,
  role:String
});
const User = mongoose.model("User", UserSchema);
const user = new User({ fullname: 'admin',email:'admin@admin.com',phone:'25433860',password:'admin',role:'admin' });
await user.save();