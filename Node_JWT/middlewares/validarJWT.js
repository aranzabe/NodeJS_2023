const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {
    const token = req.header('x-token');  //Este nombre será establecido en el cliente también.

    if (!token){
        return res.status(401).json({'msg':'No hay token en la petición.'});
    }

    try {
        // jwt.verify(token, process.env.SECRETORPRIVATEKEY, (err, decoded) => {
        //     if (err) {
        //       return res.status(401).send({
        //         message: "No autorizado!"
        //       });
        //     }
        //     req.userId = decoded.id;
        //     console.log(req.userId);
        //   });
        
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        console.log(uid);
        console.log(token);
        next();
    }catch(error){
        console.log(error);
        res.status(401).json({'msg':'Token no válido.'});
    }
}

module.exports = {
    validarJWT
}