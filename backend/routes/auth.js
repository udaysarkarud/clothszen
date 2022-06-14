import express from 'express';
import user from '../models/User.js'
const router = express.Router();
import CryptoJS from 'crypto-js';
import User from '../models/User.js';
import jwt from "jsonwebtoken";
//REGISTER
router.post('/register', async (req, res) => {
    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//LOGIN
router.post('/login', async (req, res) => {
    try {
        //Find User
        const user = await User.findOne({ username: req.body.username });

        //if user not found 
        if (!user) {
            return res.status(401).json("Wrong Credentials");
        }

        //decrypt user password
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const orgiPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        //check user password and client send password
        if (orgiPassword !== req.body.password) {
            return res.status(401).json("Wrong Credentials");
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SEC,
            { expiresIn: '3d' });

        const { password, ...others } = user._doc;
        res.status(200).json({...others, accessToken})

    } catch (err) {
        res.status(500).json(err)
    }
})

export default router;