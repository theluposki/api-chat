const express = require('express')

const UserController = require('../../controllers/Auth-controller')

const router = express.Router()

router.post('/register', UserController.register)

router.post('/authenticate', UserController.authenticate)


module.exports = app => app.use('/auth', router) 