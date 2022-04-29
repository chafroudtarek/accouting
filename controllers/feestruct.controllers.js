import mongoose from "mongoose";
import feeStruct from "../models/feeStructure.js";

// add success to all response
export const getitemsbyname= async (req, res) =>{

    var aggregation = [ { $match : { enabled : true } }]

aggregation.unshift(
    

    {
        '$lookup': {
            'from': 'programs',
            'let': {
                'feeProgramId': '$program'
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeProgramId'
                                    ]
                                },
                               
                            ]
                        }
                    },
                   
                },
                {
                    '$project': {
                        name: 1
                    }
                }
            ],
            'as': 'programname'
        }
    },
    {
        "$unwind": {
            "path": "$programname"
        }
    }
)

aggregation.unshift(
    {
        '$lookup': {
            'from': 'academicterms',
            'let': {
                'feeacademictermId': '$academicterm' // to be changed
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeacademictermId'
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
            'as': 'academicterm'
        }
    },
    {
        "$unwind": {
            "path": "$academicterm"
        }
    }
)


aggregation.unshift(
    {
        '$lookup': {
            'from': 'academicyears',
            'let': {
                'feeacademicyearId': '$academicyear' // to be changed
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeacademicyearId',
                                        
                                    ]
                                },
                               
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
            'as': 'academicyear'
        }
    },
    {
        "$unwind": {
            "path": "$academicyear"
        }
    }
)

  try{
      const feestruct  = await feeStruct.aggregate(aggregation)
     
      if(!feestruct || feestruct.length ==0){
       return res.status(404).send({message:"Not found", succes:false});

      }

      return res.status(200).json(
        {
            response: feestruct,
            message: req.t("SUCCESS.RETRIEVED")

        }
    );

  }catch(e){
    console.log(e)
   return res.status(400).send({error:e, succes:false});
  }

}

export const getAllDisabled= async (req, res) =>{

    var aggregation = [ { $match : { enabled : false } }]

aggregation.unshift(
    

    {
        '$lookup': {
            'from': 'programs',
            'let': {
                'feeProgramId': '$program'
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeProgramId'
                                    ]
                                },
                               
                            ]
                        }
                    },
                   
                },
                {
                    '$project': {
                        name: 1
                    }
                }
            ],
            'as': 'programname'
        }
    },
    {
        "$unwind": {
            "path": "$programname"
        }
    }
)

aggregation.unshift(
    {
        '$lookup': {
            'from': 'academicterms',
            'let': {
                'feeacademictermId': '$academicterm' // to be changed
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeacademictermId'
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
            'as': 'academicterm'
        }
    },
    {
        "$unwind": {
            "path": "$academicterm"
        }
    }
)


aggregation.unshift(
    {
        '$lookup': {
            'from': 'academicyears',
            'let': {
                'feeacademicyearId': '$academicyear' // to be changed
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeacademicyearId',
                                        
                                    ]
                                },
                               
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
            'as': 'academicyear'
        }
    },
    {
        "$unwind": {
            "path": "$academicyear"
        }
    }
)

  try{
      const feestruct  = await feeStruct.aggregate(aggregation)
     
      if(!feestruct || feestruct.length ==0){
       return res.status(404).send({message:"Not found", succes:false});

      }

      return res.status(200).json(
        {
            response: feestruct,
            message: req.t("SUCCESS.RETRIEVED")

        }
    );

  }catch(e){
    console.log(e)
   return res.status(400).send({error:e, succes:false});
  }

}




export const getonefeestruct= async (req, res) =>{

    var aggregation = [ { $match : { _id : new mongoose.Types.ObjectId(req.params.id)} }]

aggregation.unshift(
    

    {
        '$lookup': {
            'from': 'programs',
            'let': {
                'feeProgramId': '$program'
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeProgramId'
                                    ]
                                },
                               
                            ]
                        }
                    },
                   
                },
                {
                    '$project': {
                        name: 1
                    }
                }
            ],
            'as': 'programname'
        }
    },
    {
        "$unwind": {
            "path": "$programname"
        }
    }
)

aggregation.unshift(
    {
        '$lookup': {
            'from': 'academicterms',
            'let': {
                'feeacademictermId': '$academicterm' // to be changed
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeacademictermId'
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
            'as': 'academicterm'
        }
    },
    {
        "$unwind": {
            "path": "$academicterm"
        }
    }
)


aggregation.unshift(
    {
        '$lookup': {
            'from': 'academicyears',
            'let': {
                'feeacademicyearId': '$academicyear' // to be changed
            },

            'pipeline': [
                {
                    '$match': {
                        '$expr': {
                            '$and': [
                                {
                                    '$eq': [
                                        '$_id', '$$feeacademicyearId',
                                        
                                    ]
                                },
                               
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
            'as': 'academicyear'
        }
    },
    {
        "$unwind": {
            "path": "$academicyear"
        }
    }
)

  try{
      const feestruct  = await feeStruct.aggregate(aggregation)
     
      if(!feestruct || feestruct.length ==0){
       return res.status(404).send({message:"Not found", succes:false});

      }

      return res.status(200).json(
        {
            response: feestruct,
            message: req.t("SUCCESS.RETRIEVED")

        }
    );

  }catch(e){
    console.log(e)
   return res.status(400).send({error:e, succes:false});
  }

}

