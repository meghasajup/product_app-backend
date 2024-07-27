const productModel = require('../models/products')
const ProductJoi = require("../validation/productJoi");

const addProduct = async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
      image: req.file.path,
    });

    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

//get all products
const getAllProducts = async (req, res) => {
    const allData = await productModel.find({})
    res.status(200).send({data:allData, message: 'OK'})
}
//get by id
const getProductById = async (req, res) => {
    const id = req.params.id
    const data = await productModel.findById(id)
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
    const data = await productModel.findByIdAndUpdate(id, newData)
    res.status(200).send({data:data, message: 'OK'})
}

module.exports = { addProduct, getAllProducts, getProductById, deleteProduct, updateProduct }