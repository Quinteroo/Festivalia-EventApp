
const { verifyJwt } = require("../utils/jwt.js");
const User = require("../api/models/User.js");

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json("❌ Token (isAdmin) no proporcionado");
    }

    const parsedToken = token.replace("Bearer ", "");
    const { id } = verifyJwt(parsedToken);
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json("❌ Usuario no encontrado");
    }

    if (user.rol === "admin") {
      user.password = null;
      req.user = user;
      next();
    } else {
      return res.status(400).json("❌ Acción solo para administradores");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json("❌ Acción solo para administradores");
  }
};

module.exports = { isAdmin };



