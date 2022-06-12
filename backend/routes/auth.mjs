import express from 'express';
import user from '../models/User.mjs'
export const router = express.Router(); 

//REGISTER
router.post('/register', async (req, res) => {
    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }


})