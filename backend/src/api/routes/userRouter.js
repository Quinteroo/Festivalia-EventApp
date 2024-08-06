const express = require("express");
const userRouter = express.Router();
const { getUserById, register, login, getUsers, putUser } = require('../controllers/userController.js');
const { uploadAvatar } = require("../../utils/file.js");
const { isAdmin } = require("../../middleware/isAdmin.js");
const { isAuth } = require("../../middleware/isAuth.js");


userRouter.get('/:id', [isAuth], getUserById);
userRouter.get('/users', [isAdmin], getUsers);
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.put('/profile/:userID', [isAuth], uploadAvatar.single("avatar"), putUser);


module.exports = userRouter;

