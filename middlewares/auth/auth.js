const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if(req.method === 'OPTIONS') {
    next()
  }

  try {
    const tokenWithBearer = req.headers.authorization
    const token = tokenWithBearer.split(' ')[1]
    if(!token) return res.status(403).json({ message: 'User does not authorized' })

    const JWT_KEY = process.env.JWT_KEY || 'test'
    const payload = jwt.verify(token, JWT_KEY)

    req.user = payload
    next()

  }catch(err) {
    console.log(err)
    res.status(403).json({ message: 'User does not authorized' })
  }
}