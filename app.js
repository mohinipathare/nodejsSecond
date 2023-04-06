const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorController = require('./controllers/error');
//const getContactUsContro=require('./controllers/contactUsSuccess');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoute=require('./routes/ContactUs');
const successRoute=require('./routes/success');



app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(successRoute);
app.use(contactusRoute);
app.use(errorController.get404);
//app.use(getContactUsContro.getContactUs);

app.listen(3000);
