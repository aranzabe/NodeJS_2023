// const {response, request} = require('express')

const funGet = (req, res) => {
    res.status(200).json({'mes':'Mensaje devuelto'})
}

const funGetParam = (req, res) => {
    res.status(200).json({'mes':`Mensaje devuelto para id: ${req.params.id}`})
}

const funPost = (req, res) => {
    res.status(200).json({"n":req.body.nombre,"e":req.body.edad})
}

module.exports = {
    funGet,
    funGetParam,
    funPost
}