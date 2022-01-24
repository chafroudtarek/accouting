import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js'

const auth = (req, res, next) => {
  let token = req.headers.authorization.split(' ')[1];
  if (token) {
    jwt.verify(token, JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(404).json({
          message: 'Token is not valid',
        });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    return res.status(401).json({
      message: 'No Token, authorization denied',
      success: false,
    });
  }
};

export default auth;