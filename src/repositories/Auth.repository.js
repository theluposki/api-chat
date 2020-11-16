const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

const generateToken = async (id) => {
    const token = await jwt.sign({ id: id }, authConfig.secret, {
        expiresIn: 86400
    })
    return token
}

exports.findEmail = async (email) => {
    return await User.findOne({ email })
}

const findEmailPassword = async (email) => {
    return await User.findOne({ email }).select('+password')
}

exports.register = async (body) => {
    const user = new User(body)
    await user.save()
    user.password = undefined
    const token  = await generateToken(user.id)
    return { user, token}
}

exports.authenticate = async (email, password) => {

    const user = await findEmailPassword(email)

    if(!user) {
        return { error: 'Usuario não existe.' }
    }

    if(!await bcrypt.compare(password, user.password)) {
        return { error: 'Senha inválida.'}
    }

    user.password = undefined

    return { user, token: await generateToken(user.id) }
}
