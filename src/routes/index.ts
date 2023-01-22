import express from 'express'
import productsController from './products'

const router=express.Router();

router.use("/product",productsController);

export default router;