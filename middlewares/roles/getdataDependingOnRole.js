const jwt = require('jsonwebtoken')

module.exports = (userRoles) => {
  return (req, res, next) => {
    if(req.method === 'OPTIONS') {
      next()
    }
  
    try {
      const { roles } = req.user
      let hasRole = false
      roles.forEach(role => {
        if(userRoles.includes(role)) hasRole = true 
      })

      if(!hasRole) return res.status(403).json({ message: 'User does not access' })
      next()
  
    }catch(err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }
}