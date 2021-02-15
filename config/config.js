'use strict';
const dotenv = require('dotenv').config();
const assert = require('assert');

const  {PORT , HOST , NODE_ENV , USER , PASSWORD , DB , DIALECT} = process.env;

assert(PORT , 'PORT is required');

module.exports = {
    port : PORT,
    host : HOST,
    node_env : NODE_ENV,
    db_user : USER,
    db_password : PASSWORD,
    db_name : DB,
    db_dialect : DIALECT
};

