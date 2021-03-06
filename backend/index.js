import express from 'express';
const app = express();

import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

import router from './routes/user.js';
import authRouter from './routes/auth.js';
import productRouter from './routes/product.js';
import cartRouter from './routes/cart.js';
import orderRouter from './routes/order.js';


mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('DB Connection Successful')
    })
    .catch((err) => {
        console.log(err)
    });
    
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', router);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/orders', orderRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running at 5000 prot')
});
