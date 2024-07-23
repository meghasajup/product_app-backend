const express = require('express');
const router = express.Router();
const asyncHandler = require('../../utils/asyncHandler');
const { SignUp, Login } = require('../../controllers/userController');

router.post('/sign-up', asyncHandler(SignUp))
router.post('/log-in', asyncHandler(Login))

module.exports = router;