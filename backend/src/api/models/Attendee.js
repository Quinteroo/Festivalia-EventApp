const mongoose = require("mongoose")

const attendeeSchema = new mongoose.Schema({
  attendeeAvatar: { type: String }, //, default: "../../assets/usuario.png"
  attendeeName: { type: String, required: true },
  email: { type: String, required: true },
  confirmedEvents: [{ type: mongoose.Types.ObjectId, ref: "events" }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

}, {
  timestamps: true,
  collection: "attendees"
})

const Attendee = new mongoose.model("attendees", attendeeSchema, "attendees")

module.exports = Attendee