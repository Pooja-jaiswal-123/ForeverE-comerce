import express from 'express'
import { listProduct,addProduct,RemoveProduct,singleProduct } from '../controlers/productController.js'
import upload from '../middleware/multer.js';

const productRouter=express.Router();


productRouter.post('/add',upload.fields([{name:"image1", maxCount:1},{name:"image2", maxCount:1},{name:"image3", maxCount:1},{name:"image4", maxCount:1}]) ,addProduct)
productRouter.post('/remove', RemoveProduct)
productRouter.post('/singleproduct', singleProduct)
productRouter.get('/list', listProduct)

export default productRouter;