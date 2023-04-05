const path=require('path');
const rootDir = require('../util/path');
exports.getAddProducts=((req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
  });
  exports.postAddProducts=((req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

exports.shopController=(req, res, next) => res.sendFile(path.join(__dirname,'..','views','shop.html'));
      
