const express = require("express");
const eventRouter = express.Router();
const { isAuth } = require("../../middleware/isAuth.js");
const { isAdmin } = require("../../middleware/isAdmin.js")
const { uploadPoster } = require("../../utils/file.js");
const { getEventById, getEvents, postEvent, getEventByStyle, deleteEvent } = require("../controllers/eventController.js");

eventRouter.get("/style/:style", getEventByStyle)
eventRouter.get("/:id", getEventById);
eventRouter.get("/", getEvents);
eventRouter.post('/event/:userID', [isAuth], uploadPoster.single("poster"), postEvent);
eventRouter.delete("/delete/:id", [isAdmin], deleteEvent)


module.exports = eventRouter;
