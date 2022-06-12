import express from 'express';
const app = express();

import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

import { router } from './routes/user.mjs';
import {router as authRouter} from './routes/auth.mjs'




mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('DB Connection Successful')
    })
    .catch((err) => {
        console.log(err)
    });
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', router);

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running at 5000 prot')
});
