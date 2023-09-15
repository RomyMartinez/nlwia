import cors from 'cors'  //importa a biblioteca cors dentro de cors
import express from 'express'

import { download } from "./download.js"

const app = express(); //Pegando express e colocando ela no app
app.use(cors())  //Usar o cors para conseguir habilitar a conexao entre o frent end e back end

//get (Metodo) para falar solicitar uma requisicao, summary e o recurso, quando for feito isso ele executa uma funcao. Essa funcao recebe o request (todas as informacoes das requicoes que foram feitas para o nosso servidor), response (Usar devolver uma resposta para quem fez a requisicao)  
app.get("/summary/:id", (request,response) => {
  download(request.params.id)
  response.json({ result: "Download do video realizado com sucesso!" }) //O .json tranforma ele em objeto e conseguimos pegar ele depois no front end
})

app.listen(3333, () => console.log('Server is running on port 3333')) // iniciar servidor, e vai ficar escutando as requisições e executar uma mensagem
