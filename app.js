const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/productCart', (req,res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'))
})

app.get('/productCart2', (req,res) => {
    res.sendFile(path.join(__dirname, './views/productCart2.html'))
})

app.listen(3000, () => console.log('Respondiendo en el puerto 3000'));
app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname, './views/index.html'))
})