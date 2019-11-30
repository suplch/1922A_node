const express = require('express');

const product = express.Router();

product.get('/list', function(request, response) {
    response.send([{name: '电脑'},{name: '书籍'}])
})

product.get('/detail', function(request, response) {
    response.send({name: '电脑', price: 123, mode: 'x86'})
})



module.exports = product;