const Event = require("../models/Event.js");
const User = require("../models/User.js")
const Attendee = require("../models/Attendee.js");
const { createEventEmail } = require("../../emails/createEventEmail.js")
const { deleteFile } = require("../../utils/deleteFile.js")


const getEventByStyle = async (req, res, next) => {
  try {
    const { style } = req.params
    const event = await Event.find({ style })
    return res.status(200).json(event)

  } catch (error) {
    return res.status(400).json("No hay eventos organizados con ese estilo.")
  }
}



const getEventById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id).populate("attendees");

    if (!event) {
      return res.status(404).json("❌ No se encontró ningún evento por ID");
    }
    return res.status(200).json(event);
  } catch (error) {
    console.error('Error en el fetching:', error);
    return res.status(500).json('❌ Error interno del servidor');
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

const deleteEvent = async (req, res, next) => {
  const { id } = req.params
  try {
    const eventDeleted = await Event.findByIdAndDelete(id)
    deleteFile(eventDeleted.poster)
    return res.status(200).json({
      mensaje: "✅ Evento eliminado con éxito",
      eventDeleted
    })

  } catch (error) {
    return res.status(400).json("❌ Evento no eliminado");
  }

}



module.exports = { getEventById, getEvents, postEvent, getEventByStyle, deleteEvent };
