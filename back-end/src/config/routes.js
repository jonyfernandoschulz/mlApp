const express = require('express')

module.exports = function(server) {

    const router = express.Router()

    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Pesquisa' });
    });

    /* GET home page. */
    router.get('/api/items?search=', function(req, res, next) {
        res.render('item/items', { title: 'Listagem de Items' });
    });

    /* GET home page. */
    router.get('/api/items/:id', function(req, res, next) {
        res.render('item/item-detalhe', { title: 'Detalhe' });
    });

    // server.use('/api', router)
    server.use('hhttps://api.mercadolibre.com/sites/MLA/search?q=', router)
    server.use('https://api.mercadolibre.com/items/:id', router)
    server.use('https://api.mercadolibre.com/items/:id/description', router)
    // server.use('/', router)
    // server.use('https://api.mercadolibre.com/sites/MLA/search?q=', router)
    // server.use('https://api.mercadolibre.com/sites/MLA/search?q=/:id', router)

    const mlService = require('../api/ml/ml-service')
    mlService.register(router, '/mls')
}