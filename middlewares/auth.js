import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  let token = req.headers.authorization.split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(404).json({
          message:req.t('ERROR.AUTH.INVALID_TOKEN'),
        });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    return res.status(401).json({
      message:req.t('ERROR.AUTH.UNAUTHORIZED'),
      success: false,
    });
  }
};

export default auth;