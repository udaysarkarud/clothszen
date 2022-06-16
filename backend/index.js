import express from 'express';
const app = express();

import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

import router from './routes/user.js';
import authRouter from './routes/auth.js';
import productRouter from './routes/product.js';


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
app.use('/api/products', productRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running at 5000 prot')
});
