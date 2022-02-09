const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Genre = sequelize.define('Genre', {
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
});

// `sequelize.define` also returns the model
console.log(Genre === sequelize.models.Genre); // true