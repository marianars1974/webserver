const http = require('http');

http.createServer((req,res)=>{

   
    res.writeHead(200, {'content-Type':'application/json'})
    //res.write('hola mundo');
    let salida = [{
        nombre: 'Mariana',
        edad: 45,
        url: req.url
    },{
        nombre: 'Ale',
        edad: 46,
        url: req.url
    }] ;
    res.write(JSON.stringify(salida));
    res.end();

})
.listen(8080);

console.log('escuchando puerto 8080');