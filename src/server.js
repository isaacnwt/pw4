const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res)=>{
   res.send('Olá mundo');
});

app.listen(3000,()=>{
      console.log('conectando porta padrão 3000')

});