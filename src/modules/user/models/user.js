const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../database/dbConfig')

class User extends Model {
    /*static associate(models){
        Character.belongsToMany(models.Film,{
            through: 'Character_Film'
        })
    }*/
};

User.init({
    // Model attributes are defined here
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    timestamps: false
});

//return Character;

// the defined model is the class itself
console.log(User === sequelize.models.Character); // true

module.exports = User;