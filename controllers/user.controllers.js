import User from '../models/User.js';

export const postUser = async (req,res) =>{
    try {

        const newUser = new User(req.body);
        if (!req.body.email) {
            res.status(400).send({ message:req.t('ERROR.AUTH.MISSING_FIELD') });
            return;
        }
        const user = await User.findOne({email: req.body.email});

        if (user) {
            res.status(400).send({ message:req.t('ERROR.AUTH.USER_EXISTS') });
            return;
        }

        const response = await newUser.save();
        res.send({ response: response, message:req.t('SUCCESS.SAVED') });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message:req.t('ERROR.NOT_SAVED') });
    }
}

//Get User
export const getUser = async (req, res) => {
    try {
        const result = await User.find()
        res.send({ response: result, message:req.t('SUCCESS.FOUND_USER')});

    } catch (error) {
        res.status(400).send({ message:req.t('ERROR.NOT_fOUND') });
    }
}

// get One User

export const getOneUser = async (req, res) => {
    try {
        const result = await User.findOne({ _id: req.params.id });
        res.send({ response: result, message:req.t('SUCCESS.FOUND_USER') });

    } catch (error) {
        res.status(400).send({ message:req.t('ERROR.NOT_fOUND')});
    }
}

//deleteOneUser
export const deleteOneUser = async (req, res) => {
    try {
        const result = await User.findOneAndRemove({ _id: req.params.id });
        if(result.n)
             res.send({ message:req.t('SUCCESS.DELETED')});
            

    } catch (error) {
        res.send({ message:req.t('ERROR.NOT_fOUND')});
    }
}

// update User
export const updateUser =async (req, res) => {
    try {
        const result = await User.updateOne({ _id: req.params.id },  req.body );
        if(result.nModified)  res.statuts(200).send({ message:req.t('SUCCESS.EDITED')}) ;
    } catch (error) {
        res.status(400).send({ message:req.t('ERROR.NOT_UPDATED')})
    }
}