const bcrypt = require('bcrypt');
const User = require("../models/User.js");
const Event = require("../models/Event.js");

const { generateSing } = require("../../utils/jwt.js");
const { newUserEmail } = require("../../emails/newUserEmail.js")

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params

    const user = await User.findById(id).populate("organizedEvents");
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
      avatar: '/public/assets/images/default-avatar.png',
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


module.exports = { getUserById, register, login, getUsers };