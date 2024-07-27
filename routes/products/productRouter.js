const express = require('express');
const asyncHandler = require('../../utils/asyncHandler');
const { addProduct, getAllProducts, deleteProduct, getProductById, updateProduct } = require('../../controllers/productController');
const { verifyToken } = require('../../utils/jwtToken');
const upload = require('../../utils/multer');

const router = express.Router();

router.post('/', verifyToken, upload.single('image'), asyncHandler(addProduct))
    .get('/', asyncHandler(getAllProducts))
    .delete('/:id', asyncHandler(deleteProduct))
    .put('/:id', asyncHandler(updateProduct))
    .get('/:id', asyncHandler(getProductById))

module.exports = router;