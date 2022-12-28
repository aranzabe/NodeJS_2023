const {response,request} = require('express');

const usuariosGet =  (req, res = response) => {
    res.status(200).json({'msg':'Get desde controlador'});
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
    usuariosPut
}