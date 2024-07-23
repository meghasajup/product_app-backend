const productModel = require('../models/products')
const ProductJoi = require("../validation/productJoi");
//add product
const addProduct = async (req, res) => {
    const data = req.body
    const saveData = new productModel(data); 
    if(!saveData) throw new Error (400,'Insert all data')
    await saveData.save();
    res.status(200).send({message: 'data saved successfully'})
}
//get all products
const getAllProducts = async (req, res) => {
    const allData = await productModel.find({})
    res.status(200).send({data:allData, message: 'OK'})
}
//get by id
const getProductById = async (req, res) => {
    const id = req.params.id
    const data = await productModel.findById({})
    res.status(200).send({data:data, message: 'OK'})
}
//delete product
const deleteProduct = async (req, res) => {
    const id = req.params.id
    const data = await productModel.findByIdAndDelete(id)
    res.status(200).send({data:data, message: 'OK'})
}
//update product
const updateProduct = async (req, res) => {
    const id = req.params.id
    const newData = req.body
    const data = await productModel.findByIdAndUpdate({id, newData})
    res.status(200).send({data:data, message: 'OK'})
}

module.exports = { addProduct, getAllProducts, getProductById, deleteProduct, updateProduct }