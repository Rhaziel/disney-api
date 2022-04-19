const { createCharacter, getCharacter, updateCharacter } = require("../services/characterService");

const createCharacterAction = async (req, res) => {
    try {

        const {image,name,age,weight,story,films} = req.body

        if (!image || !name || !age || !weight || !story || !films)
            return res.status(400).send("image,name,age,weight,history and films parameters is required!")

        let response = await createCharacter({ image,name,age,weight,story,films })

        if(!response)
            return res.status(200).send("name is already use!")

        return res.status(201).json(response)

    }catch (error){
        return res.status(500).send("Server error"+error)
    }
}

const getCharacterAction = async (req,res) => {
    try{

        let response = await getCharacter(req.param.id)

        if(!response)
            res.status(404).send("content not found!")

        res.status(200).json(response)

    }catch (error){

        res.status(500).send("server error"+error)

    }
}

const updateCharacterAction = async (req,res) => {
    try{
        let response = await updateCharacter(req.param.id, req.body)

        if(!response)
            res.status(404).send("content not found!")


        res.status(200).json(response)

    }catch (error){

        res.status(500).send("server error"+error)

    }
}

module.exports = {createCharacterAction, getCharacterAction, updateCharacterAction};
