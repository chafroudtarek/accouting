import mongoose from 'mongoose';


 export const connectDB = async() =>{

    try{

        await mongoose.connect(process.env.DB_URI);
          console.log('MongoDB Connected');

    }catch(error){
        console.log(`can not connect to database ${error}`)
    }
}
