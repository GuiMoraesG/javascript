const userModel = require('../models/User');

module.exports = {
    store(req, res) {
        const user = userModel.criar(req.body);

        if (!user) return res.status(400).send({
            error: 'Algum campo está com erro'
        });

        return res.send(user);
    },
};
