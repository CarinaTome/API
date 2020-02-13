let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'A API está a trabalhar',
        message: 'BEM VINDO'
    });
});

var controladorproduto = require('./ControladorProdutos');
var controladorusers = require('./ControladorUtilizador');
// Contact routes
router.route('/produtos')
    .get(controladorproduto.index)
    .post(controladorproduto.new);

router.route('/produtos/:id')
    .put(controladorproduto.update)
    .delete(controladorproduto.delete);

router.route('/users')
.get(controladorusers.getuser)
.post(controladorusers.new);

router.route('/users/:id')
.put(controladorproduto.update)
.delete(controladorproduto.delete);
    
// Export API routes
module.exports = router;