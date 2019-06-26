import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/user';

const router = express.Router();

router.post('/', (req, res) => {
  let userData = req.body;

  User.findOne({email: userData.email}, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send('invalid email');
      } else {
        if (user.password !== userData.password){
          res.status(401).send('invalid password');
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, 'someSecretKey');
          res.status(200).send({token});
        }
      }
    }
  })
})

module.exports = router;
