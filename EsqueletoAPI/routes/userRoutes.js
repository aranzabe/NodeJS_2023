const {Router } = require('express');
const controlador = require('../controllers/userController');
const router = Router();
const mids = require("../middlewares/userMiddlewares");

//El segundo parámetro (optativo) son los middlewares.
router.get('/',[mids.esMayor],  controlador.usuariosGet);
router.get('/:id?', controlador.usuariosGetParametro)
router.post('/', controlador.usuariosPost);
router.put('/:id?', controlador.usuariosPut);//Con parámetro optativo.
router.delete('/', controlador.usuariosDelete);

//Formas de agrupar rutas. Lo del middleware podría ir en la clase server pero quizá sea más entendible aquí, justo antes de la agrupación de rutas.
router.use('/acceso',[mids.otroMiddleware, mids.esMayor]); //Para agrupar rutas y aplicarles middlewares.
router.route('/acceso') 
    .get( (req, res) => { 
        res.status(200).json({'msg':'Acceso con get!!'});
    })
    .post( (req, res) => {
        res.status(202).json({'msg':'Acceso con post!!'});
    });


module.exports = router;