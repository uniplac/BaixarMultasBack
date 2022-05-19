
const express = require('express');
var cors = require('cors');
const routes = require('./routes');

var cors = require('cors');

const app = express();

app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true/*  */');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Access-Control-Allow-Headers',
				'x-access-token, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
	);
	next();
});


app.use(express.json()); // permitir que os outros usuarios acessem
app.use(cors());
app.use(routes);


 
 app.listen(4448, () => {
	console.log('Servidor rodando na porta 4448');
});

module.exports = app;