const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(express.json({extended: true}))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1/button', require('./routes/buttonStatus.routes'))


const port = 8000;

app.listen(port, () => {
    console.log('Server start on port: ' + port);
});