## Endpoints API
* `/cadastar`: Cadastro de um pedido de natal
* `/listar`: Listar todos os pedidos de natal
* `/listar/:id`: Listar um pedido de natal pelo id
* `/deletar/:id`: Deletar um pedido de natal pelo id
* `/atualizar/:id`: Atualizar um pedido de natal pelo id
* Exemplos request:
    <pre>
    Cadastrar - POST
    JSON
	{	
		"title": "Título do pedido",
		"description": "Descrição do pedido"
	} 
    </pre>
    <pre>
    Listar - GET
        - /listar
        - /listar/:id
    </pre>
    <pre>
    Atualizar - PUT
        - /atualizar/:id
    </pre>
    <pre>
    Deletar - DELETE
        - /deletar/:id
    </pre>