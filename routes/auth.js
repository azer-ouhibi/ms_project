const express = require('express');
var Router = express.Router();
const { requireAuth, checkUser, notReqAuthentication } = require('../middleware/authMiddleware')

const User = require('../model/User')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const cookieParser = require('cookie-parser')
const localStorage = require('local-storage')


Router.use(cookieParser())
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));


const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
      api_key: "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"
  
    }
  }))

  // create json web token
  const maxAge = 3 * 24 * 60 * 60;
  const createToken = (id) => {
    return jwt.sign({ id }, 'secret', {
      expiresIn: maxAge
    });
  };

  Router.put('/update' , checkUser , (req , res) =>{
    User.findById(req.user._id).then(user => {
      user.tel = req.body.tel;
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      user.dateOfBirth = req.body.dateOfBirth;
      user.save()
        .then(() => res.json('your data updated successfully !'))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));

  })

  Router.delete('/delete', checkUser,(req, res) => {
    User.findByIdAndDelete(req.user._id)
      .then(() => res.json('your account deleted successfully !'))
      .catch(err => console.log(err));
  });

  Router.post('/signup',notReqAuthentication, (req, res) => {
    const { firstName, tel,
      lastName, email, password,pic,dateOfBirth } = req.body
    if (!email || !password || !firstName || !tel ||!lastName || !dateOfBirth) {
      return res.status(422).json({ error: "please add all the fields" })
    }
    User.findOne({ email: email })
      .then((savedUser) => {
        if (savedUser) {
          return res.status(422).json({ error: "user already exists with that email" })
        }
        bcrypt.hash(password, 12)
          .then(hashedpassword => {
            const user = new User({
              email,
              password: hashedpassword,
              firstName,
              lastName,
              tel,
              pic,
              dateOfBirth,
              role: "Client"
  
            })
  
            user.save()
              .then(user => {
                transporter.sendMail({
                  to: user.email,
                  from: "ouhibi.azer@esprit.tn",
                  subject: "signup success",
                  html: "<h1>WELCOME TO SMARTSALES</h1>"
  
                })
                res.json({ message: "saved successfully" })
              })
              .catch(err => {
                console.log(err)
              })
          })
  
      })
      .catch(err => {
        console.log(err)
      })
  })

  Router.post("/login",notReqAuthentication, async(req, res) => {
    console.log("Here in login", req.body);
    
    User.findOne({ email: req.body.email }).then(
      (resultEmail) => {
        console.log("resultEmail", resultEmail);
        if (!resultEmail) {
          res.status(200).json({
            findedUser: "Wrong Email"
          });
        }
  
        return bcrypt.compare(req.body.password, resultEmail.password);
      })
      .then(
        (resultPwd) => {
          console.log("resultPwd", resultPwd);
          if (!resultPwd) {
            res.status(200).json({
              findedUser: "Wrong password"
            });
          }
          else {
            User.findOne({ email: req.body.email }).then(
              (result) => {
                generateToken(result, 200, res);

                
              }
            )
          }
  
        })
  });
  const generateToken = async (User, statusCode, res) =>{

    const token = await User.jwtGenerateToken();

    const options = {
        httpOnly: true,
        expiresIn: maxAge
    };

    
    res.status(statusCode)
    res.cookie('token', token, options )
    .json({success: true, token})
    
}

  Router.get('/logout',checkUser, async(req, res, next) => {
    
    res.cookie('token', '', { maxAge: 1 });
    res.status(200).json({
  
      message: "done"
    })
    next()
  
  }
  );

  module.exports = Router;
