const path=require('path');
const rootDir = require('../util/path');
exports.successContro=(req, res, next) => res.sendFile(path.join(rootDir,'views','success.html'));
exports.contactUsContro=(req, res, next) =>res.sendFile(path.join(rootDir,'views','ContactUs.html'));
  
  