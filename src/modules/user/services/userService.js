const User = require('../models/user');

const createUser = async (userName, email, password) => {
    try{
        let userDoc = await User.findOne({ where: { userName: userName } })

        if(!userDoc){
            userDoc = await User.findOne({email: email})
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



module.exports = createUser;