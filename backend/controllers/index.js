'use strict';

module.exports = function (router) {

    router.get('/', async function (req, res) {
        res.send('<h1>API - Teste NS</h1>')
    });
};
