// Importa componentes do express
import {Request, Response} from 'express';

// Importa componentes do express// Controller
function TesteController(req:Request,res:Response) {    // Função transferida do arquivo de rotas    
 // obtém query param        
    const x = req.query.num;        // obtem route param        
    const y = req.params.id;        // Envia resposta ao cliente        
    return res.send(`Resultado: ${Number(x) + Number(y)}`);
}

export default TesteController