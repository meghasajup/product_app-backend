const Joi = require("joi");

const ProductJoi = Joi.object({
  title: Joi.string().min(3).max(50).required().messages({
    "string.base": `"title" should be a type of 'text'`,
    "string.empty": `"title" cannot be an empty field`,
    "string.min": `"title" should have a minimum length of {#limit}`,
    "string.max": `"title" should have a maximum length of {#limit}`,
    "any.required": `"title" is a required field`,
  }),
  category: Joi.string().min(3).max(50).required().messages({
    "string.base": `"category" should be a type of 'text'`,
    "string.empty": `"category" cannot be an empty field`,
    "string.min": `"category" should have a minimum length of {#limit}`,
    "string.max": `"category" should have a maximum length of {#limit}`,
    "any.required": `"category" is a required field`,
  }),
  description: Joi.string().min(3).required().messages({
    "string.base": `"description" should be a type of 'text'`,
    "string.empty": `"description" cannot be an empty field`,
    "string.min": `"description" should have a minimum length of {#limit}`,
    "any.required": `"description" is a required field`,
  }),
  image: Joi.string().required().messages({
    "string.base": `"image" should be a type of 'text'`,
    "string.empty": `"image" cannot be an empty field`,
    "any.required": `"image" is a required field`,
  }),
  imagePublicId: Joi.string().required().messages({
    "string.base": `"imagePublicId" should be a type of 'text'`,
    "string.empty": `"imagePublicId" cannot be an empty field`,
    "any.required": `"imagePublicId" is a required field`,
  }),
  quantity: Joi.number().integer().min(0).required().messages({
    "number.base": `"quantity" should be a type of 'number'`,
    "number.integer": `"quantity" must be an integer`,
    "number.min": `"quantity" should have a minimum value of {#limit}`,
    "any.required": `"quantity" is a required field`,
  }),
  price: Joi.number().min(0).required().messages({
    "number.base": `"price" should be a type of 'number'`,
    "number.min": `"price" should have a minimum value of {#limit}`,
    "any.required": `"price" is a required field`,
  }),
});

module.exports = ProductJoi;