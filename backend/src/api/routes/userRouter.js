const express = require("express");
const userRouter = express.Router();
const { getUserById, register, login, getUsers } = require('../controllers/userController.js');
const { uploadAvatar } = require("../../utils/file.js");
const { isAdmin } = require("../../middleware/isAdmin.js");


userRouter.get('/:id', getUserById);
userRouter.get('/users', isAdmin, getUsers);
userRouter.post('/register', register);
userRouter.post('/login', login);


module.exports = userRouter;

