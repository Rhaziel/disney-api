const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();

/**
 * @description This function generates a JWT
 * @param {String} userName
 * @return {{token: (*)}}
 */

const getToken = (userName) => {

    if (!process.env.JWT_SECRET) throw new Error("getToken process.env.JWT_SECRET is required!");

    if (!process.env.JWT_LOGIN_EXPIRED_IN) throw new Error("getToken process.env.JWT_LOGIN_EXPIRED_IN is required!");

    try{

        const payload = {userName}

        const options = {
            expiresIn: process.env.JWT_LOGIN_EXPIRED_IN,
            jwtid: userName,
            algorithm: "HS256"
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, options);

        return {token}

    }catch (error){
        throw new Error(error);
    }

}

module.exports = getToken;