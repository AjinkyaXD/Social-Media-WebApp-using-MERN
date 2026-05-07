import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';
import UploadRoute from './Routes/UploadRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_DB_URL = process.env.MONGO_DB || 'mongodb://127.0.0.1:27017/socialMedia';

// to serve images for public (public folder)
app.use(express.static('public'));
app.use('/images', express.static('public/images'));

// MiddleWare
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect(MONGO_DB_URL)
    .then(() =>
        app.listen(PORT, () => console.log(`listening at ${PORT}`))
    ).catch((error) =>
        console.log(error)
    )

// uses of routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);
app.use('/upload', UploadRoute);