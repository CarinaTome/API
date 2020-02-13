var mongoose = require('mongoose');

Utilizadores = require('./ModeloUtilizador');


exports.new = function (req, res) {
    var users  = new Utilizadores();
    users.username = req.body.username ? req.body.username : users.username;
    users.password = req.body.password;
    users.email = req.body.email;

    users.save(function (err) {

        res.json({
            message: 'user Criado!!',
            data: users
        });
    });
};


exports.getuser = function (req, res) {

    Produto.findOneAndUpdate({ "_id": req.params.id }, { $set: req.body }, (err, resultado_update) => {

        if (err) {
            res.status(400).json(err);
        }
        res.json("SUCESSO");
    });

};