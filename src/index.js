const express = require('express');
const app = express();
const mainRoutes = require('./routes/MainRoutes.js');



app.use(express.json());
app.use('/', mainRoutes)

app.listen(3000, () => {
    console.log("Escutando na porta 3000")
});