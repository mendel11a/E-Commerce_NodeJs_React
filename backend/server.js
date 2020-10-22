import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';



dotenv.config();

const mongodbUrl= config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true, //to get any warnings in the console
    useUnifiedTopology: true,
    useCreateIndex: true
})
  .catch((error) => console.log(error.reason));


const app=express();
app.use(bodyParser.json()); // make it able to read data from the server
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});