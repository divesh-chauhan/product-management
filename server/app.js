require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const connect_DB = require('./config/connect_DB');
const route = require('./routes/productRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(morgan('dev'));

connect_DB();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.get('/get', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/get.html'));
});

app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/post.html'));
});

app.get('/update', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/update.html'));
});

app.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/delete.html'));
});

app.use('/api/product', route);


module.exports = app;