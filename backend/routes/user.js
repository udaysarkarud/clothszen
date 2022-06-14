import express from 'express';
const router = express.Router();

router.get('/:id',(req,res)=>{
    res.send('user test is successfull')
})

export default router;