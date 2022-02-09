const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Character = sequelize.define('Character', {
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
});

// `sequelize.define` also returns the model
console.log(Character === sequelize.models.Character); // true