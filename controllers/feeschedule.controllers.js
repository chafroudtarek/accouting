import mongoose from "mongoose";

import feeSchedule from "../models/feeschedule.js";

// add success to all response
export const getwithname= async (req, res) =>{

    var aggregation = [{ $match : { enabled : true } }]

aggregation.unshift(

    

    {
        '$lookup': {
            'from': 'feestructs',
            'let': {
                'feeStructId': '$feeStructureId'
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeStructId'
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    '$project': {
                        name: 1
                    }
                }
            ],
            'as': 'feestructname'
        }
    },
    {
        "$unwind": {
            "path": "$feestructname"
        }
    }
)




  try{
      const feeschedule  = await feeSchedule.aggregate(aggregation)
    
      if(!feeschedule || feeschedule.length ==0){
       return res.status(404).send({message:"Not found", succes:false});

      }

      return res.status(200).json(
        {
            response: feeschedule,
            message: req.t("SUCCESS.RETRIEVED")

        }
    );

  }catch(e){
    console.log(e)
   return res.status(400).send({error:e, succes:false});
  }

}


export const getAllDisabled= async (req, res) =>{

    var aggregation = [{ $match : { enabled : false} }]

aggregation.unshift(

    

    {
        '$lookup': {
            'from': 'feestructs',
            'let': {
                'feeStructId': '$feeStructureId'
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeStructId'
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    '$project': {
                        name: 1
                    }
                }
            ],
            'as': 'feestructname'
        }
    },
    {
        "$unwind": {
            "path": "$feestructname"
        }
    }
)




  try{
      const feeschedule  = await feeSchedule.aggregate(aggregation)
    
      if(!feeschedule || feeschedule.length ==0){
       return res.status(404).send({message:"Not found", succes:false});

      }

      return res.status(200).json(
        {
            response: feeschedule,
            message: req.t("SUCCESS.RETRIEVED")

        }
    );

  }catch(e){
    console.log(e)
   return res.status(400).send({error:e, succes:false});
  }

}