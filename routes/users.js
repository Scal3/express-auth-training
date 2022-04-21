const router = require('express').Router()
const userController = require('../controllers/users')


router.get('/', userController.getUsers)
router.post('/', userController.createRole)

module.exports = router