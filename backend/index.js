import express from 'express';
const app = express();

import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('DB Connection Successful')
    })
    .catch((err) => {
        console.log(err)
    });

app.get('/api/test',()=>{
    console.log('api testing')
});

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running at 5000 prot')
});
