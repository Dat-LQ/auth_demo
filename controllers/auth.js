import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { isValidUsername, isValidPassword } from '../utils/validator.js'


export const register = (req, res, next) => {
  if (!isValidUsername || !isValidPassword){
    res.status(400).send('Username or password is invalid')
  }
  const user = new User(req.body)
  User.findOne({ username: req.body.username })
    .then((data) => {
      if (data) {
        res.status(400).send('Username is existed!')
      } else {
        user.save().then(() => res.send('Register success'))
      }
    })
    .catch((e) => {
      res.status(500).send(e)
    })
}
export const login = (req, res, next) => {
  User.findOne(req.body)
    .then((data) => {
      if (data) {
        let token = jwt.sign({ data: req.body.username }, process.env.JWT_SECRET_KEY, { expiresIn: '60s' })
        res.send('Login success! Your token: ' + token)
      } else {
        res.status(400).send('Wrong username or password!')
      }
    })
    .catch((e) => {
      res.status(500).send(e)
    })
}
