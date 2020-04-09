//helpers
const hbs = require('hbs');
hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
   });
   hbs.registerHelper('getCap',(texto)=>{
       return texto.toUpperCase();
      
   
      });
   