
import {v2 as cloudinary} from "cloudinary"
import { json } from "express"
import productModel from '../models/productModel.js';

// function for add product
const addProduct= async(req,res)=>{
	try {
		const {name, description, price,image,category,subCategory,Size,bestseller,date}=req.body
		const image1=req.files.image1 && req.files.image1[0]
		const image2=req.files.image2 && req.files.image2[0]
		const image3=req.files.image3 && req.files.image3[0]
		const image4=req.files.image4 && req.files.image4[0]

		const images=[image1,image2,image3,image4].filter((item)=>item!==undefined)

		let imagesUrl= await Promise.all(
			images.map(async(item)=>{
         let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
				 return result.secure_url
			})
		)

		// console.log(name, description, price,image,category,subCategory,Size,bestseller,date);
		// console.log(imagesUrl);

		const productData={
			name,description,category,price:Number(price), subCategory,bestseller:bestseller==="true"? true :false,Size: Array.isArray(Size) ? Size : [Size]
			,image:imagesUrl, date:Date.now()
		}

		console.log('product data' , productData);
		const product=new productModel(productData);
		await product.save()
		res.json({success:true, message:"Product Added"})
		
	} catch (error) {
		console.log(error);
		
		res.json({success:false,message:error.message})
	}
}
// function for list product
const listProduct= async(req,res)=>{
try {
	const products=await productModel.find({});
	res.json({success:true, products})
} catch (error) {
	console.log(error);
		
		res.json({success:false,message:error.message})
}
}
// function for removing product
const RemoveProduct= async(req,res)=>{
try {
	await productModel.findByIdAndDelete(req.body.id)
res.json({success:true, message : "Product Remove"})
} catch (error) {
	res.json({success:false,message:error.message})
}
}
// function for single product products
const singleProduct= async(req,res)=>{
try {
	const{productId}=req.body
	const product= await productModel.findById(productId)
	res.json({success:true, product})
} catch (error) {
	res.json({success:false,message:error.message})
}
}

export{listProduct,addProduct, RemoveProduct, singleProduct}