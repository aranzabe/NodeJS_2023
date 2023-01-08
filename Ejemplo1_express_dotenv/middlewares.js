const esMayor = (req, res, next) => {
    if (req.body.edad >= 18){
        next()
    }
    else {
        res.status(403).json({'msg':'Menor de edad'})
    }
}

const esNombreCorrecto = (req, res, next) => {
    if (req.body.nombre.length < 10){
        res.status(403).json({'msg':'Logitud de la cadena incorrecta'})
    }
    else {
        next()
    }
}

module.exports = {
    esMayor,
    esNombreCorrecto
}