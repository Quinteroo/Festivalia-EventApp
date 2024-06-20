const bcrypt = require('bcrypt');
const User = require("../models/User.js");
const Event = require("../models/Event.js");
const Attendee = require("../models/Attendee.js");
const { generateSing, verifyJwt } = require("../../utils/jwt.js");
const { createEventEmail } = require("../../emails/createEventEmail.js")
const { newUserEmail } = require("../../emails/newUserEmail.js")

const getUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const user = await User.findOne({ token });
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(400).json("❌ Users not found");
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(400).json("❌ Users not found");
  }
};

const register = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.status(401).json("❌ Los campos nombre, email y contraseña son obligatorios!");
    }

    const regexPasword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
    if (!regexPasword.test(password)) {
      return res.status(402).json("❌ minusc, mayusc, un numero, mínimo 6 caracteres, !@#_-. no están permitidos");
    }



    const newUser = new User({
      avatar,
      userName,
      email,
      password,
      rol: "user"
    });

    const userSaved = await newUser.save();

    newUserEmail(email)

    return res.status(201).json(userSaved);
  } catch (error) {
    console.log(error);
    return res.status(400).json("❌ No se ha podido registrar el usuario");
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("❌ No existe usuario");
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSing(user._id);
      return res.status(200).json({ user, token });
    } else {
      return res.status(402).json("❌ contraseña incorrecta");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json("❌ No hemos podido hacer login");
  }
};

const postEvent = async (req, res, next) => {
  try {
    const { title, location, style, description, date } = req.body;

    if (!req.file || !title || !location || !style || !description || !date) {
      return res.status(400).json("❌ Todos los campos son obligatorios.");
    }

    const existingEvent = await Event.findOne({ title });
    if (existingEvent) {
      return res.status(400).json(`❌ Ya existe un evento con el título ${title}.`);
    } else {
      const newEvent = new Event({
        poster: req.file.path,
        title,
        location,
        style,
        description,
        date,
      });
    }

    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    if (!regexDate.test(date)) {
      return res.status(400).json(`❌ ${date} no es una fecha válida. El formato debe ser YYYY-MM-DD.`);
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

    const token = req.headers.authorization;
    const parsedToken = token.replace("Bearer ", "");
    const { id } = verifyJwt(parsedToken);
    const user = await User.findById(id);

    user.organizedEvents.push(eventSaved._id);
    await user.save();

    createEventEmail(user.email, title)

    return res.status(200).json(eventSaved);
  } catch (error) {
    console.error(error);
    return res.status(400).json("❌ Evento no creado");
  }
};

const putEvent = async (req, res, next) => {
  try {
    const { eventid } = req.params;
    const oldEvent = await Event.findById(eventid);
    if (!oldEvent) {
      return res.status(404).json("❌ Evento no encontrado");
    }
    const attendee = new Attendee(req.body);
    attendee.confirmedEvents.push(eventid);
    await attendee.save();
    if (!oldEvent.attendees.includes(attendee._id)) {
      oldEvent.attendees.push(attendee._id);
    } else {
      return res.status(400).json("❌ Ya estás confirmado como asistencia");
    }
    const eventUpdated = await oldEvent.save();
    return res.status(200).json(eventUpdated);
  } catch (error) {
    console.error(error);
    return res.status(400).json("❌ No pudiste confirmar asistencia");
  }
};

module.exports = { getUser, postEvent, putEvent, register, login, getUsers };

