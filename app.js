const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoute=require('./routes/ContactUs');
const successRoute=require('./routes/success');

const error404page=require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(contactusRoute);
app.use(successRoute);
app.use(shopRoutes);

app.use(error404page.error404);

app.listen(3000);
