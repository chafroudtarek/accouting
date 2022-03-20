import mongoose from "mongoose";
import academicyear from "../models/academicyear.js"
import Academicterm from "../models/academicterm.js"

// add success to all response
export const createterm = async (req, res) =>{

    try{
        
         const result = await Academicterm.create(req.body).then(
            term => {
                 return academicyear.findByIdAndUpdate(
                    req.params.id,
                    {$push:{terms:term._id}}
                   
                    )
                    
            }
   
        )
        res.status(200).send({message:'Successfully added', sucess:true})
       
    }catch(e){
        res.status(400).send({error :e, succes: false})
    }
    
}

export const deleteOneById =  async (req, res) => {
    const id = req.params.id;
    try {
      const object = await Academicterm.findOneAndRemove({_id:id });
      
     
      
      return !object
        ? res.send(404)
        : res.json({
            
            message: req.t("SUCCESS.DELETED"),
            succes: true 
          });
    } catch (e) {
         console.log(e)
      return res.status(400).json({
        message: req.t(e),
        succes: false
      });
    }
  };