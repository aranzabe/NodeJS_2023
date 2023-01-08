require('dotenv').config()
const express = require('express')
const app = express()

const port = 9090

app.use(express.json()); //Si no ponemos esto no podemos leer el body.

//Opción A - Sin controlador.
// app.get('/', function (req, res) {
//   //res.send(200,{'msg','Hola holita'})
//   res.status(200).json({'mes':'Mensaje devuelto'})
// })

// app.get('/:id?', function (req, res) {
//     res.status(200).json({'mes':`Mensaje devuelto para id: ${req.params.id}`})
//   })

// app.delete('/:id?', function (req, res) {
//     res.status(200).json({'mes':`Delete para id: ${req.params.id}`})
//   })

// app.post('/', function (req, res) {
//     console.log(req.body)
//     res.status(200).json({"n":req.body.nombre,"e":req.body.edad})
//   })


//Opción B - Con controlador y mids.
// const controlador = require('./controlador')
// const mids = require('./middlewares')
// app.get('/',controlador.funGet)
// app.get('/:id?',controlador.funGetParam)
// app.post('/', [mids.esMayor, mids.esNombreCorrecto], controlador.funPost)


//Opción C - Con archivo de rutas.
const rutaBase = '/api'
//http://localhost:9090/api
app.use(rutaBase, require('./routes'))




//Arrancar servidor.
app.listen(process.env.PORT)
//console.log(`Servidor arrancado en puerto ${port}`)
console.log(`Servidor arrancado en puerto ${process.env.PORT}`)
//console.log(process.env)