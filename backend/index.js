require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { connectDB } = require('./src/config/connectDB.js');
const userRouter = require("./src/api/routes/userRouter.js");
const eventRouter = require("./src/api/routes/eventRouter.js");
const attendeeRouter = require("./src/api/routes/attendeeRouter.js");
const { errorHandler } = require('./src/middleware/errorHandler.js');
const cors = require("cors")
const cloudinary = require("cloudinary").v2;

const app = express();

app.use(cors())


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json());
connectDB();


app.use("/api/v1/user", userRouter);
app.use("/api/v1/event", eventRouter);
app.use("/api/v1/attendee", attendeeRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("❌ Route not found");
});

// Middleware de manejo de errores
app.use(errorHandler);

app.listen(4001, (err) => {
  if (err) {
    console.error("❌ Error al iniciar el servidor:", err);
    process.exit(1);
  } else {
    console.log(`✅ Servidor levantado en puerto 4001`);
  }
});

