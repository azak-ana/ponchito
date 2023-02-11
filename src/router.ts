// Importa componentes do express
import { Router } from 'express';
import TesteController from './controllers/TesteController';
import ValidaTeste1 from './middlewares/validaTeste1';
// Importa TesteController
// Instancia roteador
const Roteador = Router();// Define rota tipo get que, para funcionar, deve ser requisitada conforme exemplo.
// Exemplo de requisição: localhost:4000/teste/123?num=456// Onde 123 e 456 podem ser substituídos por quaisquer valores
Roteador.get(    // URL com parêmetro :id    
    '/teste/:id',
    TesteController
    );
export default Roteador;



// REST

// GET = BUSCAR = QUERY E ROUTE
// POST = CRIAR = BODY
// PUT = UPDATE = ROUTE/BODY
// PATCH = UPDATE = ROUTE/BODY
// DELETE = DELETAR = ROUTE