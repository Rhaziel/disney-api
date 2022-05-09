const User = require('../models/user');
const getToken = require('../../commons/utils/jwtUtils')

const createUser = async (userName, email, password) => {
    try{
        let userDoc = await User.findOne({ where: { userName: userName } })

        if(!userDoc){
            userDoc = await User.findOne({where: {email: email} })
            if(!userDoc){
                return await saveUser(userName,email,password)
            }
        }
        return null
    }catch (error) {
        console.error("createUser error: ",error)
        throw new Error("createUser error "+error)
    }
}

const saveUser = async (userName, email, password) => {

    let newUser = await User.create({
        userName,
        email,
        password
    });

    return newUser;

}

const login = async (userName,password) => {
    try{
        let userDoc = await User.findOne({ where: {userName: userName, password: password} })

        if(userDoc) {
            return getToken(userDoc.userName)
        }else{
            return null
        }
    }catch(error){
        console.error("login error: ",error)
        throw new Error("login error "+error)
    }
}

module.exports = {createUser, login};