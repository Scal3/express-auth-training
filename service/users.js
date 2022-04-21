const User = require('../models/User')
const Role = require('../models/Role')

class UsersService {
  async getUsers() {
    const users = User.find()
    return users
  }

  async createRole(value) {
    const newRole = Role.create({ value })
    return newRole
  }
}

module.exports = new UsersService()