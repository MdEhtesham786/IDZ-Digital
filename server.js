require('dotenv').config();
const hostname = '127.0.0.1';
const port = process.env.PORT || 5321;
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./db/connect');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', 'views');
app.use('/static', express.static('static'));
mongoose.set('strictQuery', true);
const router = require('./routes/routes');
app.use('/', router);
app.get('/', (req, res) => {
    res.send('Working');
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`This server is running on port http://${hostname}:${port}`);
        });
    } catch (err) {
        console.log(err);

    }
};
start();