const express = require("express");
const eventRouter = express.Router();
const { getEventById, getEvents } = require("../controllers/eventController.js");

eventRouter.get("/:id", getEventById);
eventRouter.get("/", getEvents);

module.exports = eventRouter;
