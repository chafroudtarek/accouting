import mongoose from 'mongoose';
import {DB_URI} from '../config.js'

 export const connectDB = async() =>{

    try{

        await mongoose.connect(DB_URI);
          console.log('MongoDB Connected');

    }catch(error){
        console.log(`can not connect to database ${error}`)
    }
}
