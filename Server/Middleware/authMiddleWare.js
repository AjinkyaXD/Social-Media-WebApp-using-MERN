import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_KEY || 'jwt_secret_key';

const authMiddleWare = async (req, res, next) => {
    try {
        const authHeader = req.headers?.authorization;
        if (authHeader?.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, secret);
            req.body._id = decoded?.id;
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Authentication failed.' });
    }
}

export default authMiddleWare;