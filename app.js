import express from 'express';
import { connectDB } from './config/connectDB.js';
import cors from 'cors';
import dotenv from 'dotenv';
import i18next from './utils/i18nn.js';
import middleware from 'i18next-http-middleware'
import {mylogger} from './utils/winstonn.js';
import routes from './routes/index.js';







const app = express();
dotenv.config();



//middleware routing 

app.use(express.json(), cors());
app.use(middleware.handle(i18next));


//routes
app.use(routes);


//kafka
import {run} from './utils/consumer.js'
run().catch(console.error)

//Server
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
    err ? console.error(err) :  mylogger.info(`Server started and running on http://localhost:${PORT}`));