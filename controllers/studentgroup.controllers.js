import mongoose from "mongoose";
import Student from "../models/student.js"




export const deletestudent =  async (req, res) => {
    const id = req.params.id;
    try {
      // const object = await Model.findByIdAndDelete(id);
      const object = await Student.findOneAndRemove({_id:id });
      
     
      
      return !object
        ? res.send(404)
        : res.status(200).json({
            
            message: req.t("SUCCESS.DELETED"),
            succes: true
          });
    } catch (e) {
         console.log(e)
      return res.status(400).json({
        error: e,
        succes:false

      });
    }
  };