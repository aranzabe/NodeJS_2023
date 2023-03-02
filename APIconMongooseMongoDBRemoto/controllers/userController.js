const {response,request} = require('express');
const usuarios = require('../models/usuarioMongoose.js');

const usuariosGet =  (req, res = response) => {
    usuarios.find( (err, personas) => {
        if (err) throw err;
        if (personas.length > 0) {
            console.log('Listado correcto!');
            res.status(200).json(personas);
        } else {
            console.log('No hay registro!');
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        }
    });
}

const usuarioGet =  (req, res = response) => {
    usuarios.find({ id: req.params.id }, (err, personas) => {
        if (err) throw err;
        if (personas.length > 0) {
            console.log('Listado correcto!');
            res.status(200).json(personas);
        } else {
            console.log('No hay registro!');
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        }
    });
}

const usuariosPost =  (req = request, res = response) => {
   usuarios.insertMany({
        id: req.body.id,
        nombre: req.body.nombre,
        edad : req.body.edad
   }, (err, personas) => {
        if (err) {
            console.log('Error en el registro!');
            res.status(203).json(err);
            throw err;
        }
        console.log('Registro correcto!');
        res.status(201).json(personas);
    });
}

const usuariosDelete =  (req, res = response) => {
    usuarios.deleteOne({ id: req.params.id  }, (err, personas) => {
        if (err) {
            console.log('Error al borrar el registro!');
            res.status(203).json(err);
            throw err;
        }
        console.log('Borrado correcto!');
        res.status(201).json(personas);
    });
}

const usuariosPut =  (req, res = response) => {
    usuarios.updateOne({ id: req.params.id  },
        {
            nombre: req.body.nombre,
            edad : req.body.edad
        }, (err, personas) => {
        if (err) {
            console.log('Error al modificar el registro!' + req.params.id);
            res.status(203).json(err);
            throw err;
        }
        console.log('Modificado correctamente!');
        res.status(201).json(personas);
    });
}


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut,
    usuarioGet
}