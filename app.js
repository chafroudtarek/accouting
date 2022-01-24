import express from 'express';
import { PORT } from './config.js';
import { connectDB } from './config/connectDB.js';
import cors from 'cors';
import userRouter from './routes/users.js'
import authRouter from './routes/auth.js'

const app = express();






//middleware routing body parse
app.use(express.json(), cors());
app.use("/eunoia/users", userRouter);
app.use("/eunoia/auth", authRouter);



//Server
connectDB();
app.listen(PORT, (err) =>
    err ? console.error(err) : console.log("server is running"));