const { login, register } = require("../services/userService");

const loginAction = async (req, res) => {
    try{
        let data = await login(req);


    }catch (error) {
        res.status(500).send("server error"+error)
    }
}

const registerAction = async (req, res) => {
    try{
        const { userName, email, password } = req.body

        if(!userName || !email || !password)
            return res.status(400).send("username, email and password required!");

        let response = await register(userName, email, password);

        if(!response)
            return res.status(200).send("username is already use!");

        return res.status(201).json(response);

    }catch (error) {
        res.status(500).send("server error"+error)
    }
}

module.exports = { loginAction, registerAction }
