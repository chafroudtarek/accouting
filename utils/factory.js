import { mylogger } from "../utils/winstonn.js";


export const getAll = (Model) => async (req, res) => {
  try {
    const objects = await Model.find({enabled:true})
    res.status(200).json({
      response: objects,
      message:
        objects?.length > 0
          ? req.t("SUCCESS.RETRIEVED")
          : req.t("ERROR.NOT_FOUND"),
    });
  } catch (e) {
    mylogger.error(`Error in getAll() function`);
    return res.status(400).json({
      message: req.t("ERROR.UNAUTHORIZED"),
    });
  }
};

export const getOne = (Model) => async (req, res) => {
  try {
    const { id } = req.params;
    const object = await Model.findById(id);
    return !object
      ? res.status(404).json({ message: req.t("ERROR.NOT_FOUND") })
      : res.status(200).json({
          response: object,
          message: req.t("SUCCESS.RETRIEVED"),
        });
  } catch (e) {
    mylogger.error(`Error in getOne() function`);
    return res.status(400).json({
      message: req.t("ERROR.UNAUTHORIZED"),
    });
  }
};

export const createOne = (Model) => async (req, res) => {
  mylogger.info("Create One");
  mylogger.info("Model :", Model.modelName);
  console.log("*****",Model.modelName)
  const object = new Model(req.body);
  mylogger.info("Object :", object);
  console.log("Object :", object)
  try {
    await object.save();
    console.log("Saved ");

    res.status(201).json({
      response: object,
      message: req.t("SUCCESS.CREATED"),
    });
  } catch (e) {
    console.log("error",e)
    
    return res.status(400).json({
      message: e,
    });
  }
};

export const updateOne = (Model) => async (req, res) => {
  const updates = Object.keys(req.body);
  const id = req.params.id;
  try {
    const object = await Model.findById(id);
    if (!object) return res.sendStatus(404);
    updates.forEach((update) => {
      object[update] = req.body[update];
    });
    await object.save();
    return res.json({
      response: object,
      message: req.t("SUCCESS.SAVED"),
    });
  } catch (e) {
    mylogger.error(`Error in updateOne() function : ${e}`);
    return res.status(403).json({ message: req.t("ERROR.UNAUTHORIZED") });
  }
};

export const deleteOne = (Model) => async (req, res) => {
  const id = req.params.id;
  try {
    // const object = await Model.findByIdAndDelete(id);
    const object = await Model.findById(id);
    object.enabled = false;
    await object.save();
    return !object
      ? res.send(404)
      : res.json({
          response: object,
          message: req.t("SUCCESS.DELETED"),
        });
  } catch (e) {
    mylogger.error(`Error in deleteOne() function`);
    return res.status(400).json({
      message: req.t("ERROR.UNAUTHORIZED"),
    });
  }
};

export const restore = (Model) => async (req, res) =>{
  
  try{
    const object = await Model.findOne({ _id: req.params.id });
    object.enabled = true;
    const response = await object.save();
    res.send({ message: response});



}catch(e){
    res.send({ message: req.t("ERROR.NOT_FOUND") });
}
}

export const getAllDisabled = (Model) => async (req, res) =>{
  try {
    const objects = await Model.find({enabled:false})
    res.status(200).json({
      response: objects,
      message:
        objects?.length > 0
          ? req.t("SUCCESS.RETRIEVED")
          : req.t("ERROR.NOT_FOUND"),
    });
  } catch (e) {
    
    mylogger.error(`Error in getAll() function`);
    
    return res.status(400).json({
      message: req.t("ERROR.DEFAULT"),
    });
  }
}

