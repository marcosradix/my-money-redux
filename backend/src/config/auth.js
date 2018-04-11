const jwt = require('jsonwebtoken');
const env = require('../.env');

module.exports = (req, res, next) => {
    // CORS preflight request
    if (req.method === 'OPTIONS') {
        next();
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization'];
        if (!token) {
            return res.status(403).send({ errors: ['Não há uma chave de acesso válida.'] });
        }
        jwt.verify(token, env.authSecret, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    errors: ['Erro na hora de autenticar a chave.']
                });
            } else {
                //req.decoded = decoded
                next();
            }
        });
    }
}