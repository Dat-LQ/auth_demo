import User from '../models/User.js'

export const register = (req, res, next) => {
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
        res.send('Login success!')
      } else {
        res.status(400).send('Wrong username or password!')
      }
    })
    .catch((e) => {
      res.status(500).send(e)
    })
}
