const Attendee = require("../models/Attendee.js");

//  api/attendee/:id  >> Proporciona detalles de un asistente específico.
const getAttendeeById = async (req, res, next) => {
  try {
    const { id } = req.params;//                                     ('¬_¬)
    const attendee = await Attendee.findById(id).populate("confirmedEvents");// confirmedEvents es la propiedad de attendee que me kiero traer
    return res.status(200).json(attendee);
  } catch (error) {
    return res.status(500).json("❌ No se encontró ningún asistente por ID");
  }
};

//  api/attendee  >> Ofrece la lista de asistentes registrados
const getAttendees = async (req, res, next) => {
  try {
    const attendees = await Attendee.find().populate("confirmedEvents");
    return res.status(200).json(attendees);
  } catch (error) {
    return res.status(500).json("❌ No se encontró ningún asistente");
  }
};

module.exports = { getAttendeeById, getAttendees };
