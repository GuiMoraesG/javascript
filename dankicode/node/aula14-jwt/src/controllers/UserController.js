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

    async login(req, res) {
        const user = new UserModel(req.body)
        const token = await user.login();

        if (user.erros.length) {
            return res.status(400).json({
                errors: user.erros,
            });
        }

        return res.status(202).json({ token });
    },

    async privateOne(req, res) {
        const user = new UserModel(req.body)
        const { id } = req.params;
        const description = await user.findID(id);

        return res.status(202).json(description);
    },
}; 