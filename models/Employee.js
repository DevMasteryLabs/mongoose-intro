const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  firstName: String, 
  lastName: String
})

const EmployeeModel = mongoose.model("Employee", EmployeeSchema) // employees

module.exports = EmployeeModel