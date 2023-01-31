const {Router } = require('express');
const controlador = require('../controllers/userController');
const router = Router();
const mids = require("../middlewares/userMiddlewares");
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

//El segundo parámetro (optativo) son los middlewares.
router.get('/', controlador.usuariosGet);
router.get('/:id', controlador.usuarioGet);
router.post('/', 
     [
        check('email', 'El correo no es válido').isEmail(),
        validarCampos
     ]
    ,controlador.usuariosPost);
router.put('/:id?', controlador.usuariosPut);
router.delete('/:id', controlador.usuariosDelete);


module.exports = router;