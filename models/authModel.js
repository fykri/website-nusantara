module.exports = {
    insertData: (db, data, callback)=> {
        db.query("INSERT INTO user SET ? ", data, callback)
    },
    SelectUsername: (db, data, callback)=> {
        db.query("SELECT * FROM user WHERE username = ?", data, callback)
    }
}
