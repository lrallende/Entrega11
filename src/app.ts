import express from 'express'
import path from 'path'
import { Producto } from './producto'
import {CommonRoutesConfig} from './rutas/common.route.config'
import {UsersRoutes} from './rutas/users.route.config'

const PORT = 8080
const routes: Array<CommonRoutesConfig> = []
const app = express()

let productos: Producto [] = []
routes.push(new UsersRoutes(app, productos))

app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'pug')

app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`)
}).on('error', console.log);