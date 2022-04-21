const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const indexRouter = require('./routes/index')

const app = express()
const PORT = process.env.PORT || 5001
const DB_ADRES = process.env.DB_ADRES || 'mongodb://localhost:27017/express-auth'


app.use(express.json())
app.use(indexRouter)


const start = async () => {
  try {
    await mongoose.connect(DB_ADRES)
    app.listen(PORT, () => {
      console.log(`app is listening on ${PORT} port`)
    })
  } catch(err) {
      console.log(err.message)
  }
}

start()