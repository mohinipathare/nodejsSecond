const path=require('path');
const rootDir = require('../util/path');
// exports.successContro=(req, res, next) => res.sendFile(path.join(rootDir,'views','success.html'));
// exports.contactUsContro=(req, res, next) =>res.sendFile(path.join(rootDir,'views','ContactUs.html'));


exports.getContactUs = (req, res, next) => {
    res.render('ContactUs', {
      pageTitle: 'ContactUs',
      path: '/ContactUs',
      formsCSS: true,
      productCSS: true,
      activeContactUs: true
    });
  };
  exports.getSuccess= (req, res, next) => {
    res.render('success', {
      pageTitle: 'success',
      path: '/success',
      formsCSS: true,
      productCSS: true,
      activeContactUs: true
    });
  };
  exports.postSuccess= (req, res, next) => {
    res.render('success', {
      pageTitle: 'success',
      path: '/success',
      formsCSS: true,
      productCSS: true,
      activeContactUs: true
    });
  };
  
  