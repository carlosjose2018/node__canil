import express from 'express'
/*----------  Inícia o servidor  ----------*/
import dotenv from 'dotenv'
/*----------  Define a porta do servidor   ----------*/
import mustache from 'mustache-express'
/*----------  Mustache define a engine da aplicação  ----------*/
import path from 'path'
/*----------  caminho relativo  ----------*/

import mainRouter from './routes/index'
/* Import router  */

require('dotenv').config()

const server = express()
/*----------  Inícia o servidor e coloca em uma constante  ----------*/

/*=============================================
=            config gives engine in server  =
=============================================*/
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())
/*=====   final ======*/

server.use(express.static(path.join(__dirname, '../public')))
/*----------  config path folder public  ----------*/

server.use(mainRouter)
/*path router*/

server.use((req, res) => {
  res.send('Página não encontrada !')
})
/* creater router 404 */

server.listen(process.env.PORT || 4000, () => {
  console.log('Servidor iniciado.......')
})
/* init the server */
