import express from 'express';
const router = express.Router();
import jwt from "jsonwebtoken";
import Product from '../models/Product.js';
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from './verifyToken.js';

//CREATE PRODUCT
router.post('/', verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE PRODUCT
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(200).json(err)
    }
})


//DELETE PRODUCT
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted!')
    } catch (err) {
        res.status(500).json(err);
    }
})


//GET PRODUCT
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET ALL PRODUCT
router.get('/', async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.new
    try {
        const products = query ? await Product.find().sort({ _id: -1 }).limit(5) : await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err);
    }
})

// //GET USER STATS
// router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

//     try {
//         const data = await User.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             {$project: {month:{$month:'$createdAt'}}},
//             {$group:{_id:'$month',total:{$sum:1}}}
//         ])
//         res.status(200).json(data)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

export default router;