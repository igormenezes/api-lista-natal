import request from 'supertest'
import route from '../config/route'
const app = route()

describe('API', () => {
    it('Should create a token', async() => {
        const token = await request(app)
        .post('/login')
        .send({
            'username': 'test',
            'password': 'test'
        })

        expect(token.status).toBe(201)
    })

    it('Should create a new register', async () => {
        const response = await request(app)
            .post('/cadastrar')
            .send({
                'title': 'test',
                'description': 'test'
            })

        expect(response.status).toBe(200)
    })

    it('Should get all register', async () => {
        const response = await request(app)
            .get('/listar')

        expect(response.status).toBe(200)
    })

    it('Should get a register', async () => {
        const result = await request(app)
            .post('/cadastrar')
            .send({
                'title': 'test',
                'description': 'test'
            })

        const response = await request(app)
            .get(`/listar/${result.body.ID}`)

        expect(response.status).toBe(200)
    })

    it('Should update a register', async () => {
        const result = await request(app)
            .post('/cadastrar')
            .send({
                'title': 'test',
                'description': 'test'
            })

        const response = await request(app)
            .put(`/atualizar/${result.body.ID}`)

        expect(response.status).toBe(200)
    })

    it('Should delete a register', async () => {
        const result = await request(app)
            .post('/cadastrar')
            .send({
                'title': 'test',
                'description': 'test'
            })

        const response = await request(app)
            .delete(`/deletar/${result.body.ID}`)

        expect(response.status).toBe(200)
    })
    
})