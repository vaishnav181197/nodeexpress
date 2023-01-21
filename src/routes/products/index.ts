import {Router,Request,Response,NextFunction} from 'express'

const router:Router=Router();

router.get('/',(req:Request,res:Response,next:NextFunction)=>{
    try{
        const resp={name:"fried rice"}
        res.json(resp)
    }catch(error){
        next(error)
    }
})

export default router;