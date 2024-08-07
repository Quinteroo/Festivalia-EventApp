const bcrypt = require('bcrypt');
const User = require("../models/User.js");
const Event = require("../models/Event.js");
const { deleteFile } = require("../../utils/deleteFile.js")
const { generateSing } = require("../../utils/jwt.js");
const { newUserEmail } = require("../../emails/newUserEmail.js")
const { verifyJwt } = require("../../utils/jwt.js")

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
      return res.status(400).json("❌ Los campos nombre, email y contraseña son obligatorios!");
    }

    const regexPasword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
    if (!regexPasword.test(password)) {
      return res.status(400).json("❌ minusc, mayusc, un numero, mínimo 6 caracteres, !@#_-. no están permitidos");
    }



    const newUser = new User({
      avatar: '/assets/default-avatar.png',
      userName,
      email,
      password,
      rol: "user"
    });

    const userSaved = await newUser.save();

    newUserEmail(userSaved.email)

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
      return res.status(400).json("❌ No existe usuario");
    }


    const match = await bcrypt.compare(req.body.password, user.password);

    if (match) {
      const token = generateSing(user._id);
      return res.status(200).json({ user, token });
    } else {
      return res.status(400).json("❌ contraseña incorrecta");
    }

  } catch (error) {
    console.log(error);
    return res.status(400).json("❌ No hemos podido hacer login");
  }
};

const putUser = async (req, res, next) => {
  const { userID } = req.params
  const { userName, aboutMe } = req.body

  const token = req.headers.authorization;

  const parsedToken = token.replace("Bearer ", "");
  const { id } = verifyJwt(parsedToken);

  if (userID !== id) {
    return res.status(400).json("❌ No estás autorizado a modificar el perfil.")
  }


  try {
    const oldUser = await User.findById(userID)
    if (!oldUser) {
      return res.status(404).json("❌ Usuario no encontrado.");
    }

    const newUser = new User({
      userName: userName || oldUser.userName,
      aboutMe: aboutMe || oldUser.aboutMe
    })

    newUser._id = userID
    const organizedEvents = req.body.organizedEvents || []
    newUser.organizedEvents = [...oldUser.organizedEvents, ...organizedEvents]

    if (req.file) {
      newUser.avatar = req.file.path
      deleteFile(oldUser.avatar)
    }

    const userUpdated = await User.findByIdAndUpdate(userID, newUser, { new: true })
    return res.status(200).json(userUpdated)

  } catch (error) {
    console.log(error);
    return res.status(400).json("❌ Error al actualizar el perfil.")
  }
}

const deleteUser = async (req, res, next) => {
  const { id } = req.params
  try {
    const userDeleted = await User.findByIdAndDelete(id)
    deleteFile(userDeleted.avatar)
    return res.status(200).json({
      mensaje: "✅ Perfil de Usuario eliminado con éxito",
      userDeletedDeleted
    })

  } catch (error) {
    return res.status(400).json("❌ Error, no se pudo eliminar el perfil del usuario")
  }
}


module.exports = { getUserById, register, login, getUsers, putUser, deleteUser };