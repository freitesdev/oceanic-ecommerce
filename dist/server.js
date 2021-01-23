const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require("dotenv").config();

//Public Methods
const products = require('./routes/api/products')
const signup = require('./routes/api/signup')
const signin = require('./routes/api/signin')
//Logged Methods
const account = require('./routes/user/account.user')
const orders = require('./routes/user/orders.user')
//Private Methods
const productsAdmin =require('./routes/admin/products.admin')
const usersAdmin = require('./routes/admin/users.admin')
const ordersAdmin = require('./routes/admin/orders.admin')

const app = express();
//middleware
app.use(cors())
app.use(express.json())

//Public Routes
app.use('/products', products)

//Logged Routes
app.use('/account', account)
app.use('/orders', orders)

//Admin Routes
app.use('/admin/products', productsAdmin)
app.use('/admin/users', usersAdmin)
app.use('/admin/orders', ordersAdmin)

//JWT Authorization


//Database connection
const port = process.env.PORT || 5000;
const uri = process.env.LOCAL_URI;
console.log(`Database server URL: ${uri}`);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`App server port: ${port}`)
})