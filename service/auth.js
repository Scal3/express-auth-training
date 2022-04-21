const User = require('../models/User')
const Role = require('../models/Role')

class AuthService {
  async isUserExist(userName) {
    const candidate = User.findOne({ userName })
    return candidate
  }

  async isRoleExist(value) {
    const hasRole = Role.findOne({ value })
    return hasRole
  }

  async createUser({ userName, password, role }) {
    const newUser = User.create({ userName, password, role })
    return newUser
  }
}

module.exports = new AuthService()