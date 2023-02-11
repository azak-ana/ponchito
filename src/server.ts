// importa o express
import express from 'express';
import Roteador from './router';
// instancia o express
const app = express();
//configura porta e funçao executada na ativação
app.use(Roteador);
app.listen(4000, ()=>{console.log("Servidor Iniciado")})

