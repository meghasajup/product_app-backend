const express = require('express');
const asyncHandler = require('../../utils/asyncHandler');
const { addProduct, getAllProducts, deleteProduct, getProductById, updateProduct } = require('../../controllers/productController');

const router = express.Router();

router.post('/', asyncHandler(addProduct))
    .get('/', asyncHandler(getAllProducts))
    .delete('/:id', asyncHandler(deleteProduct))
    .put('/:id', asyncHandler(updateProduct))
    .get('/:id', asyncHandler(getProductById))

module.exports = router;