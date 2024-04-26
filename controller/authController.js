const authModel = require('../models/authModel')
const uuid = require('uuid')
const bycrpt = require('bcrypt')
const db = require('../database')


const haspassword = async (password) => {
    const salt = await bycrpt.genSalt(10)
    const hash = await bycrpt.hash(password, salt)
    return hash
}

const getEmail = (db, email) => {
    return new Promise((resolve, reject) => {
        const checkDatabase = "SELECT username FROM user WHERE username = ?";
        db.query(checkDatabase, [email], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};


module.exports = {
    register: async(req,res)=> {
        try {
            const {username, password, confirmPassword} = req.body
            const emailExists = await getEmail(db, username);
            if(emailExists.length > 0) return res.json({msg: 'email sudah terdaftar harap gunakan email lain', berhasil:false})
            if(!confirmPassword) return res.json({msg: 'confirmPassword tidak boleh kosong', berhasil: false})
            if (password !== confirmPassword) return res.json({ msg: 'Password tidak sesuai dengan konfirmasi password', berhasil: false});
            
            const hasPass = await haspassword(password)
            const dataUser = {
                id_user: uuid.v4(),
                username: username,
                password: hasPass
            }
            
            authModel.insertData(req.db, dataUser, (error, result)=> {
                if(error) return res.status(500).json({ msg: 'gagal menambahkan data' });
                res.status(200).json({msg:'registrasi berhasil', berhasil:true})
            })
        } catch (error) {
            console.error('Error saat melakukan registrasi:', error);
            res.status(500).json({ msg: 'Terjadi kesalahan saat melakukan registrasi' });
        }
        
    },

    
    login: (req, res) => {
        const {username, password} = req.body
        try {
            authModel.SelectUsername(req.db, [username], async(error, result) => {
                if(result.length == 0) return res.send('kosong')
                const checkPassword = await bycrpt.compare(password, result[0].password)
                if(!checkPassword) return res.send('password salah')
                req.session.id_user = result[0].id_user;
                res.send('login berhasil')
            })
        } catch(err) {
            console.log('error');
        }
       
    }
}

