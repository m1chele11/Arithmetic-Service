

const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000; 
const {add} = require("./arithmetic")

app.use(cors());


app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req,params.m);
    let sum = add(n,m);
        res.json(sum);
});


app.listen(port); 