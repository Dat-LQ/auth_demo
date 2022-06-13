export const validateLoginForm = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.status(500).send('Username or password can not be empty!')
  }
  else{
    next()
  }
}