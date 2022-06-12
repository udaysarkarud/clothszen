import express from 'express';
export const router = express.Router();

router.get('/usertest',(req,res)=>{
    res.send('user test is successfull')
})

router.post('/userposttest',(req,res)=>{
    const username = req.body.username;
    res.send(`Your Usename is ${username}`);
})

