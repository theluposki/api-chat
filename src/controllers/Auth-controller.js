const AuthRepository = require('../repositories/Auth.repository')

exports.register = async (req, res) => {
    const { email } = req.body

    try {
        if(!await AuthRepository.findEmail(email)){

            const user = await AuthRepository.register(req.body)

            res.status(201).send({ user, message: 'Criado com sucesso!' })
        } else {
            res.status(400).send({  error: 'Usuário ja Cadastrado.' })
        }
    } catch (error) {
        res.status(400).send({  error: 'Ouve um erro ao cadastrar Usuário.' })
    }
}

exports.authenticate = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await AuthRepository.authenticate(email,password)
        res.send({ user })
    } catch (error) {
        res.status(400).send({ error: 'Ouve um erro ao autenticar. verifique que os dados estão corretos.' })
    }
}