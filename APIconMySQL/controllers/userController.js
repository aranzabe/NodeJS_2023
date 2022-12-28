const {response,request} = require('express');
const Conexion = require('./Conexion');

const usuariosGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.conectar();
    conx.getlistado()    
        .then( msg => {
            console.log('Listado correcto!');
            conx.desconectar();
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            conx.desconectar();
            res.status(200).json({'msg':'No se han encontrado registros'});
        });
}

const usuarioGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.conectar();
    // console.log(req.params.dni+"!!!!!");
    conx.getUsuario(req.params.dni)    
        .then( msg => {
            console.log('Listado correcto!');
            conx.desconectar();
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro!');
            conx.desconectar();
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const usuariosPost =  (req = request, res = response) => {
    // const bod = req.body;
    // console.log(bod);
    // res.status(201).json({
    //     msg:'Post desde controlador...',
    //     bod
    // });
    const {nombre, edad} = req.body;
    res.status(201).json({
        msg:'Post desde controlador...',
        nombre,
        edad
    });
}

const usuariosDelete =  (req, res = response) => {
    res.status(202).json({'msg':'Delete desde controlador'});
}

const usuariosPut =  (req, res = response) => {
    const id = req.params.id;
    res.status(202).json({'msg':'Put desde controlador.', id});
}


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut,
    usuarioGet
}