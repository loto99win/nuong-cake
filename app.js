// require
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

// connect mongodb
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://phamhongbinh:phbNDTDT012@cluster0.qas9e46.mongodb.net/nuongcake?retryWrites=true&w=majority`)
.then(() => console.log('Connection Established'))
.catch((err) => console.log(`Connection Failed: ${err}`));

// const app
const app = express();

// config
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// port
const port = process.env.PORT || 2000;

// routes
const foodRoute = require('./src/routes/food.router');
const orderRoute = require('./src/routes/order.router');

// app listen
app.listen(port, () => console.log(`http://localhost:${port}`));

// request response
app.use('/foods', foodRoute);
app.use('/order', orderRoute);
