const UserModel = require('../models/User');

module.exports = {
    async store(req, res) {
        try {
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
        } catch (e) {
            return res.status(400).json({
                errors: 'Problema na rota',
            });
        }
    },

    async login(req, res) {
        try {
            const user = new UserModel(req.body)
            const token = await user.login();

            if (user.erros.length) {
                return res.status(400).json({
                    errors: user.erros,
                });
            }

            return res.status(202).json({ token });
        } catch (e) {
            return res.status(400).json({
                errors: 'Problema na rota',
            });
        }
    },

    async privateOne(req, res) {
        try {
            const user = new UserModel(req.body)
            const { id } = req.params;
            const description = await user.findID(id);

            return res.status(202).json(description);
        } catch (e) {
            return res.status(400).json({
                errors: 'Usuário não encontrado',
            });
        }

    },
}; 