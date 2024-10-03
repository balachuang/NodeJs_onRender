const express = require('express');

const PORT = process.env.PORT || 8686;

const app = express();
app.set('view engine', 'ejs');

// On Init.
app.listen(PORT, () => { console.log('Node.js Server ON') });

// Routing
app.get('/', (request, response) => {
	response.send("Node.js server is running on Render");
});
app.get('/ts', (request, response) => {
	let dateStr = (new Date(Date.now())).toUTCString();
	response.send(dateStr);
});
app.get('/hello', (req, res) => {
	// 叫 express 去 render views 底下叫做 hello 的檔案，副檔名可省略
	res.render('hello')
})
