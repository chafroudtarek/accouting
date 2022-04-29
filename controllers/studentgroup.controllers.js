import mongoose from "mongoose";
import Student from "../models/student.js"

import Studentgroup from "../models/studentGroup.js"






export const getitemsbyname= async (req, res) =>{

  var aggregation = [{ $match : { enabled : true } }]

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
                                      '$_id', '$$feeacademicyearId'
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
    const studentgroup  = await Studentgroup.aggregate(aggregation)
   
    if(!studentgroup || studentgroup.length ==0){
     return res.status(404).send({message:"Not found", succes:false});

    }

    return res.status(200).json(
      {
          response: studentgroup,
          message: req.t("SUCCESS.RETRIEVED")

      }
  );

}catch(e){
  console.log(e)
 return res.status(400).send({error:e, succes:false});
}

}










export const getstudentsofgroup = async (req, res) =>{

  const id = req.params.id
  try{
   const students =  await Studentgroup.findOne({_id: req.params.id})
   console.log("POPULATE",students)
   res.send({response:students});
  }catch(e)
  {
      console.log("ererererer",e)
      res.status(400).send({error:e, succes: false})
  }    
}



export const deletestudent =  async (req, res) => {
    const id = req.params.id;
    try {
      // const object = await Model.findByIdAndDelete(id);

      const object = await Studentgroup.findById(id);

      
     
      
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


  
  
export const getAllDisabled= async (req, res) =>{

    var aggregation = [{ $match : { enabled : false } }]
  
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
                                        '$_id', '$$feeacademicyearId'
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
      const studentgroup  = await Studentgroup.aggregate(aggregation)
     
      if(!studentgroup || studentgroup.length ==0){
       return res.status(404).send({message:"Not found", succes:false});
  
      }
  
      return res.status(200).json(
        {
            response: studentgroup,
            message: req.t("SUCCESS.RETRIEVED")
  
        }
    );
  
  }catch(e){
    console.log(e)
   return res.status(400).send({error:e, succes:false});
  }
  
  }

