const Event = require("../models/Event.js");
const User = require("../models/User.js")
const Attendee = require("../models/Attendee.js");
const { createEventEmail } = require("../../emails/createEventEmail.js")

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




const postEvent = async (req, res, next) => {
  try {

    const { userID } = req.params

    const { title, location, style, description, date } = req.body;

    if (!req.file || !title || !location || !style || !description || !date) {
      return res.status(400).json("❌ Todos los campos son obligatorios.");
    }


    const newEvent = new Event({
      poster: req.file.path,
      title,
      location,
      style,
      description,
      date,
    });

    const eventSaved = await newEvent.save();


    const user = await User.findById(userID);
    user.organizedEvents.push(eventSaved._id);
    await user.save();
    createEventEmail(user.email, title)


    console.log(eventSaved);
    return res.status(200).json(eventSaved);

  } catch (error) {
    console.error(error);
    return res.status(400).json("❌ Evento no creado");
  }
};





module.exports = { getEventById, getEvents, postEvent };
