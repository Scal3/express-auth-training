const UsersService = require('../service/users')

class usersController {
  async getUsers(req, res) {
    try {
      const users = await UsersService.getUsers()
      res.json({ users })
    } catch(err) {
      console.log(err)
      res.status(500).json(err.message)
    }
  }

  async createRole(req, res) {
    try {
      const { value } = req.body
      const newRole = await UsersService.createRole(value)

      res.status(201).json(newRole)
    } catch(err) {
      console.log(err)
      res.status(500).json(err.message)
    }
  }
  
}

module.exports = new usersController()