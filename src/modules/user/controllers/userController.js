const {createUser,login} = require('../services/userService');

const loginAction = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName || !password)
            return res.status(400).send("username and password parameters is required!")

        let response = await login(userName,password)

        if(!response)
            res.status(404).send("Bad credentials!")

        res.status(200).json(response)
    }catch (error) {
        res.status(500).send("server error"+error)
    }
}

const registerAction = async (req, res) => {
    try{
        const { userName, email, password } = req.body

        if(!userName || !email || !password)
            return res.status(400).send("username, email and password required!");

        let response = await createUser(userName, email, password);

        if(!response)
            return res.status(200).send("username or email is already use!");

        return res.status(201).json(response);

    }catch (error) {
        res.status(500).send("server error"+error)
    }
}

module.exports = { loginAction, registerAction }
