const express = require('express');
var cors = require('cors');
const routes = require('./routes');

var cors = require('cors');

const https = require('https');
const fs = require('fs');


const app = express();


app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Methods', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'x-access-token, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
	);
	next();
});
app.use(cors());


app.use(express.json()); // permitir que os outros usuarios acessem

app.use(routes);


const httpsServer = https.createServer({
	key: fs.readFileSync('/home/niu/certs/privada26947.key'),
	cert: fs.readFileSync('/home/niu/certs/certificado26947.crt'),
	ca: fs.readFileSync('/home/niu/certs/root_ca26947.crt'),
}, app);

httpsServer.listen(4448, () => {
	console.log('HTTPS Server running on port 4444');
});
 
/* app.listen(4444, () => {
	console.log('HTTPS Server running on port 4444');
});
 */
module.exports = app;