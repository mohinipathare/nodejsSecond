const path=require('path');
const express = require('express');
const rootDir = require('../util/path');
const productController=require('../controllers/products')
const contactUsSuccessController=require('../controllers/contactUsSuccess');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',productController. getAddProducts);
router.get('/ContactUs', contactUsSuccessController.contactUsContro);
router.get('/success', contactUsSuccessController.successContro);
// /admin/add-product => POST
router.post('/add-product', productController.postAddProducts);


module.exports = router;
