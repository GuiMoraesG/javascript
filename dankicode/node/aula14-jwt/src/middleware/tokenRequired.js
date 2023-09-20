const jwt = require('jsonwebtoken');

module.exports = {
    tokenRequired(req, res, next) {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({
                error: 'Loguin necessario'
            });
        }

        const [, token] = authorization.split(' ');

        try {
            jwt.verify(token, process.env.SECRETTOKEN);

            return next();
        } catch (e) {
            return res.status(401).json({
                error: 'Login expirated',
            })
        }
    }
};
