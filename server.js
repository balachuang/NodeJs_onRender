const express = require('express');
const { Http2ServerRequest } = require('http2');

const PORT = process.env.PORT || 8686;

const app = express();
app.listen(PORT, () => { console.log('Node.js Server ON') });

// Routing
app.get('/', (request, response) => {
	response.send("Node.js server is running on Render");
});
app.get('/ts', (request, response) => {
	let dateStr = (new Date(Date.now())).toUTCString();
	response.send(dateStr);
});
