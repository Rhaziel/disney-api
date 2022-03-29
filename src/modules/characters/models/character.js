const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


class Character extends Model {
    static associate(models){
        Character.belongsToMany(models.Film,{
            through: 'Character_Film'
        })
    }
};

Character.init({
    // Model attributes are defined here
    image: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER
    },
    weight: {
        type: DataTypes.REAL
    },
    story: {
        type: DataTypes.STRING
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Character' // We need to choose the model name
});

//return Character;

// the defined model is the class itself
console.log(Character === sequelize.models.Character); // true