## Endpoints API
* `/cadastar`: Cadastro de um pedido de natal
* `/listar`: Listar todos os pedidos de natal
* `/listar/:id`: Listar um pedido de natal pelo id
* `/deletar/:id`: Deletar um pedido de natal pelo id
* `/atualizar/:id`: Atualizar um pedido de natal pelo id
* Exemplos request:
    <pre>
    Cadastrar { Método POST }
    Formato de envio JSON
	{	
		"title": "Título do pedido",
		"description": "Descrição do pedido"
	} 
    </pre>
    <pre>
    Listar { Método GET }
        - /listar
        - /listar/:id
    </pre>
    <pre>
    Atualizar { Método PUT }
        - /atualizar/:id
    </pre>
    <pre>
    Deletar - { Método DELETE }
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
        HTTP 500 Erro
        Formato de resposta: JSON
        Exemplo de Resposta:
        {
            "Mensagem": "Ocorreu um erro ao realizar a operação, tente novamente mais tarde. Verifique os dados informados na sua requisição."
        }
    </pre>
