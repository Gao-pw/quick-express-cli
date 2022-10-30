import jwt from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';

const secretKey = 'yout secret';

const createToken = (params) => {
  return 'Bearer ' + jwt.sign(params, secretKey);
};

/**
 * Parsing JWT unless path
 * @param {*} path
 */
const expressJWT = (path)=>expressjwt({secret: secretKey,algorithms:['HS256']}).unless({path})

export {expressJWT,createToken}