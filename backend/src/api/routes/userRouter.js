const express = require("express");
const userRouter = express.Router();
const { getUserById, register, login, getUsers, putUser, deleteUser } = require('../controllers/userController.js');
const { uploadAvatar } = require("../../utils/file.js");
const { isAdmin } = require("../../middleware/isAdmin.js");
const { isAuth } = require("../../middleware/isAuth.js");


userRouter.get('/:id', getUserById);
userRouter.get('/users', [isAdmin], getUsers);
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.put('/profile/:userID', uploadAvatar.single("avatar"), putUser);
userRouter.delete("delete/:id", [isAdmin], deleteUser)


module.exports = userRouter;

