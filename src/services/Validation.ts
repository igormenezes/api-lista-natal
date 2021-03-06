import moment from 'moment'
import jwt from 'jsonwebtoken'
import auth from '../config/auth.json'
import { Json } from 'sequelize/types/lib/utils'

export class Validation {
    static async generateToken(res: any): Promise<Object> {
        return { 
            'token': jwt.sign({id: res.id}, auth.secret, {expiresIn: 300})
        }
    }

    static async successResponse(res: any, defaultMessage: boolean): Promise<Object> {
        if(defaultMessage) {
            return { 
                'Mensagem': 'Operação realizada com sucesso.'
            }
        }

        if(typeof res.length !== "undefined") {
            let response = {};

            Object.keys(res).forEach((item: any) => {
                response[item] = {
                    'ID': res[item].id,
                    'Título': res[item].title,
                    'Descrição': res[item].description,
                    'Data de criação': moment(res[item].createdAt).format('DD/MM/YYYY HH:mm:ss'),
                    'Data de atualização': moment(res[item].updatedAt).format('DD/MM/YYYY HH:mm:ss'),
                    'Mensagem': 'Operação realizada com sucesso.'
                }
            })
            
            return response
        }

        return {
            'ID': res.id,
            'Título': res.title,
            'Descrição': res.description,
            'Data de criação': moment(res.createdAt).format('DD/MM/YYYY HH:mm:ss'),
            'Data de atualização': moment(res.updatedAt).format('DD/MM/YYYY HH:mm:ss'),
            'Mensagem': 'Operação realizada com sucesso.'
        }
    }

    static async errorResponse(res: any): Promise<Object> {
        return {
            'Mensagem': "Ocorreu um erro ao realizar a operação, tente novamente mais tarde. Verifique os dados informados na sua requisição."
        }
    }
}

export default Validation