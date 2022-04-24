
import { Kafka } from'kafkajs';
import Program from "../models/program.js"
import mongoose from 'mongoose';
import {pusher} from './pusher.js'

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092', 'localhost:9092']
  })
  
  const consumer = kafka.consumer({ groupId: 'kafka6' })
  
  
export const run = async (req ,res) => {
    
    await consumer.connect()
    await consumer.subscribe({ topic: 'my-topic6', fromBeginning: true })
  
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
       
       
       console.log("****************************",)
        const obj = JSON.parse(message.value);
        console.log(obj)
        
        try{
            
            const response= await Program.updateOne( {"_id": mongoose.Types.ObjectId(obj._id)}, {$set:obj}, {upsert: true})
            
            if(response){
                pusher.trigger('program', 'new', employee)
                console.log("Executing wihout problems...")
            }
            
              }catch(e){
                  console.log("catch : "+e)
              }
      
          
       
      },
    })
   
      
    }
  
  
  