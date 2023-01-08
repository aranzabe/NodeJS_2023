const {Router } = require('express');
const controlador = require('./controlador');
const router = Router();
const mids = require("./middlewares");

router.get('/',controlador.funGet)
router.get('/:id?',controlador.funGetParam)
router.post('/', [mids.esMayor, mids.esNombreCorrecto], controlador.funPost)

module.exports = router