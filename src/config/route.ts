import express from 'express'
import consign from 'consign'
import bodyParser from 'body-parser'

export = () => {
    const app = express()
    const fileExtension = __filename.split('.')[1]
    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json())

    if(fileExtension == 'ts') {
        consign().include('./src/routes').into(app)
    } else {
        consign().include('./dist/routes').into(app)
    }

    return app
}