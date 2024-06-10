const { verifyJwt } = require("../utils/jwt.js")
const User = require("../api/models/User.js")


const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    //nos aseguramos que el token existe antes de pasarlo
    if (!token) {
      return res.status(401).json({ message: "❌ No token provided (isAuth)" });
    }

    const parsedToken = token.replace("Bearer ", "");
    const { id } = verifyJwt(parsedToken);

    const user = await User.findById(id);

    //nos aseguramos que el usuario existe antes de asignarlo
    if (!user) {
      return res.status(401).json({ message: "❌ User not found (isAuth)" });
    }

    user.password = null;
    req.user = user;
    next();

  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "❌ No autorizado" });
  }
}


module.exports = { isAuth }