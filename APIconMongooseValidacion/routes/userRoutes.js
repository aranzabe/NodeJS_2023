const {Router } = require('express');
const controlador = require('../controllers/userController');
const router = Router();
const mids = require("../middlewares/userMiddlewares");
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { edadCorrecta, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

//El segundo parámetro (optativo) son los middlewares.
router.get('/', controlador.usuariosGet);
router.get('/:id', controlador.usuarioGet);
router.post('/', 
     [
        check('id').custom( existeUsuarioPorId ),
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        //check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
        check('email', 'El correo no es válido').isEmail(),
        check('email').custom( emailExiste ),
        check('edad','El campo edad no es correcto').isInt(),
        check('edad','Valores de edad no correctos').custom(edadCorrecta),
        check('rol', 'No es un rol válido').isIn(['Admin','Mindundi']),
        validarCampos
     ]
    ,controlador.usuariosPost);
router.put('/:id?', controlador.usuariosPut);
router.delete('/:id', controlador.usuariosDelete);


module.exports = router;