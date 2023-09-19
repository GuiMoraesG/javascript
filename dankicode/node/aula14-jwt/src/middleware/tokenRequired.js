module.exports = {
    tokenRequired(req, res, next) {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({
                error: 'Loguin necessario'
            });
        }

        const [, token] = authorization.split(' ');

        next();
    }
};
