const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Film = sequelize.define('Film', {
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
});

// `sequelize.define` also returns the model
console.log(Film === sequelize.models.Film); // true