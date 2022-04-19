const db = require('./dbConfig');

async function sequelize() {
    /*try {
        await db.sync();
        console.log('Connection has been successfully');
    } catch (error) {
        console.error('Unable to connect to database:', error);
    }*/
    try {
        await db.sync({force: true} );
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = sequelize
