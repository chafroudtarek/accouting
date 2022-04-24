import mongoose from "mongoose";
import Academicyear from "../models/academicyear.js"


export const getallacademicyearterm = async (req, res) =>{

   
   try{
    const yearterms =  await Academicyear.find().populate("terms")
    console.log(yearterms)
    res.send({response:yearterms});
   }catch(e)
   {
       res.status(200).send({error:e , succes: false})
   }    
}

export const getacademicyearterms = async (req, res) =>{

   
    try{
     const yearterms =  await Academicyear.findOne({_id: req.params.id}).populate("terms")
     console.log(yearterms)
     res.send({response:yearterms, succes: true});
    }catch(e)
    {
        res.status(400).send({error:e, succes:false})
    }
 
 
     
 }