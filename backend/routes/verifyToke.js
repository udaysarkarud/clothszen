import express from 'express';
const router = express.Router();
import jwt from "jsonwebtoken";

const verifyToke = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader){

    }else{
        return res.status(401).json('Your are not authenticated!');
    }
};

export default verifyToke;