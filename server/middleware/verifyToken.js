import jwt  from "jsonwebtoken";
import Applications from "../model/Applications.js";


export const verifyToken = (req, res, next) => {
    
    let token
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]

            jwt.verify(token, process.env.JWT_KEY, (err, user) => {
                // if (err) return next(createError(403, "Token is not valid!"));
                if (err) console.log("token error");
                console.log("ithe user");
                console.log(user);
                req.user = user;
                next();
            });
            
        } catch (error) {
            
        }
    }

    // if (!token) {
    //     return next(createError(401, "You are not authenticated!"));
    // }
};



export const verifyUser = (req, res,next) => {
    verifyToken(req, res, async () => {
        const user = await Applications.findById(req.user.data)
        console.log(user);
        if (!user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};


export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, async () => {
        const admin = await Applications.findById(req.user.data)
        if (admin.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};