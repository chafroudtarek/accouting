import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';


export const getLoggenInUser = async (req, res, next) => {
  const { id } = req.user;
  
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).json({
        message:req.t('ERROR.UNAUTHORIZED')
        
      });
    }
    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error,
    });
  }
};

export const register = async (req, res, next) => {
  let { firstname, lastname, email, password,role } = req.body;
  if (!firstname || !lastname || !password || !email) {
    return res.status(400).json({ message:req.t('ERROR.AUTH.INVALID_INFORMATION'), success: false });
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message:req.t('ERROR.AUTH.USER_EXISTS'),
        success: false,
      });
    }

    bcryptjs.hash(password, 10, async (hashError, hash) => {
      if (hashError) {
        return res.status(500).json({
          message: hashError.message,
          error: hashError,
        });
      }

      const _user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstname,
        lastname,
        email,
        role,
        password: hash,
      });

      await _user.save();
      return res.status(201).json({
        message:req.t('SUCCESS.ADDED'),
        user: _user,
        success: true,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error,
    });
  }
};

export const login = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message:req.t('ERROR.AUTH.INVALID_CREDNTIALS'),
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message:req.t('ERROR.AUTH.INVALID_CREDNTIALS'),
        success: false,
      });
    }

    const payload = {
      user: {
        id: user.id,
       role: user.role,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err;
      return res.status(200).json({
        message:req.t('SUCCESS.APPROVED'),
        token,
        user,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: error,
    });
  }
};