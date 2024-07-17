const bcrypt = require("bcrypt")
const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  avatar: { type: String },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, required: false, enam: ["user", "admin"] },
  organizedEvents: [{ type: mongoose.Types.ObjectId, required: false, ref: "events" }],
  aboutMe: { type: String, required: false }
}, {
  timestamps: true,
  collection: "users"
})

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});


const User = new mongoose.model("users", userSchema, "users")

module.exports = User