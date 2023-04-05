const path=require('path');
const express = require('express');
const shopContro=require('../controllers/products');

const router = express.Router();

router.get('/', shopContro.shopController);

module.exports = router;
