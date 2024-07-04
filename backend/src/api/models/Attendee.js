const mongoose = require("mongoose")

const attendeeSchema = new mongoose.Schema({
  attendeeAvatar: { type: String, required: false }, //, default: "../../assets/usuario.png"
  attendeeName: { type: String, required: true },
  email: { type: String, required: true },
  confirmedEvents: [{ type: mongoose.Types.ObjectId, ref: "events" }]

}, {
  timestamps: true,
  collection: "attendees"
})

const Attendee = new mongoose.model("attendees", attendeeSchema, "attendees")

module.exports = Attendee