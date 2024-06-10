const Event = require("../models/Event.js");

const getEventById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id).populate("attendees"); // attendee es la propiedad del evento que me kiero traer
    if (!event) {
      return res.status(404).json("❌ No se encontró ningún evento por ID");
    }
    return res.status(200).json(event);
  } catch (error) {
    return res.status(500).json("❌ Error al buscar el evento por ID");
  }
};

const getEvents = async (req, res, next) => {
  try {
    const events = await Event.find().populate("attendees");
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json("❌ No se encontró ningún evento");
  }
};

module.exports = { getEventById, getEvents };
