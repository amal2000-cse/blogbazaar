import jwt from 'jsonwebtoken';
import { errorHandler } from './Error.js';

export const verifyToken = (req,res,next) =>{
    //to request the cookie from the browser, we want to install the package,
    //cookie-parser
    const token = req.cookies.access_token;
    if(!token){
        return next(errorHandler(401, 'Unauthorized'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return next(errorHandler(401, 'Unauthorized'));
        }
        req.user = user;
        next();
    })
}