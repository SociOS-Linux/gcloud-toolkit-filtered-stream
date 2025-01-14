const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const stream = require('./controllers/stream')
const rules = require('./controllers/rules')

const app = express();
const PORT = process.env.PORT || 4060;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors()) 
app.post('*', cors()) 
app.use('/stream',stream);
app.use('/rules',rules);

app.listen(PORT, ()=>   {
    console.log("App listening on port",PORT);
    //stream.streamTweets();
});

module.exports = app;
