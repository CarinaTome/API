let express = require('express')
let rotasapi = require("./api-rotas")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var porta = 8080;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//mongoose.connect('mongodb+srv://root:poiu123@api-eppqo.gcp.mongodb.net/Produtos?w=majority');


mongoose.connect('mongodb+srv://root:poiu123@cluster0-pdwt3.gcp.mongodb.net/Produtos?retryWrites=true&w=majority', {useUnifiedTopology: false});
mongoose.connection.once('open',()=>{

    console.log("Ligação efetuada com Sucesso");


}).catch(err => console.log(err));

app.get('/',(req,res) => res.sendfile('Interface.html'));

app.use('/api', rotasapi)
app.listen(porta);
