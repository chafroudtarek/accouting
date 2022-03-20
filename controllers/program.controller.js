import mongoose from "mongoose";
import Program from "../models/program.js"


export const searchprograms = async(req,res) => {

    try{ 
    let payload = req.body.payload;
    let search = await Program.find({name:{$regex: new RegExp('^'+payload+'.*','i')}}).exec();
    
    search = search.slice(0,2);

    res.status(200).send({payload:search });
   }catch(e){ 
   console.log(e)
   res.status(400).send({error:e, succes:false});
  }
}