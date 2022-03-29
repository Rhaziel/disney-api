const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Film extends Model {
    static associate(models){
        Film.belongsToMany(models.Character, {
            through: 'Character_Film'
        })
    }
};

Film.init({
    // Model attributes are defined here
    image: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creationDate: {
        type: DataTypes.DATE
    },
    score: {
        type: DataTypes.REAL
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Film' // We need to choose the model name
});

//return Film;

// the defined model is the class itself
console.log(Film === sequelize.models.Film); // true