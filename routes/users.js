import { Router } from 'express';
import {postUser,updateUser,deleteOneUser,getOneUser,getUser } from "../controllers/user.controllers.js";

const router = Router();


//@POST method
// @desc post a user
//@path : http://localhost:5000/eunoia/users/
//Params body

router.post("/", postUser);

//@Get method
// @desc Get all user
//@path : http://localhost:5000/eunoia/users
//Params body

router.get("/", getUser)



//@Get method
// @desc Get one user
//@path : http://localhost5000/eunoia/users:id
//Params body

router.get("/:id", getOneUser)

//@Delete method
// @desc delete one user by id
//@path : http://localhost5000/eunoia/users:id
//Params id
router.delete("/:id",deleteOneUser)

//@put method
// @desc update one User by id
//@path : http://localhost5000/eunoia/users:id
//Params id

router.put("/:id", updateUser)


export default router;