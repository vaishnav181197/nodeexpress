import express from 'express'

const router=express.Router();

router.get('/list',(req:any,res:any,next:any)=>{
    try{
        const resp={
            name:"fried rice",
            price:120
        }
        res.json(resp)
    }catch(error){
        next(error)
    }
})

export default router;