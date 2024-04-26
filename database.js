const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'warehouse_ban'
});

connection.connect((err) => {
    if(err) {
        console.log('error');
        return
    }
    console.log('Connected as ID:', connection.threadId);
});


module.exports = connection;
