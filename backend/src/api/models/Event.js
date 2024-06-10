const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
  poster: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  style: { type: String, required: true, enum: ["rock", "heavy", "rap", "pop", "indie", "reggae", "electro", "flamenco", "techno"] },
  description: { type: String, required: true },
  attendees: [{ type: mongoose.Types.ObjectId, ref: "attendees" }],
  date: {
    type: String,
    required: true,
  }

}, {
  timestamps: true,
  collection: "events"
})

const Event = new mongoose.model("events", eventSchema, "events")


module.exports = Event