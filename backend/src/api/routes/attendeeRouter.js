const express = require("express");
const attendeeRouter = express.Router();
const { getAttendeeById, getAttendees } = require("../controllers/attendeeController.js");
const { isAdmin } = require("../../middleware/isAdmin.js"); // Asegúrate de que la ruta sea correcta

attendeeRouter.get("/:id", isAdmin, getAttendeeById);
attendeeRouter.get("/", getAttendees);

module.exports = attendeeRouter;

