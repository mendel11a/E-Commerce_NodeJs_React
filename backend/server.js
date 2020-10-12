import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';


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
// app.get("/api/products/:id",(req,res)=>{
//     const productId=req.params.id;
//     const product=data.products.find(x=>x._id ===productId); // getting the product with the same id
//     if(product) // if the product exists
//         res.send(product);
//     else //if the product doesn't exists
//         res.status(404).send({msg: "Product Not Found."})
// });

// app.get("/api/products",(req,res)=>{
//     res.send(data.products);
// });

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});