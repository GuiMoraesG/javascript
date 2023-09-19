const UserModel = require('../models/User');

module.exports = {
    async store(req, res) {
        const user = new UserModel(req.body)
        await user.criar();

        if (user.erros.length) {
            return res.status(400).json({
                errors: user.erros,
            });
        }

        return res.status(201).json({
            success: 'Seu Cadastro foi realizado!',
        });
    },
};
