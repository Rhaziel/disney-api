const {Sequelize} = require('sequelize');

const db = new Sequelize(
    /*process.env.DB_NAME*/'disney',
    /*process.env.DB_USER*/'jere',
    /*process.env.DB_PASSWORD*/'12345',
    {
        host: /*process.env.DB_HOST*/'/var/run/postgresql',
        port: 5432,
        dialect: 'postgres',
        logging: false
    });

module.exports = db;