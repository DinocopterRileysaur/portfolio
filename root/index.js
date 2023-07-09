const path = require('node:path');
const port = 3000;
const express = require('express');
const app = express();
app.use(
	express.static(
		path.join(__dirname, '../frontend-portfolio/dist/frontend-portfolio')
	)
);
app.listen(port, () => {
	console.log('server starting on port ' + port);
});
