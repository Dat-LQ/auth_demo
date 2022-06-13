import express from 'express'
import 'dotenv/config'
import { register, login } from './controllers/auth.js'
import bodyParser from 'body-parser'
import { validateLoginForm } from './middlewares/validateInputForm.js';

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('Auth Tutorial')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening port: ${port}`)
})
app.post('/register', validateLoginForm, (req, res, next) => register(req, res, next))
app.post('/login', validateLoginForm, (req, res, next) => login(req, res, next))
