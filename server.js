const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const Employee = require('./models/Employee')

dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.json({message: 'Welcome to the API !'})
})

app.get('/all-employees', (req, res) => {
  Employee.find({}, (error, data) => { res.json(data) }) // Employee => db.employees
})

const port = process.env.PORT


mongoose.connect(process.env.DB_CONNECTION, (error) => {
  if (error) {
    console.log(error.message)
    return
  }
  console.log('Connection with database established')
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })
})