const jwt = require('jsonwebtoken')


const generarJWT = (uid = '') => {
    // return new Promise( (resolve, reject) => {
    //     const payload = { uid };
    //     jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{
    //         expiresIn: '4h'
    //     }, (err, token) => {
    //         if (err){
    //             console.log(err);
    //             reject('No se ha generado el token.');
    //         }
    //         else {
    //             resolve(token);
    //         } 
    //     } )
    // })
    console.log("UID:" + uid)
    var token = jwt.sign({ uid }, process.env.SECRETORPRIVATEKEY, {
        expiresIn: '4h' // 24 hours
      });
    return token;
}

module.exports ={
    generarJWT
}