const router = require('express').Router()
const authController = require('../controllers/auth')
const registerValidation = require('../middlewares/validations/registerValidation')
const loginValidation = require('../middlewares/validations/loginValidation')


router.post('/registration', registerValidation, authController.registration)
router.post('/login', loginValidation, authController.login)

module.exports = router