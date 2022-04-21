const jwt = require('jsonwebtoken')

const generateAccessToken = (id, roles) => {
  const payload = { id, roles }
  const key = process.env.JWT_KEY || 'test'
  return jwt.sign(payload, key, { expiresIn: '7d' })
}

module.exports = generateAccessToken