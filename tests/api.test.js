const request = require('supertest')
const route = require('../config/route')
const app = route()

describe('API', () => {
    it('Should create a new register', async () => {
        let response = await request(app)
            .post('/cadastrar')
            .send({
                'title': 'test',
                'description': 'test'
            })

        expect(response.status).toBe(200)
    })

    it('Should get all register', async () => {
        let response = await request(app)
            .get('/listar')

        expect(response.status).toBe(200)
    })

    it('Should get a register', async () => {
        let result = await request(app)
            .post('/cadastrar')
            .send({
                'title': 'test',
                'description': 'test'
            })

        let response = await request(app)
            .get(`/listar/${result.body.ID}`)

        expect(response.status).toBe(200)
    })

    it('Should update a register', async () => {
        let result = await request(app)
            .post('/cadastrar')
            .send({
                'title': 'test',
                'description': 'test'
            })

        let response = await request(app)
            .put(`/atualizar/${result.body.ID}`)

        expect(response.status).toBe(200)
    })

    it('Should delete a register', async () => {
        let result = await request(app)
            .post('/cadastrar')
            .send({
                'title': 'test',
                'description': 'test'
            })

        let response = await request(app)
            .delete(`/deletar/${result.body.ID}`)

        expect(response.status).toBe(200)
    })
    
})