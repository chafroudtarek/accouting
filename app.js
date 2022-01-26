import express from 'express';
import { connectDB } from './config/connectDB.js';
import cors from 'cors';
import userRouter from './routes/users.js'
import authRouter from './routes/auth.js'
import dotenv from 'dotenv';
import i18next from './utils/i18nn.js';
import middleware from 'i18next-http-middleware'
import {mylogger} from './utils/winstonn.js';
import { getUserLang } from './controllers/user.controllers.js';

const app = express();
dotenv.config();



//middleware routing 

app.use(express.json(), cors());
app.use(middleware.handle(i18next));
app.use(getUserLang);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);



//Server
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
    err ? console.error(err) :  mylogger.info(`Server started and running on http://${process.env.HOST}:${PORT}`));