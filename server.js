const express = require ('express');
const router = express.Router();

const app = express();
app.use(express.json());
app.use(router);

app.get('/',(req,res)=>{
    res.send('hola desde el get')
});

router.post('/',(req,res)=>{
    res.send('hola desde el post')
});

router.delete('/',(req,res)=>{
    res.send('eliminado')
});

/* app.use('/',function(req,res){
    res.send('hola');
});
 */
app.listen(3000);

console.log('la aplicacion esta escuchando en http://localhost:3000');