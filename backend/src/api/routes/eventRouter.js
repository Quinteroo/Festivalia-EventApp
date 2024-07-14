const express = require("express");
const eventRouter = express.Router();
const { isAuth } = require("../../middleware/isAuth.js");
const { uploadPoster } = require("../../utils/file.js");
const { getEventById, getEvents, postEvent, putEvent, } = require("../controllers/eventController.js");

eventRouter.get("/:id", getEventById);
eventRouter.get("/", getEvents);
eventRouter.post('/event/:userID', uploadPoster.single("poster"), postEvent);
eventRouter.put('/attendee/:eventid', isAuth, putEvent);

module.exports = eventRouter;
