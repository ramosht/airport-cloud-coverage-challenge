'use strict';

module.exports = function (router) {

    router.get('/', async function (req, res) {
        res.send('<h1>API - Health check ok</h1>')
    });

    router.post('/', async function (req, res) {
        res.json({message: 'API - Health check ok'})
    });
};
