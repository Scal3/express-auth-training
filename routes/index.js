const router = require('express').Router()
const authRouter = require('./auth')
const usersRouter = require('./users')
const authorization = require('../middlewares/auth/auth')
const getdataDependingOnRole = require('../middlewares/roles/getdataDependingOnRole')

router.use('/auth', authRouter)
router.use('/users', authorization, getdataDependingOnRole(['ADMIN']), usersRouter)


module.exports = router