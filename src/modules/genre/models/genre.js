const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../database/dbConfig')

class Genre extends Model {}

Genre.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: false
    },

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Genre', // We need to choose the model name
    timestamps: false
});

// the defined model is the class itself
console.log(Genre === sequelize.models.Genre); // true

module.exports = Genre;