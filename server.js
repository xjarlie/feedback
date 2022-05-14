const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const feedbackRoute = require('./routes/feedback');
const appRoute = require('./routes/app');

app.set('view engine', 'ejs');

app.use(compression());
app.use(cors());
app.use(express.json());

app.use('/api/feedback', feedbackRoute);
app.use('/', appRoute);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});