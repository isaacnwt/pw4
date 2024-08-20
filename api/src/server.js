const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res)=>{
   res.send('Vai, Corinthians!');
});

app.listen(8080,()=>{
   console.log('Conectando porta 8080...');
});