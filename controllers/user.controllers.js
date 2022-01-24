import User from '../models/User.js';

export const postUser = async (req,res) =>{
    try {

        const newUser = new User(req.body);
        if (!req.body.email) {
            res.status(400).send({ message: "email is required check again" });
            return;
        }
        const user = await User.findOne({email: req.body.email});

        if (user) {
            res.status(400).send({ message: "user aleardy exist" });
            return;
        }

        const response = await newUser.save();
        res.send({ response: response, message: "user is saved" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "can not save it" });
    }
}

//Get User
export const getUser = async (req, res) => {
    try {
        const result = await User.find()
        res.send({ response: result, message: "geeting users successufylly" });

    } catch (error) {
        res.status(400).send({ message: "can not get users" });
    }
}

// get One User

export const getOneUser = async (req, res) => {
    try {
        const result = await User.findOne({ _id: req.params.id });
        res.send({ response: result, message: "geeting user successufylly" });

    } catch (error) {
        res.status(400).send({ message: "can not get user" });
    }
}

//deleteOneUser
export const deleteOneUser = async (req, res) => {
    try {
        const result = await User.findOneAndRemove({ _id: req.params.id });
        result.n
            ? res.send({ response: "user deleted" })
            : res.send("there is no user with this id");

    } catch (error) {
        res.send("there no id");
    }
}

// update User
export const updateUser =async (req, res) => {
    try {
        const result = await User.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
        result.nModified ? res.send("updated") : res.send("user already updated")
    } catch (error) {
        res.status(400).send("error not updated")
    }
}