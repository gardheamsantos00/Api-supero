const express = require('express');
const app = express();
app.use(express.json())

require('./controller/livroController')(app);


app.listen(2222, ()=>{
    console.log("🐱‍🏍 App Supero rodando na porta 2222");
});
