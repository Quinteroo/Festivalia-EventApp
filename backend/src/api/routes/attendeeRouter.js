const express = require("express");
const attendeeRouter = express.Router();
const { getAttendeeById, getAttendees, postAttendee } = require("../controllers/attendeeController.js");
const { isAdmin } = require("../../middleware/isAdmin.js"); // Asegúrate de que la ruta sea correcta
const { isAuth } = require("../../middleware/isAuth.js")

attendeeRouter.get("/:id", [isAdmin], getAttendeeById);
attendeeRouter.get("/", getAttendees);
attendeeRouter.post("newAttendee/:userID", [isAuth], postAttendee);

module.exports = attendeeRouter;

