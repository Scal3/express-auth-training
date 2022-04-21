const AuthService = require('../service/auth')
const bcryptjs = require('bcryptjs')
const generateAccessToken = require('../utils/generateAccessToken')

class authController {
  async registration(req, res) {
    try {
      const { userName, password, role } = req.body

      const isUserExist = await AuthService.isUserExist(userName)
      if(isUserExist) return res.status(403).json({ message: 'User alredy exist' })

      const hasRole = await AuthService.isRoleExist(role)
      if(!hasRole) return res.status(404).json({ message: 'Role not found' })

      const hashPassword = await bcryptjs.hash(password, 5)
      const userData = { userName, password: hashPassword, role }
      const newUser = await AuthService.createUser(userData)

      res.status(201).json(newUser)

    }catch(err) {
      console.log(err.message)
      res.status(400).json({ message: 'registration error' })
    }
  }

  async login (req, res) {
    try {
      const { userName, password } = req.body

      const user = await AuthService.isUserExist(userName)
      if(!user) return res.status(403).json({ message: 'User does not exist' })

      const validPassword = await bcryptjs.compare(password, user.password)
      if(!validPassword) return res.status(400).json({ message: 'Username or password is incorrect' })

      const token = generateAccessToken(user._id, user.role)

      res.status(200).json({ token })

    }catch(err) {
      res.status(400).json({ message: 'login error' })
    }
  }

}

module.exports = new authController()