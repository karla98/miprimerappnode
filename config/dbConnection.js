const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'sql3.freemysqlhosting.net',
        user: 'sql3330399',
        password: 'UmhMnyFUYS',
        database: 'sql3330399'
    });
}