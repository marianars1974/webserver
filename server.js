const express = require('express');

const app = express(); //
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));//phacer publico el directorio y se pueda accecder.
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
//expres hbs engine
app.get('/',  (req, res) =>{
    res.render('home', {
        nombre: 'Mariana'
    });
});


app.get('/about',  (req, res) =>{
    res.render('about', {
        nombre: 'Mariana'
    });
});
    
  

app.listen(port, ()=>{
    console.log(`escuchando en puerto ${port}`);
});