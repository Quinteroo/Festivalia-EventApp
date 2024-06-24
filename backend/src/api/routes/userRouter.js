const express = require("express");
const userRouter = express.Router();
const { getUserById, register, login, postEvent, putEvent, getUsers } = require('../controllers/userController.js');
const { isAuth } = require("../../middleware/isAuth.js");
const { isAdmin } = require("../../middleware/isAdmin.js");
const { uploadAvatar, uploadPoster } = require("../../utils/file.js");

userRouter.get('/:id', getUserById);
userRouter.get('/users', isAdmin, getUsers);
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/event', isAuth, uploadPoster.single("poster"), postEvent);
userRouter.put('/attendee/:eventid', isAuth, putEvent);

module.exports = userRouter;

