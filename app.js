import express from 'express';
import { connectDB } from './config/connectDB.js';
import cors from 'cors';
import userRouter from './routes/users.js'
import authRouter from './routes/auth.js'
import dotenv from 'dotenv';
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware'







//i18n
i18next
    .use(middleware.LanguageDetector)
    .use(Backend)
    .init({
        locales: ['fr','en'],
       
        fallbackLng: 'fr',
        
        backend: {
            loadPath:  './locales/{{lng}}/translation.json'
        },
    });

const app = express();
dotenv.config();




//middleware routing 

app.use(express.json(), cors());
app.use(middleware.handle(i18next));
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);



//Server
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
    err ? console.error(err) : console.log("server is running"));