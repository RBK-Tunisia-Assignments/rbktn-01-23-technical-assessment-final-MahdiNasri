const express = require("express");
const { getUser, addUser } = require("../controller/usersController.js");


const userRouter = express.Router();

userRouter.get("/user",getUser);
userRouter.post("/user",addUser);


module.exports = userRouter;