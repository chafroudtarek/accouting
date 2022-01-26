import mongoose from 'mongoose';
import { mylogger } from '../utils/winstonn.js';

 export const connectDB = async() =>{

    try{

        await mongoose.connect(process.env.DB_URI);
          
          mylogger.info(' DATABASE(MONGODB) is Connected')

    }catch(error){
        
        mylogger.error(' DATABASE(MONGODB) can not Connected')
    }
}
