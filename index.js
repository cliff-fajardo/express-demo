const startupDebugger = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const express = require('express');

const courses = require('./routes/courses');
const home = require('./routes/home');

const app = express();

// Configuration
console.log(`Application Name: ${ config.get('name')}`);
console.log(`Application Name: ${ config.get('mail.host')}`);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
}

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});

