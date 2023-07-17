const path = require('node:path');
const port = 3000;
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, './dist/')));
app.listen(port, () => {
	console.log('Server starting on port ' + port);
});
