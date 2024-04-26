const express = require('express');
const app = express();
const db = require('./database');
const method_override = require('method-override')
const session = require('express-session')
const cookie = require('cookie-parser')
const auth = require('./router/authRouter')
const cors = require('cors')

const port = 3000;

app.use(method_override('_method'))
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}))
app.use(cookie())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req,res,next)=> {
  req.db = db
  next();
})

// app.use((req,res)=> {
//   if(!req.session.user_id) {
//     return res.redirect('/auth/login')
//   }
//   next()
// })

//router
app.use('/auth', auth)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

