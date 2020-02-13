var mongoose = require('mongoose');

var SchemaProdutos = mongoose.Schema({

username:    { 
    type:String,
    required:true

},
password:    {
    type:String,
    required:true
},
email:{
    type:String,
    required:true
}
});

var Produto = module.exports = mongoose.model('Utilizadores',SchemaProdutos);

module.exports.get = function (callback, limit){
    Produto.find(callback).limit(limit);
}

