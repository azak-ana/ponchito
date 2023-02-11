// importa o express
import express from 'express';
// instancia o express
const app = express();
//configura porta e funçao executada na ativação
app.listen(4000, ()=>{console.log("Servidor Iniciado")})

