const Sequelize = require('sequelize');
const config = require('../config/config');
const mysql = require('mysql2/promise');


const db = {};

    // create db if it doesn't already exist
    mysql.createConnection({ host : config.host, user : config.db_user, password : config.db_password })
    .then(conn => {
        conn.query(`CREATE DATABASE IF NOT EXISTS \`${config.db_name}\`;`);

    }) ;
    //connection database
    const sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {
        host: config.host,
        dialect: config.db_dialect
    });

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.users = require('./user.model')(sequelize, Sequelize);

module.exports = db;



