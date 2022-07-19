const Character = require('../models/character');


const createCharacter = async ({image,name,age,weight,story,films}) => {
    try{

        let characterDoc = await Character.findOne({name: name})

        if(characterDoc)
            return null

        const newCharacter = new Character({ image, name, age, weight, story, films});

        characterDoc = await newCharacter.save()

        return characterDoc;

    }catch(error){
        console.error("createCharacter error: ",error)
        throw new Error("createCharacter error "+error)
    }

}

const getCharacter = (id) => {

    return new Promise((resolve, reject) => {

        Character.findOne({id: id})
            .then(doc => {
                resolve(doc)
            })
            .catch(error => {
                console.error("getUser error: ",error)
                reject(error)
            })
    })

}

const updateCharacter = async (id, body) => {
    const {image,name,age,weight,story,films} = body


    return new Promise((resolve, reject) => {

        Character.update({ image: image,name: name,age: age,weight: weight,story: story,films: films }, {
            where: {id: id}
        })
            .then(doc => {
                resolve(doc)
            })
            .catch(error => {
                console.error("updateCharacter error: ",error)
                reject(error)
            })
    })
}

const getCharacters = () => {
    return new Promise( (resolve, reject)=>{
        Character.findAll({attributes: ['image', 'nombre']})
            .then(doc => {
                resolve(doc)
            })
            .catch(error => {
                console.error("getUser error: ",error)
                reject(error)
            })
    })
}

module.exports = { createCharacter, getCharacter, updateCharacter, getCharacters}