const bcrypt = require("bcrypt")
const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  avatar: { type: String, default: '/assets/images/default-avatar.png' },
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

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10)
})


const User = new mongoose.model("users", userSchema, "users")

module.exports = User