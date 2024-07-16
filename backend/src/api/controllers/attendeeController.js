const Attendee = require("../models/Attendee.js");
const User = require("../models/User.js")
const Event = require("../models/Event.js")

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



// usuario confirma asistencia a evento
const postAttendee = async (req, res, next) => {
  try {
    const { userID } = req.params;
    const { eventName } = req.body


    const event = await Event.findOne({ title: eventName });
    if (!event) {
      return res.status(404).json("❌ Evento no encontrado");
    }

    const user = await User.findById(userID)



    const existingAttendee = await Attendee.findOne({ user: user._id, confirmedEvents: event._id });
    if (existingAttendee) {
      return res.status(400).json("❌ Ya te has registrado.");
    }


    const attendee = new Attendee({
      attendeeAvatar: user.avatar,
      attendeeName: user.userName,
      email: user.email,
      confirmedEvents: [event._id],
      user: user._id
    })
    await attendee.save();

    if (!event.attendees.includes(attendee._id)) {
      event.attendees.push(attendee._id);
      await event.save();
    }

    console.log("😍 nuevo asistente al evento");
    return res.status(200).json(attendee);

  } catch (error) {
    console.error(error);
    return res.status(400).json("❌ No pudiste confirmar asistencia");
  }
};

module.exports = { getAttendeeById, getAttendees, postAttendee };
