import express from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';

const router = express.Router();

// https://www.youtube.com/watch?v=0_rI7_gwqRc&list=PLC3y8-rFHvwg2RBz6UplKTGIXREj9dV0G&index=8

router.post('/', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      let payload = { subject: registeredUser._id};
      let token = jwt.sign(payload, 'someSecretKey');
      res.status(200).send({token});
    }
  })
});

module.exports = router;
