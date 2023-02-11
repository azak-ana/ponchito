// Importa componentes do express
import {Request,Response,NextFunction} from 'express';// verifica se os parâmetros da requisição são válidos
class TesteController{    // Função transferida do arquivo de rotas   
     teste1 (req:Request,res:Response) {        // obtém query param        
        const x = req.query.num;        // obtem route param        
        const y = req.params.id;        // Envia resposta ao cliente       
         return res.send(`Resultado: ${Number(x) + Number(y)}`);    
        }
    }
        //  Validar os parâmetros usando middleware
        function ValidaTeste1 (req:Request,res:Response,next:NextFunction) {    
            const id = req.params.id;    
            const num = req.query.num;    if (Number(id) > 1000 || num == null)    { // Retorna código 400 indicando bad request        
                res.status(400).send("Parâmetros Inválidos");    }    // chama a próxima função na rota e retorna sua resposta   
                 return next();
        }
export default ValidaTeste1