const Database = require('x-jsondb');
const path = require('path');

const db = new Database(path.join(__dirname, 'db.json'));

module.exports = db;