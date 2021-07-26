const Express = require('express');
const app = Express();
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const port = process.env.PORT || 1066;



app.use(cors());
app.use("/static", Express.static('./static/'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/interface.html'))
});

app.use(Express.static(__dirname + '/Script'));

app.listen(port, () => {
	console.log('You can access http://localhost:1066');
});


