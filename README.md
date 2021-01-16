## Endpoints API
* `/login`: Realizar login e obter token de acesso aos outros endpoints
* `/cadastar`: Cadastro de um pedido de natal
* `/listar`: Listar todos os pedidos de natal
* `/listar/:id`: Listar um pedido de natal pelo id
* `/deletar/:id`: Deletar um pedido de natal pelo id
* `/atualizar/:id`: Atualizar um pedido de natal pelo id
* Exemplos request:
    <pre>
    Login { Método POST }
    Como resposta um token de acesso para os demais endpoints
    Formato de envio JSON
	{	
		"username": "test",
		"description": "test"
	} 
    </pre>
    <pre>
    Cadastrar { Método POST }
    Informar o token de acesso { Authorization Bearer Token }
    Formato de envio JSON
	{	
		"title": "Título do pedido",
		"description": "Descrição do pedido"
	} 
    </pre>
    <pre>
    Listar { Método GET }
    Informar o token de acesso { Authorization Bearer Token }
        - /listar
        - /listar/:id
    </pre>
    <pre>
    Atualizar { Método PUT }
    Informar o token de acesso { Authorization Bearer Token }
        - /atualizar/:id
    </pre>
    <pre>
    Deletar - { Método DELETE }
    Informar o token de acesso { Authorization Bearer Token }
        - /deletar/:id
    </pre>
* Exemplos de retornos:
    <pre>
        HTTP 200 Sucesso
        Formato de resposta: JSON
        Exemplo de Resposta:
        {
            "ID": 1,
            "Título": "Carta de Natal",
            "Descrição": "Quero pedir um presente",
            "Data de criação": "12/01/2021 01:37:49",
            "Data de atualização": "12/01/2021 01:37:49",
            "Mensagem": "Operação realizada com sucesso."
        }
    </pre>
    <pre>
        HTTP 400 Erro na operação
        Formato de resposta: JSON
        Exemplo de Resposta:
        {
            "Mensagem": "Ocorreu um erro ao realizar a operação, tente novamente mais tarde. Verifique os dados informados na sua requisição."
        }
    </pre>
    <pre>
        HTTP 201 Criado
        Formato de resposta: JSON
        Exemplo de Resposta:
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEwODMwMDkyLCJleHAiOjE2MTA4MzAzOTJ9.35gO7Bwg-EdEzBPGGoWuDIDACJh2QTDda-OKTrO5bAA"
        }
    </pre>
    <pre>
        HTTP 401 Erro no login ou autenticação de token
        Formato de resposta: JSON
        Exemplo de Resposta:
        {
            "Mensagem": "Token expirado ou inválido!"
        }
    </pre>
 ## Credenciais de acesso a API:
* `username:` test
* `password:` test


