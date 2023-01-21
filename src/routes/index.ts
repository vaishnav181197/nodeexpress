import {Router} from 'express'
import productsController from './products'

const router:Router=Router();

router.use("/product",productsController);

export default router;