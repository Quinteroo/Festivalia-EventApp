const mongoose = require("mongoose")

const attendeeSchema = new mongoose.Schema({
  attendeeName: { type: String, required: true },
  email: { type: String, required: true },
  confirmedEvents: [{ type: mongoose.Types.ObjectId, ref: "events" }]

}, {
  timestamps: true,
  collection: "attendees"
})

const Attendee = new mongoose.model("attendees", attendeeSchema, "attendees")

module.exports = Attendee