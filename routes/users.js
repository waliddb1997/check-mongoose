const express = require('express');

const userRouter = express.Router();
const user=require('../models/users');


// Post new user
userRouter.post('/add',async (req, res) => {
    try {
        const newUser = new user(req.body);
        const result = await newUser.save();
        res.send({user: result,msg:"user added successfully"});


    } catch (error) {
        console.log(error)
    }

})
module.exports = userRouter;
// get all users
// get user by id
// delete user by id
// update user by id

